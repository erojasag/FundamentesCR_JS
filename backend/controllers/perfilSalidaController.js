const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');

const perfilSalidaModel = require('../models/perfilSalida');

const getAllPerfilesSalida = getAll(perfilSalidaModel);

const getPerfilSalidaById = getOne(perfilSalidaModel);

const agregarPerfilSalida = insertOne(perfilSalidaModel);

const updatePerfilSalida = updateOne(perfilSalidaModel);

module.exports = {
  getAllPerfilesSalida,
  getPerfilSalidaById,
  agregarPerfilSalida,
  updatePerfilSalida,
};
