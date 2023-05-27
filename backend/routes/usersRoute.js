const express = require('express');
const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
} = require('../controllers/usersController');

const { signup, login } = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(signup);

router.route('/login').post(login);

router.route('/').get(getAllUsers);
router.route('/:id').get(getUserById).patch(updateUser).delete(deleteUserById);

module.exports = router;
