const express = require('express');
const {
  getActionLog,
  insertActionLog,
  updateActionLog,
  deleteActionLog,
} = require('../controllers/ActionLogController');

const router = express.Router();

router
  .get('/', getActionLog)
  .post('/insertActionLog', insertActionLog)
  .patch('/updatActionLog/:IdActionLog', updateActionLog)
  .delete('/deleteActionLog/:IdActionLog', deleteActionLog);

module.exports = router;
