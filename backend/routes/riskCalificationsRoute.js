const express = require('express');
const {
  getRiskCalification,
  insertRiskCalification,
  updateRiskCalification,
  deleteRiskCalification,
} = require('../controllers/riskCalificationController');

const router = express.Router();

router
  .get('/VerCalificaciones', getRiskCalification)
  .post('/IngresarCalificacion', insertRiskCalification)
  .patch('/EditarCalificacion/:IdCalificacion', updateRiskCalification)
  .delete('/EliminarCalificacion/:IdCalificacion', deleteRiskCalification);

module.exports = router;