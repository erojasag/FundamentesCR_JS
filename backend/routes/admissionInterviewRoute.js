const express = require('express');
const {
  getAdmissionInterviews,
  insertAdmissionInterview,
  updateAdmissionInterview,
  deleteAdmissionInterview,
} = require('../controllers/admissionInterviewsController');

const router = express.Router();

router.route('/').get(getAdmissionInterviews);

router
  .post('/nuevaEntrevistaEntrada', insertAdmissionInterview)
  .patch('/actualizarEntrevistaEntrada/:IdEntrada', updateAdmissionInterview)
  .delete('/borrarEntrevistaEntrada/:IdEntrada', deleteAdmissionInterview);

module.exports = router;
