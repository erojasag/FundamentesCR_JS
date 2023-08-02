const express = require('express');

const {
  getAllEncuestaSatisfaccion,
  insertEncuestaSatisfaccion,
  getEncuestaSatisfaccionByPaciente,
  updateEncuestaSatisfaccion,
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

router
  .route('/:id')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getEncuestaSatisfaccionByPaciente
  )
  .patch(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    updateEncuestaSatisfaccion
  );

module.exports = router;
