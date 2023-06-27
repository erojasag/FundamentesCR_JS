const express = require('express');

const router = express.Router();

const {
  getAllEncargados,
  getEncargadoById,
  agregarEncargado,
  updateEncargado,
} = require('../controllers/encargadoController');

const { protect, restrictTo } = require('../controllers/authController');

router
  .route('/')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getAllEncargados)
  .post(protect, restrictTo('Administrador', 'Psicologo'), agregarEncargado);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getEncargadoById)
  .patch(protect, restrictTo('Administrador', 'Psicologo'), updateEncargado);

module.exports = router;
