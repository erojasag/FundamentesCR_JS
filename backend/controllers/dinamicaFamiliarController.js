const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');
const dinamicaFamiliarModel = require('../models/dinamicaFamiliar');

const getAllDinamicasFamiliares = getAll(dinamicaFamiliarModel);

const getDinamicaFamiliarById = getOne(dinamicaFamiliarModel);

const agregarDinamicaFamiliar = insertOne(dinamicaFamiliarModel);

const updateDinamicaFamiliar = updateOne(dinamicaFamiliarModel);

module.exports = {
  getAllDinamicasFamiliares,
  getDinamicaFamiliarById,
  agregarDinamicaFamiliar,
  updateDinamicaFamiliar,
};
