const express = require('express');

const { protect, restrictTo } = require('../controllers/authController');
const {
  getPacientesPorEdad,
  getStatsCasa,
  getPacientesPorGenero,
  getPacientesPorAnoEscolar,
} = require('../controllers/statsController');

const router = express.Router();

router
  .route('/pacientesPorEdad')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getPacientesPorEdad);

router
  .route('/casas')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getStatsCasa);

router
  .route('/pacientesPorGenero')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getPacientesPorGenero
  );

router
  .route('/pacientesPorAnoEscolar')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getPacientesPorAnoEscolar
  );

module.exports = router;
