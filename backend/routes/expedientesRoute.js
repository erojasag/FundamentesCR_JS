const express = require('express');
const {
  getExpedientes,
  agregarExpediente,
  getExpedienteById,
  updateExpediente,
} = require('../controllers/expedienteController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getExpedientes)
  .post(protect, restrictTo('Administrador', 'Psicologo'), agregarExpediente);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getExpedienteById)
  .patch(protect, restrictTo('Administrador', 'Psicologo'), updateExpediente);
module.exports = router;
