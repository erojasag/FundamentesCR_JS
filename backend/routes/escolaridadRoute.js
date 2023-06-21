const express = require('express');

const router = express.Router();

const {
  getAllEscolaridades,
  getEscolaridadById,
  agregarEscolaridad,
  updateEscolaridad,
} = require('../controllers/escolaridadController');

const { protect, restrictTo } = require('../controllers/authController');

router
  .route('/')
  .get(protect, restrictTo('Administrador'), getAllEscolaridades)
  .post(protect, restrictTo('Administrador'), agregarEscolaridad);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador'), getEscolaridadById)
  .patch(protect, restrictTo('Administrador'), updateEscolaridad);

module.exports = router;
