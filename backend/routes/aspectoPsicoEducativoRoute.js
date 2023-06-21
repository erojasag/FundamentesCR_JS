const express = require('express');

const {
  getAllAspectosPsicoEducativos,
  getAspectoPsicoEducativoById,
  agregarAspectoPsicoEducativo,
  updateAspectoPsicoEducativo,
} = require('../controllers/aspectoPsicoEducativoController');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getAllAspectosPsicoEducativos
  )
  .post(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    agregarAspectoPsicoEducativo
  );

router
  .route('/:id')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getAspectoPsicoEducativoById
  )
  .patch(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    updateAspectoPsicoEducativo
  );

module.exports = router;
