const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');
const sociodemograficoModel = require('../models/sociodemografico');

const getAllSociodemograficos = getAll(sociodemograficoModel);

const getSociodemograficoById = getOne(sociodemograficoModel);

const agregarSociodemografico = insertOne(sociodemograficoModel);

const updateSociodemografico = updateOne(sociodemograficoModel);

module.exports = {
  getAllSociodemograficos,
  getSociodemograficoById,
  agregarSociodemografico,
  updateSociodemografico,
};
