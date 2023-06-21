const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');
const expedienteModel = require('../models/expediente');

const getExpedientes = getAll(expedienteModel);

const getExpedienteById = getOne(expedienteModel);

const agregarExpediente = insertOne(expedienteModel);

const updateExpediente = updateOne(expedienteModel);

module.exports = {
  getExpedientes,
  getExpedienteById,
  agregarExpediente,
  updateExpediente,
};
