const express = require('express');

const router = express.Router();

const {
  getAllCondicionesLaborales,
  getCondicionesLaboralesById,
  agregarCondicionesLaborales,
  updateCondicionesLaborales,
} = require('../controllers/condicionLaboralController');

const { protect, restrictTo } = require('../controllers/authController');

router
  .route('/')
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getAllCondicionesLaborales
  )
  .post(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    agregarCondicionesLaborales
  );

router
  .route('/:id')
  .patch(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    updateCondicionesLaborales
  )
  .get(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    getCondicionesLaboralesById
  );

module.exports = router;
