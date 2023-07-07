const { getAll, getOne, insertOne, updateOne } = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const casasModel = require('../models/casa');
const db = require('../config/db');

const getAllCasas = getAll(casasModel);

const getCasaById = getOne(casasModel);

const agregarCasa = insertOne(casasModel);

const updateCasa = updateOne(casasModel);

const getStatsCasa = catchAsync(async (req, res, next) => {
  const pacientesPorCasa = await db.query('CALL GetStatsCasas()');

  res.status(200).json({
    status: 'success',
    data: {
      data: pacientesPorCasa,
    },
  });
});

module.exports = {
  getAllCasas,
  getCasaById,
  agregarCasa,
  updateCasa,
  getStatsCasa,
};
