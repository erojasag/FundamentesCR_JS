const express = require('express');
const {
  getAllDatosMedicos,
  getDatoMedicoById,
  agregarDatoMedico,
  updateDatoMedico,
} = require('../controllers/datoMedicoController');
const { restrictTo, protect } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getAllDatosMedicos)
  .post(protect, restrictTo('Administrador', 'Psicologo'), agregarDatoMedico);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getDatoMedicoById)
  .patch(protect, restrictTo('Administrador', 'Psicologo'), updateDatoMedico);

module.exports = router;
