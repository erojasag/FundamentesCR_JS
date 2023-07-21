const express = require('express');
const {
  getAllCasas,
  getCasaById,
  agregarCasa,
  updateCasa,
  desactivarCasa,
  activarCasa,
} = require('../controllers/casaController');
const { restrictTo, protect } = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getAllCasas)
  .post(protect, restrictTo('Administrador'), agregarCasa);
router
  .route('/:id')
  .get(protect, restrictTo('Administrador', 'Psicologo'), getCasaById)
  .patch(protect, restrictTo('Administrador'), updateCasa)
  .delete(protect, restrictTo('Administrador'), desactivarCasa);

router.get(
  '/activarCasa/:id',
  protect,
  restrictTo('Administrador'),
  activarCasa
);

module.exports = router;
