const express = require('express');
const {
  getRelationship,
  insertRelationship,
  updateRelationship,
  deleteRelationship,
} = require('../controllers/relationshipController');

const router = express.Router();

router
  .get('/VerRelaciones', getRelationship)
  .post('/IngresarRelacion', insertRelationship)
  .patch('/EditarRelacion/:IdRelacion', updateRelationship)
  .delete('/EliminarRelacion/:IdRelacion', deleteRelationship);

module.exports = router;