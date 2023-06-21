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
  .get(protect, restrictTo('Administrador'), getAllCondicionesLaborales)
  .post(protect, restrictTo('Administrador'), agregarCondicionesLaborales);

router
  .route('/:id')
  .patch(protect, restrictTo('Administrador'), updateCondicionesLaborales)
  .get(protect, restrictTo('Administrador'), getCondicionesLaboralesById);

module.exports = router;
