const { getOne, insertOne, updateOne } = require('./handlerFactory');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const casasModel = require('../models/casa');

const getAllCasas = catchAsync(async (req, res, next) => {
  let search = null;
  if (req.query.q === 'false') {
    search = false;
  } else {
    search = true;
  }

  const casas = await casasModel.findAll({
    where: {
      activo: search,
    },
  });
  if (!casas) return next(new AppError('No se encontraron registros', 404));

  res.status(200).json({
    status: 'success',
    results: casas.length,
    data: {
      casas,
    },
  });
});

const getCasaById = getOne(casasModel);

const agregarCasa = insertOne(casasModel);

const updateCasa = updateOne(casasModel);

const activarCasa = catchAsync(async (req, res, next) => {
  const casa = await casasModel.update(
    {
      activo: true,
    },
    {
      where: {
        casaId: req.params.id,
      },
    }
  );
  res.status(204).json({
    status: 'success',
    data: {
      data: casa,
    },
  });
});

const desactivarCasa = catchAsync(async (req, res, next) => {
  const casa = await casasModel.update(
    {
      activo: false,
    },
    {
      where: {
        casaId: req.params.id,
      },
    }
  );
  res.status(204).json({
    status: 'success',
    data: {
      data: casa,
    },
  });
});

module.exports = {
  getAllCasas,
  getCasaById,
  agregarCasa,
  updateCasa,
  desactivarCasa,
  activarCasa,
};
