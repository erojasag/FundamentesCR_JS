const pacientesModel = require('../models/Pacientes');

const {
  getAll,
  getOne,
  insertOne,
  updateOne,
  deleteOne,
} = require('./handlerFactory');

const getAllPacientes = getAll(pacientesModel);

const getPaciente = getOne(pacientesModel);

const agregarPaciente = insertOne(pacientesModel);

const updatePaciente = updateOne(pacientesModel);

const deletePaciente = deleteOne(pacientesModel);

module.exports = {
  getAllPacientes,
  getPaciente,
  agregarPaciente,
  updatePaciente,
  deletePaciente,
};
