const UsuarioModel = require('../models/Usuarios');
const TipoUsuarioModel = require('../models/TipoUsuario');

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};


//ONLY FOR ADMINS
const getAllUsers = catchAsync(async (req, res, next) => {
  const usuarios = await UsuarioModel.findAll();

  res.status(200).json({
    status: 'success',
    data: {
      Usuarios: usuarios,
    },
  });
});


//ONLY FOR ADMINS
const getUserById = catchAsync(async (req, res, next) => {
  //requests the user based on the id
  const usuario = await UsuarioModel.findByPk(req.params.id, {
    attributes: {
      exclude: ['Contrasena'],
    },
  });
  if (!usuario) return next(new AppError('No existe el usuario', 404));

  //requests the user type based on the IdTipoUsuario
  const tipoUsuario = await TipoUsuarioModel.findByPk(usuario.IdTipoUsuario);
  usuario.dataValues.IdTipoUsuario = tipoUsuario.dataValues.Descripcion;

  res.status(200).json({
    status: 'success',
    data: {
      usuario,
    },
  });
});

const updateMe = catchAsync(async (req, res, next) => {
  if (req.body.Contrasena || req.body.ConfirmaContrasena)
    return next(
      new AppError('Esta ruta no es para actualizar la contraseña', 400)
    );

  const filteredBody = filterObj(req.body, 'Nombre', 'Correo');
  // const oldUser = await UsuarioModel.findByPk(req.user.IdUsuario);
  const updateUser = await UsuarioModel.update(filteredBody, {
    where: {
      IdUsuario: req.user.IdUsuario,
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

  const updatedUser = await UsuarioModel.findByPk(req.user.IdUsuario);

  res.status(200).json({
    status: 'success',
    data: {
      usuario: updatedUser,
    },
  });
});

const deleteMe = async (req, res, next) => {
  if (
    !(await UsuarioModel.update(
      { Activo: false },
      {
        where: {
          IdUsuario: req.user.IdUsuario,
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
};

module.exports = {
  getAllUsers,
  getUserById,
  updateMe,
  deleteMe,
};
