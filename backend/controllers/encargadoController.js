const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');

const encargadoModel = require('../models/encargado');

const getAllEncargados = getAll(encargadoModel);

const getEncargadoById = getOne(encargadoModel);

const agregarEncargado = insertOne(encargadoModel);

const updateEncargado = updateOne(encargadoModel);

module.exports = {
  getAllEncargados,
  getEncargadoById,
  agregarEncargado,
  updateEncargado,
};
