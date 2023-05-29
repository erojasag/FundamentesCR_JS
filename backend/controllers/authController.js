const jwt = require('jsonwebtoken');
// const { Op } = require('sequelize');
const crypto = require('crypto');
const UsuarioModel = require('../models/Usuarios');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');

const db = require('../config/db');
const TipoUsuario = require('../models/TipoUsuario');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = catchAsync(async (req, res, next) => {
  const newUser = await UsuarioModel.build(req.body);
  await db.query('DISABLE TRIGGER ALL ON Usuarios;');
  const query = await newUser.save();
  await db.query('ENABLE TRIGGER ALL ON Usuarios;');

  if (!query) return next(new AppError('No se pudo crear el usuario', 500));

  const token = signToken(query.IdUsuario);

  const rolUsuario = await TipoUsuario.getRole(query.IdTipoUsuario);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: query,
      role: rolUsuario,
    },
  });
});

const login = catchAsync(async (req, res, next) => {
  const { Correo, Contrasena } = req.body;

  if (!Correo || !Contrasena)
    return next(new AppError('Por favor ingrese su correo y contraseña', 400));

  const user = await UsuarioModel.findOne({
    where: { Correo: req.body.Correo },
  });

  if (!user) return next(new AppError('El usuario no existe', 401));
  if (
    !user ||
    !(await UsuarioModel.correctPassword(Contrasena, user.Contrasena))
  ) {
    return next(new AppError('Correo o contraseña incorrectos', 401));
  }
  const token = signToken(user.IdUsuario);

  res.status(200).json({
    status: 'success',
    token,
  });
});

const verifyToken = async (token) => {
  return await jwt.verify(token, process.env.JWT_SECRET);
};

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
  const currentUser = await UsuarioModel.findByPk(id);
  if (!currentUser)
    return next(
      new AppError('El usuario al que pertenece el token ya no existe', 401)
    );

  //validamos si el usuario cambio la contraseña despues de que se emitió el token
  if (UsuarioModel.changedPasswordAfter(iat)) {
    return next(
      new AppError(
        'El usuario cambió la contraseña recientemente, por favor inicie sesión de nuevo',
        401
      )
    );
  }

  const rolUsuario = await TipoUsuario.getRole(currentUser.IdTipoUsuario);
  currentUser.role = rolUsuario;

  //GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
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
  const user = await UsuarioModel.findOne({
    where: { Correo: req.body.Correo },
  });
  if (!user) {
    return next(new AppError('No hay un usuario asociado a este correo', 404));
  }

  const resetToken = UsuarioModel.createPasswordResetToken();
  user.ContrasenaResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  user.ContrasenaResetExpires = Date.now() + 10 * 60 * 1000;

  await user.save();

  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/users/resetPassword/${resetToken}`;

  const message = `Olvidó su contraseña? Envíe un PATCH con su nueva contraseña y confirmación de contraseña a: ${resetURL}.\nSi no olvidó su contraseña, por favor ignore este correo`;

  try {
    await sendEmail({
      email: user.Correo,
      subject: 'Su token de reseteo de contraseña (válido por 10 minutos)',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token enviado a su correo',
    });
  } catch (err) {
    user.ContrasenaResetToken = null;
    user.ContrasenaResetExpires = null;
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
  if (!req.body.Contrasena || !req.body.ConfirmaContrasena)
    return next(
      new AppError(
        'Por favor ingrese su nueva contraseña y confirmación de contraseña',
        400
      )
    );
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  console.log(hashedToken);

  const user = await UsuarioModel.findOne({
    where: {
      ContrasenaResetToken: hashedToken,
      // ContrasenaResetExpires: { [Op.gt]: Date.now() },
    },
  });

  console.log(user);

  if (!user) {
    return next(new AppError('El token es inválido o ha expirado', 400));
  }

  user.Contrasena = req.body.Contrasena;
  user.ConfirmaContrasena = req.body.ConfirmaContrasena;
  user.ContrasenaResetToken = null;
  user.ContrasenaResetExpires = null;

  //salvamos los tokens nullos despues del reseteo
  await user.save();

  const token = signToken(user.IdUsuario);
  res.status(200).json({
    status: 'success',
    token,
    message: 'Contraseña actualizada',
  });
});

module.exports = {
  signup,
  login,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
};
