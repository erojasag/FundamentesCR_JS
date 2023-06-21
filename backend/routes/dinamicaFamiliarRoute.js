const express = require('express');

const router = express.Router();

const {
  getAllDinamicasFamiliares,
  getDinamicaFamiliarById,
  agregarDinamicaFamiliar,
  updateDinamicaFamiliar,
} = require('../controllers/dinamicaFamiliarController');

const { protect, restrictTo } = require('../controllers/authController');

router
  .route('/')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getAllDinamicasFamiliares
  )
  .post(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    agregarDinamicaFamiliar
  );

router
  .route('/:id')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getDinamicaFamiliarById
  )
  .patch(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    updateDinamicaFamiliar
  );

module.exports = router;
