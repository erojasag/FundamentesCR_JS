const express = require('express');
const {
  getpersonData,
  insertpersonData,
  updatepersonData,
  deletepersonData,
} = require('../controllers/personDataController');

const router = express.Router();

router
  .get('/', getpersonData)
  .post('/agregarDatosPersona', insertpersonData)
  .patch('/actualizarDatosPersona/:IdPersonData', updatepersonData)
  .delete('/borrarDatosPersona/:IdPersonData', deletepersonData);

module.exports = router;
