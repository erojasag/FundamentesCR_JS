const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');

const encargadoModel = require('../models/encargado');

const getAllPerfilesSalida = getAll(encargadoModel);

const getPerfilSalidaById = getOne(encargadoModel);

const agregarPerfilSalida = insertOne(encargadoModel);

const updatePerfilSalida = updateOne(encargadoModel);

module.exports = {
  getAllPerfilesSalida,
  getPerfilSalidaById,
  agregarPerfilSalida,
  updatePerfilSalida,
};
