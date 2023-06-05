const express = require('express');
const {
    getExistInterview,
  insertExistInterview ,
  updateExistInterview ,
  deleteExistInterview
} = require('../controllers/exisInterviewController');

const router = express.Router();

router
  .get('/SeeExistInterview', getExistInterview)
  .post('/insertExistInterview', insertExistInterview)
  .patch('/updateExistInterview/:IdExitInterviews', updateExistInterview)
  .delete('/deleteExistInterview/:IdExitInterviews', deleteExistInterview);

module.exports = router;