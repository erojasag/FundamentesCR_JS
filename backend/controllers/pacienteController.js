const pacientesModel = require('../models/paciente');
const catchAsync = require('../utils/catchAsync');

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

module.exports = {
  getAllPacientes,
  getPaciente,
  agregarPaciente,
  updatePaciente,
  desactivarPaciente,
};
