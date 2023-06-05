const express = require('express');
const {
    getHouse,
    insertHouse,
    updateHouse,
    deletehouse
} = require('../controllers/houseController');

const router = express.Router();

router
  .get('/SeeHouse', getHouse)
  .post('/insertHouse', insertHouse)
  .patch('/updateHouse/:IdHouse', updateHouse)
  .delete('/deleteHouse/:IdHouse', deletehouse);

module.exports = router;