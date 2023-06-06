const express = require('express');
const {
  getPersonInCharge,
  insertPersonInCharge,
  updatePersonInCharge,
  deletePersonInCharge,
} = require('../controllers/personInChargeController');

const router = express.Router();

router
  .get('/', getPersonInCharge)
  .post('/nuevoEncargado', insertPersonInCharge)
  .patch('/editarEncargado/:IdEncargado', updatePersonInCharge)
  .delete('/eliminarEncargado/:IdEncargado', deletePersonInCharge);

module.exports = router;