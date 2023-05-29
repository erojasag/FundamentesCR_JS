const UsuarioModel = require('../models/Usuarios');
const TipoUsuarioModel = require('../models/TipoUsuario');

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res, next) => {
  const usuarios = await UsuarioModel.findAll({
    attributes: { exclude: ['Contrasena'] },
  });
  if (usuarios.length === 0) return next(new AppError('No hay usuarios', 404));

  res.status(200).json({
    status: 'success',
    data: {
      Usuarios: usuarios,
    },
  });
});

const getUserById = catchAsync(async (req, res, next) => {
  //requests the user based on the id
  const usuario = await UsuarioModel.findByPk(req.params.id, {
    attributes: {
      exclude: ['Contrasena'],
    },
  });
  if (!usuario) return next(new AppError('No existe el usuario', 404));

  //requests the user type based on the IdTipoUsuario
  const tipoUsuario = await TipoUsuarioModel.findByPk(usuario.IdTipoUsuario, {
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  usuario.dataValues.IdTipoUsuario = tipoUsuario.dataValues.Descripcion;

  res.status(200).json({
    status: 'success',
    data: {
      usuario,
    },
  });
});

const updateUser = catchAsync(async (req, res, next) => {
  const usuario = await UsuarioModel.findByPk(req.params.id, {
    attributes: { exclude: ['updatedAt'] },
  });

  if (!usuario)
    return next(
      new AppError('El usuario que intenta modificar no existe', 404)
    );

  usuario.Nombre = req.body.Nombre;
  usuario.Apellido1 = req.body.Apellido1;
  usuario.Apellido2 = req.body.Apellido2;
  usuario.Cedula = req.body.Cedula;
  usuario.Correo = req.body.Correo;
  usuario.Contrasena = req.body.Contrasena;
  usuario.ConfirmaContrasena = req.body.ConfirmaContrasena;

  const query = await usuario.save();
  if (!query)
    return next(new AppError('No se pudo actualizar el usuario', 500));

  res.status(200).json({
    status: 'success',
    message: 'Usuario actualizado',
  });
});

const deleteUserById = async (req, res, next) => {
  const query = await UsuarioModel.destroy({
    where: {
      IdUsuario: req.params.id,
    },
  });

  if (!query) return next(new AppError('No se pudo eliminar el usuario', 500));
  res.status(200).json({
    status: 'success',
    message: 'Usuario eliminado',
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUserById,
};
