const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');
const casasModel = require('../models/casa');

const getAllCasas = getAll(casasModel);

const getCasaById = getOne(casasModel);

const agregarCasa = insertOne(casasModel);

const updateCasa = updateOne(casasModel);

module.exports = {
  getAllCasas,
  getCasaById,
  agregarCasa,
  updateCasa,
};
