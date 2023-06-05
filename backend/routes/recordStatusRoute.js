const express = require('express');
const {
  getRecordStatus,
  insertRecordStatus,
  updateRecordStatus,
  deleteRecordStatus,
} = require('../controllers/recordStatusController');

const router = express.Router();

router
  .get('/VerEstadoRegistros', getRecordStatus)
  .post('/IngresarEstadoRegistros', insertRecordStatus)
  .patch('/EditarEstadoRegistros/:IdEstadoRegistro', updateRecordStatus)
  .delete('/EliminarEstadoRegistro/:IdEstadoRegistro', deleteRecordStatus);

module.exports = router;