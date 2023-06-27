const express = require('express');
const {
  createUser,
  getAllUsers,
  getUserById,
  deleteMe,
  updateMe,
  deactivateUser,
} = require('../controllers/usuarioController');

const {
  signup,
  login,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
  updateMyPassword,
} = require('../controllers/authController');

const router = express.Router();

router
  .post('/registrarse', signup)
  .post('/login', login)
  .post('/olvidarContrasena', forgotPassword)
  .patch('/reiniciarContrasena/:token', resetPassword)
  .patch('/actualizarMiContrasena', protect, updateMyPassword)
  .patch('/actualizarMiPerfil', protect, updateMe)
  .delete('/desactivarMiCuenta', protect, deleteMe);

router
  .route('/')
  .get(protect, restrictTo('Administrador'), getAllUsers)
  .post(protect, restrictTo('Administrador'), createUser);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador'), getUserById)
  .delete(protect, restrictTo('Administrador'), deactivateUser);

module.exports = router;
