const express = require('express');

const router = express.Router();

/* GET home page. */
router.route('/').get();

module.exports = router;
