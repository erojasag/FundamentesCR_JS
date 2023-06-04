const express = require('express');
const {
  getAdmissionInterviews,
  insertAdmissionInterview,
  updateAdmissionInterview,
  deleteAdmissionInterview,
} = require('../controllers/admissionInterviewsController');

const router = express.Router();

router
  .get('/VerPerfiles', getAdmissionInterviews)
  .post('/insertProfileEnt', insertAdmissionInterview)
  .patch('/updateProfileEnt/:IdEntrada', updateAdmissionInterview)
  .delete('/deletePerfilEntrada/:IdEntrada', deleteAdmissionInterview);

module.exports = router;
