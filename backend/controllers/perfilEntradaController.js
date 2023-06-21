const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');

const perfilEntradaModel = require('../models/perfilEntrada');

const getAllPerfilesEntrada = getAll(perfilEntradaModel);

const getPerfilEntradaById = getOne(perfilEntradaModel);

const agregarPerfilEntrada = insertOne(perfilEntradaModel);

const updatePerfilEntrada = updateOne(perfilEntradaModel);

module.exports = {
  getAllPerfilesEntrada,
  getPerfilEntradaById,
  agregarPerfilEntrada,
  updatePerfilEntrada,
};
