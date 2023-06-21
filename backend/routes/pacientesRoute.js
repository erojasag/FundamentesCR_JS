const express = require('express');
const {
  getPaciente,
  getAllPacientes,
  agregarPaciente,
  updatePaciente,
  desactivarPaciente,
} = require('../controllers/pacienteController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getAllPacientes)
  .post(protect, restrictTo('Administrador', 'Psicologo'), agregarPaciente);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getPaciente)
  .patch(protect, restrictTo('Administrador', 'Psicologo'), updatePaciente)
  .delete(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    desactivarPaciente
  );



module.exports = router;
