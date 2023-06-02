const express = require('express');
const { getPerfiles } = require('../controllers/peController');
// const { protect } = require('../controllers/authController');

const router = express.Router();

router.get('/VerPerfiles',  getPerfiles);

module.exports = router;
