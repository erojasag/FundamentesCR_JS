const userModel = require('../models/usuario');

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
const createUser = catchAsync(async (req, res, next) => {
  if (req.body.rolId !== 'Administrador' && req.body.rolId !== 'Psicologo')
    return next(new AppError('El rol que intenta asignar no existe', 404));

  if (req.body.rolId === 'Administrador') {
    req.body.rolId = process.env.DEFAULT_ROLE_ADMIN;
  } else if (req.body.rolId === 'Psicologo') {
    req.body.rolId = process.env.DEFAULT_ROLE;
  }

  console.log(req.body.rolId);

  const doc = await userModel.create(req.body);

  if (!doc) return next(new AppError('No se pudo crear el registro', 500));

  res.status(201).json({
    status: 'success',
    data: {
      data: null,
    },
  });
});

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
  console.log(req.params);
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
};
