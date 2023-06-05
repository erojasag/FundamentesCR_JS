const express = require('express');
const {
  getPersonInCharge,
  insertPersonInCharge,
  updatePersonInCharge,
  deletePersonInCharge,
} = require('../controllers/personInChargeController');

const router = express.Router();

router
  .get('/VerEncargados', getPersonInCharge)
  .post('/IngresarEncargados', insertPersonInCharge)
  .patch('/EditarEncargados/:IdEncargado', updatePersonInCharge)
  .delete('/EliminarEncargado/:IdEncargado', deletePersonInCharge);

module.exports = router;