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
  .post('/signup', signup)
  .post('/login', login)
  .post('/forgotPassword', forgotPassword)
  .patch('/resetPassword/:token', resetPassword)
  .post('/updateMyPassword', protect, updateMyPassword)
  .patch('/updateMe', protect, updateMe)
  .delete('/deleteMe', protect, deleteMe)
  .delete(
    '/deactivateUser',
    protect,
    restrictTo('Administrador'),
    deactivateUser
  );

router
  .route('/')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getAllUsers);

router.route('/:id').get(protect, getUserById);

module.exports = router;
