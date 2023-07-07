const express = require('express');

const {
  getAllEncuestaSatisfaccion,
  insertEncuestaSatisfaccion,
} = require('../controllers/encuestaSatisfaccionController');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getAllEncuestaSatisfaccion
  )
  .post(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    insertEncuestaSatisfaccion
  );

module.exports = router;
