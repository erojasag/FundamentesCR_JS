const express = require('express');
const {
  getSocioEconomicsData,
  insertSocioEconomicsData,
  updateSocioEconomicsData,
  deleteSocioEconomicsData,
} = require('../controllers/socioEconomicsDataController');

const router = express.Router();

router
  .get('/VerDatosSocioEconomicos', getSocioEconomicsData)
  .post('/IngresarDatoSocioEconomico', insertSocioEconomicsData)
  .patch('/EditarDatoSocioEconomico/:IdDatoSocioEconomico', updateSocioEconomicsData)
  .delete('/EliminarDatoSocioEconomico/:IdDatoSocioEconomico', deleteSocioEconomicsData);

module.exports = router;