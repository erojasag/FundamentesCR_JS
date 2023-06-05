const express = require('express');
const {
    getgender,
    insertgender,
    updategender,
    deletegender
} = require('../controllers/genderController');

const router = express.Router();

router
  .get('/Seegender', getgender)
  .post('/insertgender', insertgender)
  .patch('/updategender/:IdGender',     updategender)
  .delete('/deletegender/:IdGender', deletegender);

module.exports = router;