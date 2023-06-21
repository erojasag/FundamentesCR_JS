const express = require('express');
const {
  getAllAspectosComunitarios,
  agregarAspectoComunitario,
  getAspectoComunitarioById,
  updateAspectoComunitario,
} = require('../controllers/aspectoComunitarioController');

const { restrictTo, protect } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getAllAspectosComunitarios
  )
  .post(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    agregarAspectoComunitario
  );

router
  .route('/:id')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getAspectoComunitarioById
  )
  .patch(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    updateAspectoComunitario
  );

module.exports = router;
