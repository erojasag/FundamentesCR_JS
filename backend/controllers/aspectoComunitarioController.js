const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');

const aspectoComunitarioModel = require('../models/aspectoComunitario');

const getAllAspectosComunitarios = getAll(aspectoComunitarioModel);

const getAspectoComunitarioById = getOne(aspectoComunitarioModel);

const agregarAspectoComunitario = insertOne(aspectoComunitarioModel);

const updateAspectoComunitario = updateOne(aspectoComunitarioModel);

module.exports = {
  getAllAspectosComunitarios,
  getAspectoComunitarioById,
  agregarAspectoComunitario,
  updateAspectoComunitario,
};
