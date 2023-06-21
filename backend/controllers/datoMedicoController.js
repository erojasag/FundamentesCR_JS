const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');
const datosMedicosModel = require('../models/datoMedico');

const getAllDatosMedicos = getAll(datosMedicosModel);

const getDatoMedicoById = getOne(datosMedicosModel);

const agregarDatoMedico = insertOne(datosMedicosModel);

const updateDatoMedico = updateOne(datosMedicosModel);

module.exports = {
  getAllDatosMedicos,
  getDatoMedicoById,
  agregarDatoMedico,
  updateDatoMedico,
};
