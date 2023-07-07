const pacientesModel = require('../models/paciente');
const db = require('../config/db');
const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');

const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');

const getAllPacientes = getAll(pacientesModel);

const getPaciente = getOne(pacientesModel);

const agregarPaciente = insertOne(pacientesModel);

const updatePaciente = updateOne(pacientesModel);

const desactivarPaciente = catchAsync(async (req, res, next) => {
  const paciente = await pacientesModel.update(
    {
      activo: false,
    },
    {
      where: {
        pacienteId: req.params.id,
      },
    }
  );
  res.status(204).json({
    status: 'success',
    data: {
      data: paciente,
    },
  });
});

const getPacientesPorEdad = catchAsync(async (req, res, next) => {
  const ageRanges = await db.query('CALL GetAgeRangesWithCounts()');
  res.status(200).json({
    status: 'success',
    data: {
      data: ageRanges,
    },
  });
});
module.exports = {
  getAllPacientes,
  getPaciente,
  agregarPaciente,
  updatePaciente,
  desactivarPaciente,
  getPacientesPorEdad,
};
