
const express = require('express');
const {getPerfiles} = require('../controllers/PerfilEntradaController');

const router = express.Router();
router.get('/VerPerfiles', getPerfiles);
module.exports = router;