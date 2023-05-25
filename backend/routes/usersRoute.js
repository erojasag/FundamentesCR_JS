const express = require('express');
const {
  getAllUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUser,
} = require('../controllers/usersController');

const router = express.Router();


router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).patch(updateUser).delete(deleteUserById);

module.exports = router;
