const { getAll, getOne, updateOne, insertOne } = require('./handlerFactory');

const aspectoPsicoEducativoModel = require('../models/aspectoPsicoEducativo');

const getAllAspectosPsicoEducativos = getAll(aspectoPsicoEducativoModel);

const getAspectoPsicoEducativoById = getOne(aspectoPsicoEducativoModel);

const agregarAspectoPsicoEducativo = insertOne(aspectoPsicoEducativoModel);

const updateAspectoPsicoEducativo = updateOne(aspectoPsicoEducativoModel);

module.exports = {
  getAllAspectosPsicoEducativos,
  getAspectoPsicoEducativoById,
  agregarAspectoPsicoEducativo,
  updateAspectoPsicoEducativo,
};
