const express = require('express');
const { getPerfiles, insertProfileEnt, updateProfileEnt, deletePerEntra } = require('../controllers/peController');

const router = express.Router();

router.get('/VerPerfiles', getPerfiles)
      .post('/insertProfile', insertProfileEnt)
      .patch('/updateProfileEnt/:IdEntrada', updateProfileEnt)
      .delete('/deletePerfilEntrada/:IdEntrada', deletePerEntra);

module.exports = router;

