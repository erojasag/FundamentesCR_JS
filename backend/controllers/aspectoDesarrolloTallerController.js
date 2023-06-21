const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');
const aspectoDesarrolloTallerModel = require('../models/aspectoDesarrolloTaller');

const getAllAspectosDesarrolloTaller = getAll(aspectoDesarrolloTallerModel);

const getAspectoDesarrolloTallerById = getOne(aspectoDesarrolloTallerModel);

const agregarAspectoDesarrolloTaller = insertOne(aspectoDesarrolloTallerModel);

const updateAspectoDesarrolloTaller = updateOne(aspectoDesarrolloTallerModel);

module.exports = {
  getAllAspectosDesarrolloTaller,
  getAspectoDesarrolloTallerById,
  agregarAspectoDesarrolloTaller,
  updateAspectoDesarrolloTaller,
};
