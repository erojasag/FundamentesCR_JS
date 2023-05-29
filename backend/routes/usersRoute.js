const express = require('express');
const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
} = require('../controllers/usersController');

const {
  signup,
  login,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
} = require('../controllers/authController');

const router = express.Router();

router
  .post('/signup', signup)
  .post('/login', login)
  .post('/forgotPassword', forgotPassword)
  .patch('/resetPassword/:token', resetPassword);

router.route('/').get(protect, getAllUsers);
router
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(protect, restrictTo('Administrador', 'Psicologo'), deleteUserById);

module.exports = router;
