const express = require('express');
const {
    getpersonData,
    insertpersonData ,
    updatepersonData ,
    deletepersonData 
} = require('../controllers/personDataController');

const router = express.Router();

router
  .get('/SeepersonData', getpersonData)
  .post('/insertpersonData', insertpersonData)
  .patch('/updatepersonData/:IdPersonData', updatepersonData)
  .delete('/deletepersonData/:IdPersonData', deletepersonData);

module.exports = router;