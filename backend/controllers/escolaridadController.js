const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');
const escolaridadModel = require('../models/escolaridad');

const getAllEscolaridades = getAll(escolaridadModel);

const getEscolaridadById = getOne(escolaridadModel);

const agregarEscolaridad = insertOne(escolaridadModel);

const updateEscolaridad = updateOne(escolaridadModel);

module.exports = {
  getAllEscolaridades,
  getEscolaridadById,
  agregarEscolaridad,
  updateEscolaridad,
};
