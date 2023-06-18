const {
  getAll,
  getOne,
  insertOne,
  updateOne,
} = require('./handlerFactory');

const aspectoClinicoModel = require('../models/aspectoClinico');

const getAllAspectosClinicos = getAll(aspectoClinicoModel);

const getAspectoClinicoById = getOne(aspectoClinicoModel);

const agregarAspectoClinico = insertOne(aspectoClinicoModel);

const updateAspectoClinico = updateOne(aspectoClinicoModel);


module.exports = {
  getAllAspectosClinicos,
  getAspectoClinicoById,
  agregarAspectoClinico,
  updateAspectoClinico,
};
