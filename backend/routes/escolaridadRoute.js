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
  .get(protect, restrictTo('Administrador', 'Psicologo'), getAllEscolaridades)
  .post(protect, restrictTo('Administrador', 'Psicologo'), agregarEscolaridad);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getEscolaridadById)
  .patch(protect, restrictTo('Administrador', 'Psicologo'), updateEscolaridad);

module.exports = router;
