const express = require('express');
const {
  getAllExpedientes,
  createExpediente,
  getExpedienteById,
  deleteExpedienteById,
  updateExpediente,
} = require('../controllers/expedientesController');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getAllExpedientes)
  .post(createExpediente);
router
  .route('/:id')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getExpedienteById)
  .patch(deleteExpedienteById)
  .delete(updateExpediente);

module.exports = router;
