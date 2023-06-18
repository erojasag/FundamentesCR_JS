const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');

const condicionesLaboralesModel = require('../models/condicionLaboral');

const getAllCondicionesLaborales = getAll(condicionesLaboralesModel);

const getCondicionesLaboralesById = getOne(condicionesLaboralesModel);

const agregarCondicionesLaborales = insertOne(condicionesLaboralesModel);

const updateCondicionesLaborales = updateOne(condicionesLaboralesModel);

module.exports = {
  getAllCondicionesLaborales,
  getCondicionesLaboralesById,
  agregarCondicionesLaborales,
  updateCondicionesLaborales,
};
