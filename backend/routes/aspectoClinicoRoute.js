const express = require('express');

const {
  getAllAspectosClinicos,
  getAspectoClinicoById,
  agregarAspectoClinico,
  updateAspectoClinico,
} = require('../controllers/aspectoClinicoController');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('Administrador'), getAllAspectosClinicos)
  .post(protect, restrictTo('Administrador'), agregarAspectoClinico);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador'), getAspectoClinicoById)
  .patch(protect, restrictTo('Administrador'), updateAspectoClinico);

module.exports = router;
