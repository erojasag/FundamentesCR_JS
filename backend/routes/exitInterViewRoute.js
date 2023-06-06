const express = require('express');
const {
  getExitInterviews,
  insertExitInterview,
  updateExitInterview,
  deleteExitInterview,
} = require('../controllers/exitInterviewsController');

const router = express.Router();

router
  .get('/', getExitInterviews)
  .post('/nuevaEntrevista', insertExitInterview)
  .patch('/actualizarEntrevista/:id', updateExitInterview)
  .delete('/borrarEntrevista/:id', deleteExitInterview);

module.exports = router;
