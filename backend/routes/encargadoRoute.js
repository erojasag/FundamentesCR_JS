const express = require('express');

const router = express.Router();

const {
  getAllPerfilesSalida,
  getPerfilSalidaById,
  agregarPerfilSalida,
  updatePerfilSalida,
} = require('../controllers/encargadoController');

const { protect, restrictTo } = require('../controllers/authController');

router
  .route('/')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getAllPerfilesSalida)
  .post(protect, restrictTo('Administrador', 'Psicologo'), agregarPerfilSalida);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getPerfilSalidaById)
  .patch(protect, restrictTo('Administrador', 'Psicologo'), updatePerfilSalida);

module.exports = router;
