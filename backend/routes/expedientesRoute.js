const express = require('express');
const {
  getAllExpedientes,
  createExpediente,
  getExpedienteById,
  deleteExpedienteById,
  updateExpediente,
} = require('../controllers/expedientesController');

const router = express.Router();

router.route('/').get(getAllExpedientes).post(createExpediente);
router
  .route('/:id')
  .get(getExpedienteById)
  .patch(deleteExpedienteById)
  .delete(updateExpediente);

module.exports = router;
