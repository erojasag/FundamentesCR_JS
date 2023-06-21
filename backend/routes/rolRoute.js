const express = require('express');
const {
  getAllRoles,
  getRolById,
  agregarRol,
  updateRol,
  deleteRol,
} = require('../controllers/rolController');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('Administrador'), getAllRoles)
  .post(protect, restrictTo('Administrador'), agregarRol);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador'), getRolById)
  .patch(protect, restrictTo('Administrador'), updateRol)
  .delete(protect, restrictTo('Administrador'), deleteRol);

module.exports = router;
