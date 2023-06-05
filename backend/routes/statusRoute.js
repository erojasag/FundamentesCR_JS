const express = require('express');
const {
  getStatus,
  insertStatus,
  updateStatus,
  deleteStatus,
} = require('../controllers/statusController');

const router = express.Router();

router
  .get('/VerEstatus', getStatus)
  .post('/IngresarEstatus', insertStatus)
  .patch('/EditarEstatus/:IdEstatus', updateStatus)
  .delete('/EliminarEstatus/:IdEstatus', deleteStatus);

module.exports = router;