const express = require('express');

const { protect, restrictTo } = require('../controllers/authController');
const { getPacientesPorEdad } = require('../controllers/pacienteController');
const { getStatsCasa } = require('../controllers/casaController');

const router = express.Router();

router
  .route('/pacientesPorEdad')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getPacientesPorEdad);

router
  .route('/statsCasas')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getStatsCasa);

module.exports = router;
