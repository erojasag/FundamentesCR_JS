const express = require('express');
const {
  getRecord,
  insertRecord,
  updateRecord,
  deleteRecord,
} = require('../controllers/recordController');

const router = express.Router();

router
  .get('/VerRegistros', getRecord)
  .post('/IngresarRegistros', insertRecord)
  .patch('/EditarRegistros/:IdRegistro', updateRecord)
  .delete('/EliminarRegistro/:IdRegistro', deleteRecord);

module.exports = router;