const express = require('express');
const {
  createUser,
  getAllUsers,
  getUserById,
  deleteMe,
  updateMe,
  deactivateUser,
  updateUserById,
  activateUser,
  getDeactivatedUsers,
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
  .patch(
    '/actualizarMiContrasena',
    protect,
    restrictTo('Administrador', 'Psicologo'),
    updateMyPassword
  )
  .patch('/actualizarMiPerfil', protect, updateMe)
  .delete('/desactivarMiCuenta', protect, deleteMe)
  .patch('/activarUsuario/:token', activateUser)
  .get(
    '/usuariosInactivos',
    protect,
    restrictTo('Administrador'),
    getDeactivatedUsers
  );

router
  .route('/')
  .get(protect, restrictTo('Administrador'), getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getUserById)
  .delete(protect, restrictTo('Administrador'), deactivateUser)
  .patch(protect, restrictTo('Administrador'), updateUserById);

module.exports = router;
