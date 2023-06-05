const express = require('express');
const {
  getPsicosocialFactor,
  insertPsicosocialFactor,
  updatePsicosocialFactor,
  deletePsicosocialFactor,
} = require('../controllers/psicosocialFactorController');

const router = express.Router();

router
  .get('/VerFavtores', getPsicosocialFactor)
  .post('/IngresarFactores', insertPsicosocialFactor)
  .patch('/EditarFactores/:IdFactor', updatePsicosocialFactor)
  .delete('/EliminarFactor/:IdFactor', deletePsicosocialFactor);

module.exports = router;