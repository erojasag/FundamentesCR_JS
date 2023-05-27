const argon2 = require('argon2');
const UserModel = require('../models/Usuario');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../config/db');

const signup = catchAsync(async (req, res, next) => {
  const newUser = await UserModel.build(req.body);
  await db.query('DISABLE TRIGGER ALL ON Usuarios;');
  const query = await newUser.save();
  await db.query('ENABLE TRIGGER ALL ON Usuarios;');

  if (!query) return next(new AppError('No se pudo crear el usuario', 500));

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
    message: 'Usuario creado',
  });
});

const login = catchAsync(async (req, res, next) => {
  const query = await UserModel.findOne({ where: { Correo: req.body.Correo } });
  if (!query) return next(new AppError('Usuario no encontrado', 404));

  if (await argon2.verify(query.Contrasena, req.body.Contrasena)) {
    res.status(200).json({
      status: 'success',
      message: 'Usuario logueado',
    });
  } else {
    return next(new AppError('Contraseña incorrecta', 401));
  }
});

module.exports = { signup, login };
