const userModel = require('../models/usuario');

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const randomPass = require('../utils/randomPass');
const sendEmail = require('../utils/email');
const { createAndSendToken } = require('./authController');
const { getOne } = require('./handlerFactory');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

//ONLY FOR ADMINS
const createUser = catchAsync(async (req, res, next) => {
  if (
    req.body.rol.nombreRol !== 'Administrador' &&
    req.body.rol.nombreRol !== 'Psicologo'
  )
    return next(new AppError('El rol que intenta asignar no existe', 404));

  if (req.body.rol.nombreRol === 'Administrador') {
    req.body.rolId = process.env.DEFAULT_ROLE_ADMIN;
  } else if (req.body.rol.nombreRol === 'Psicologo') {
    req.body.rolId = process.env.DEFAULT_ROLE;
  }

  // const { unhashedPassword, password } = await randomPass();
  const password = await randomPass();
  if (req.body.contrasena === '' || req.body.confirmContrasena === '') {
    req.body.contrasena = password;
    req.body.confirmContrasena = password;
  }
  const doc = await userModel.create(req.body);
  const message = `Bienvenido a fundamentes ${req.body.nombre} ${req.body.primerApe}!.
         Username: ${req.body.email}
         Password: ${password}
         Porfavor activa tu cuenta ingresando al siguiente link: https://${process.env.URL}/activarCuenta/${doc.dataValues.activationToken}`;
  if (!doc) return next(new AppError('No se pudo crear el registro', 500));

  try {
    await sendEmail({
      email: req.body.email,
      subject: 'Activacion de cuenta.',
      message,
    });

    res.status(201).json({
      status: 'success',
      message: 'Token enviado a su correo',
    });
  } catch (err) {
    doc.contrasenaResetToken = null;
    doc.contrasenaResetExpires = null;
    await doc.save();

    return next(
      new AppError(
        'Hubo un error al enviar el correo, por favor intente de nuevo',
        500
      )
    );
  }
});

const activateUser = catchAsync(async (req, res, next) => {
  const { token } = req.params;

  const user = await userModel.findOne({
    where: {
      activo: false,
      activationToken: token,
    },
  });
  if (user) {
    if (!req.body.contrasena || !req.body.confirmContrasena)
      return next(
        new AppError(
          'Por favor ingrese su nueva contraseña y confirmación de contraseña',
          400
        )
      );

    user.activo = true;
    user.activationToken = null;
    user.contrasena = req.body.contrasena;
    user.confirmContrasena = req.body.confirmContrasena;
    await user.save();
    createAndSendToken(user, 200, res);
  }

  const deactivatedUser = await userModel.findOne({
    where: {
      usuarioId: token,
    },
  });
  if (deactivatedUser) {
    deactivatedUser.activo = true;
    const pass = await randomPass();
    deactivatedUser.contrasena = pass;
    deactivatedUser.confirmContrasena = pass;
    await deactivatedUser.save();
    createAndSendToken(deactivatedUser, 200, res);
  }

  if (!user && !deactivatedUser)
    return next(new AppError('Token inválido', 400));
});

//ONLY FOR ADMINS
const getAllUsers = catchAsync(async (req, res, next) => {
  let search = null;
  if (req.query.q === 'false') {
    search = false;
  } else {
    search = true;
  }
  const users = await userModel.findAll({
    where: {
      activo: search,
    },
  });

  if (!users) return next(new AppError('No se encontraron registros', 404));

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

//ONLY FOR ADMINS
const getUserById = getOne(userModel);

const updateUserById = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.confirmPassword)
    return next(
      new AppError('Esta ruta no es para actualizar la contraseña', 400)
    );

  if (req.body.rol.nombreRol === 'Administrador') {
    req.body.rolId = process.env.DEFAULT_ROLE_ADMIN;
  } else if (req.body.rol.nombreRol === 'Psicologo') {
    req.body.rolId = process.env.DEFAULT_ROLE;
  }

  const filteredBody = filterObj(
    req.body,
    'nombre',
    'primerApe',
    'segundoApe',
    'email',
    'rolId'
  );

  await userModel.update(filteredBody, {
    where: {
      usuarioId: req.body.usuarioId,
    },
  });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

const updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.confirmPassword)
    return next(
      new AppError('Esta ruta no es para actualizar la contraseña', 400)
    );
  if (
    req.body.nombre === '' ||
    req.body.primerApe === '' ||
    req.body.segundoApe === '' ||
    req.body.email === ''
  ) {
    return next(new AppError('Por favor ingrese todos los campos', 400));
  }
  const filteredBody = filterObj(
    req.body,
    'nombre',
    'primerApe',
    'segundoApe',
    'email'
  );

  const updateUser = await userModel.update(filteredBody, {
    where: {
      usuarioId: req.user.usuarioId,
    },
    attributes: {
      exclude: ['updatedAt'],
    },
    validators: true,
  });

  if (!updateUser)
    return next(
      new AppError('El usuario que intenta modificar no existe', 404)
    );
  if (!updateUser)
    return next(new AppError('No se pudo actualizar el usuario', 500));

  const updatedUser = await userModel.findByPk(req.user.usuarioId);

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

const deleteMe = catchAsync(async (req, res, next) => {
  if (
    !(await userModel.update(
      { activo: false },
      {
        where: {
          usuarioId: req.user.usuarioId,
        },
      }
    ))
  ) {
    return next(new AppError('No se pudo desactivar el usuario', 500));
  }

  res.status(204).json({
    status: 'success',
    message: 'Usuario desactivado',
  });
});

const deactivateUser = catchAsync(async (req, res, next) => {
  if (
    !(await userModel.update(
      { activo: false },
      {
        where: {
          usuarioId: req.params.id,
        },
      }
    ))
  ) {
    return next(new AppError('No se pudo desactivar el usuario', 500));
  }

  res.status(204).json({
    status: 'success',
    message: 'Usuario desactivado',
  });
});


module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateMe,
  deleteMe,
  deactivateUser,
  updateUserById,
  activateUser,
};
