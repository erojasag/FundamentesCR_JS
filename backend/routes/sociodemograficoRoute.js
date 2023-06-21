const express = require('express');

const router = express.Router();

const {
  getAllSociodemograficos,
  getSociodemograficoById,
  agregarSociodemografico,
  updateSociodemografico,
} = require('../controllers/sociodemograficoController');

const { protect, restrictTo } = require('../controllers/authController');

router
  .route('/')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getAllSociodemograficos
  )
  .post(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    agregarSociodemografico
  );

router
  .route('/:id')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getSociodemograficoById
  )
  .patch(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    updateSociodemografico
  );

module.exports = router;
