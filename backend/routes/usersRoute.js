const express = require('express');
const {
  getAllUsers,
  getUserById,
  deleteMe,
  updateMe,
  deactivateUser,
} = require('../controllers/usersController');

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
  .delete('/desactivarMiCuenta', protect, deleteMe)
  .delete(
    '/desactivarUsuario/:id',
    protect,
    restrictTo('Administrador'),
    deactivateUser
  );

router
  .route('/')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getAllUsers);

router.route('/:id').get(protect, getUserById);

module.exports = router;
