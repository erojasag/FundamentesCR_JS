const userModel = require('../models/Usuarios');

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const { getOne, getAll } = require('./handlerFactory');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

//ONLY FOR ADMINS
const getAllUsers = getAll(userModel);

//ONLY FOR ADMINS
const getUserById = getOne(userModel);

const updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.confirmPassword)
    return next(
      new AppError('Esta ruta no es para actualizar la contraseña', 400)
    );

  const filteredBody = filterObj(
    req.body,
    'nombre',
    'primerApe',
    'segundoApe',
    'email'
  );

  const updateUser = await userModel.update(filteredBody, {
    where: {
      IdUser: req.user.usuarioId,
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
          usuarioId: req.body.usuarioId,
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
  getAllUsers,
  getUserById,
  updateMe,
  deleteMe,
  deactivateUser,
};
