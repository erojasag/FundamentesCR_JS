const express = require('express');
const {
    getcoexistence,
    insertcoexistence,
    updatecoexistence,
    deletecoexistence
} = require('../controllers/coexistenceController');

const router = express.Router();

router
  .get('/Seecoexistence', getcoexistence)
  .post('/insertcoexistence', insertcoexistence)
  .patch('/updatecoexistence/:IdCoexistence', updatecoexistence)
  .delete('/deletecoexistence/:IdCoexistence', deletecoexistence);

module.exports = router;