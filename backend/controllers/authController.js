const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const crypto = require('crypto');
const userModel = require('../models/usuario');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const verifyToken = async (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const createAndSendToken = (user, statusCode, res) => {
  const token = signToken(user.usuarioId);

  const expirationTime =
    (Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 100) /
    100000;

  const cookieOptions = {
    maxAge: expirationTime,
    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  user.contrasena = undefined;
  res.cookie('jwt', token, cookieOptions);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

const signup = catchAsync(async (req, res, next) => {
  const newUser = await userModel.create(req.body);
  await newUser.save();

  if (!newUser) return next(new AppError('No se pudo crear el usuario', 500));

  const user = await userModel.findByPk(newUser.usuarioId);

  user.contrasena = undefined;
  createAndSendToken(user, 201, res);
});

const login = catchAsync(async (req, res, next) => {
  const { email, contrasena } = req.body;

  if (!email || !contrasena)
    return next(new AppError('Por favor ingrese su correo y contraseña', 400));

  const user = await userModel.findOne({
    where: { email: req.body.email },
  });

  if (!user) return next(new AppError('El usuario no existe', 401));
  if (!user || !(await userModel.checkPassword(contrasena, user.contrasena))) {
    return next(new AppError('Correo o contraseña incorrectos', 401));
  }
  user.contrasena = undefined;
  createAndSendToken(user, 200, res);
});

const protect = catchAsync(async (req, res, next) => {
  let token;
  //recibimos el token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  //validamos el token
  if (!token) return next(new AppError('Por favor inicie sesión', 401));

  const { id, iat } = await verifyToken(token);
  const currentUser = await userModel.findByPk(id);
  if (!currentUser)
    return next(
      new AppError('El usuario al que pertenece el token ya no existe', 401)
    );

  //validamos si el usuario cambio la contraseña despues de que se emitió el token
  if (userModel.changedPasswordAfter(iat)) {
    return next(
      new AppError(
        'El usuario cambió la contraseña recientemente, por favor inicie sesión de nuevo',
        401
      )
    );
  }

  //GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  req.user.role = currentUser.rol.nombreRol;
  next();
});

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('No tiene permisos para realizar esta acción', 403)
      );
    }
    next();
  };
};

//Forgot Password
const forgotPassword = catchAsync(async (req, res, next) => {
  const user = await userModel.findOne({
    where: { email: req.body.email },
  });
  if (!user) {
    return next(new AppError('No hay un usuario asociado a este correo', 404));
  }

  const resetToken = userModel.createPasswordResetToken();
  user.contrasenaResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  user.contrasenaResetExpires = Date.now() + 10 * 60 * 1000;

  await user.save();

  const resetURL = `${req.protocol}://localhost:5000/usuarios/reiniciarContrasena/${resetToken}`;

  const message = `Olvidó su contraseña? Ingrese su nueva contraseña y confirmación de contraseña a: ${resetURL}\nSi no olvidó su contraseña, por favor ignore este correo`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Su token de reseteo de contraseña (válido por 10 minutos)',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token enviado a su correo',
    });
  } catch (err) {
    user.contrasenaResetToken = null;
    user.contrasenaResetExpires = null;
    await user.save();

    return next(
      new AppError(
        'Hubo un error al enviar el correo, por favor intente de nuevo',
        500
      )
    );
  }
});

const resetPassword = catchAsync(async (req, res, next) => {
  if (!req.body.contrasena || !req.body.confirmContrasena)
    return next(
      new AppError(
        'Por favor ingrese su nueva contraseña y confirmación de contraseña',
        400
      )
    );
  if (req.body.contrasena !== req.body.confirmContrasena)
    return next(new AppError('Las contraseñas no coinciden', 400));

  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await userModel.findOne({
    where: {
      contrasenaResetToken: hashedToken,
      contrasenaResetExpires: { [Op.gt]: Date.now() },
    },
  });

  if (!user) {
    return next(new AppError('El token es inválido o ha expirado', 400));
  }

  user.contrasena = req.body.contrasena;
  user.contrasenaPassword = req.body.contrasenaPassword;
  user.contrasenaResetToken = null;
  user.contrasenaResetExpires = null;

  //salvamos los tokens nullos despues del reseteo
  await user.save();

  createAndSendToken(user, 200, res);
});

const updateMyPassword = catchAsync(async (req, res, next) => {
  //get the user from collection
  const user = await userModel.findByPk(req.user.usuarioId, {
    validators: true,
  });

  //check if posted current password is correct
  if (
    !(await userModel.checkPassword(
      req.body.currentContrasena,
      user.contrasena
    ))
  ) {
    return next(new AppError('Su contraseña actual es incorrecta', 401));
  }

  //if so, update password
  user.contrasena = req.body.contrasena;
  user.confirmContrasena = req.body.confirmContrasena;
  await user.save();

  //salvamos los tokens nullos despues del reseteo
  createAndSendToken(user, 200, res);
});
module.exports = {
  signup,
  login,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
  updateMyPassword,
};
