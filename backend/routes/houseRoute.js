const express = require('express');
const {
    getHouse,
    insertHouse,
    updateHouse,
    deletehouse
} = require('../controllers/houseController');

const router = express.Router();

router
  .get('/', getHouse)
  .post('/nuevaCasa', insertHouse)
  .patch('/actualizarCasa/:IdHouse', updateHouse)
  .delete('/borrarCasa/:IdHouse', deletehouse);

module.exports = router;