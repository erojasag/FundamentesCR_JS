const express = require('express');
const {
  getcoexistence,
  insertcoexistence,
  updatecoexistence,
  deletecoexistence,
} = require('../controllers/coexistenceController');

const router = express.Router();

router
  .get('/', getcoexistence)
  .post('/insertarCoexistencia', insertcoexistence)
  .patch('/actualizarCoexistencia/:IdCoexistence', updatecoexistence)
  .delete('/borrarCoexistencia/:IdCoexistence', deletecoexistence);

module.exports = router;
