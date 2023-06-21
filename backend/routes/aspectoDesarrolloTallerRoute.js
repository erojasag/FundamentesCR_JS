const express = require('express');

const {
  getAllAspectosDesarrolloTaller,
  getAspectoDesarrolloTallerById,
  agregarAspectoDesarrolloTaller,
  updateAspectoDesarrolloTaller,
} = require('../controllers/aspectoDesarrolloTallerController');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getAllAspectosDesarrolloTaller
  )
  .post(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    agregarAspectoDesarrolloTaller
  );

router
  .route('/:id')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getAspectoDesarrolloTallerById
  )
  .patch(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    updateAspectoDesarrolloTaller
  );

module.exports = router;
