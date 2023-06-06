const userModel = require('../models/User');

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
  const users = await userModel.findAll();

  res.status(200).json({
    status: 'success',
    data: {
      Users: users,
    },
  });
});

//ONLY FOR ADMINS
const getUserById = catchAsync(async (req, res, next) => {
  //requests the user based on the id
  const user = await userModel.findByPk(req.params.id);
  if (!user) return next(new AppError('No existe el usuario', 404));

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

const updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.confirmPassword)
    return next(
      new AppError('Esta ruta no es para actualizar la contraseña', 400)
    );

  const filteredBody = filterObj(
    req.body,
    'name',
    'firstLastName',
    'secondLastName',
    'email'
  );

  const updateUser = await userModel.update(filteredBody, {
    where: {
      IdUser: req.user.idUser,
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

  const updatedUser = await userModel.findByPk(req.user.idUser);

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
      { active: false },
      {
        where: {
          IdUser: req.user.IdUser,
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
      { active: false },
      {
        where: {
          IdUser: req.body.id,
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
