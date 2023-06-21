const express = require('express');

const {
  getAllPerfilesSalida,
  getPerfilSalidaById,
  agregarPerfilSalida,
  updatePerfilSalida,
} = require('../controllers/perfilSalidaController');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getAllPerfilesSalida)
  .post(protect, restrictTo('Administrador', 'Psicologo'), agregarPerfilSalida);

router
  .route('/:id')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getPerfilSalidaById)
  .patch(protect, restrictTo('Administrador', 'Psicologo'), updatePerfilSalida);

module.exports = router;
