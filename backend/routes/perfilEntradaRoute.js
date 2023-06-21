const express = require('express');
const {
  getAllPerfilesEntrada,
  getPerfilEntradaById,
  agregarPerfilEntrada,
  updatePerfilEntrada,
} = require('../controllers/perfilEntradaController');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getAllPerfilesEntrada)
  .post(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    agregarPerfilEntrada
  );

router
  .route('/:id')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getPerfilEntradaById)
  .patch(
    protect,
    restrictTo('Administrador', 'Psicologo'),
    updatePerfilEntrada
  );

module.exports = router;
