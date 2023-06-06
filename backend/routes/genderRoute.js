const express = require('express');
const {
  getGenders,
  insertGender,
  updateGender,
  deleteGender,
} = require('../controllers/genderController');

const router = express.Router();

router
  .get('/', getGenders)
  .post('/agregarGenero', insertGender)
  .patch('/updategender/:IdGender', updateGender)
  .delete('/deletegender/:IdGender', deleteGender);

module.exports = router;
