const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const psicosocialFactorModel = require('../models/psicosocialFactor');

// Mostrar FactorPsicosocial
const getPsicosocialFactor = catchAsync(async (req, res, next) => {
  const psicosocialFactorList = await psicosocialFactorModel.findAll();
  console.log(psicosocialFactorList);
  res.status('200').json({
    status: 'success',
    data: {
        psicosocialFactorList,
    },
  });
});

// Crear FactorPsicosocial
const insertPsicosocialFactor = catchAsync(async (req, res, next) => {
  // Crea un nuevo factor psicosocial
  const newFactor = await psicosocialFactorModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      perfilEntrada: newFactor,
    },
  });
});

// Editar FactorPsicosocial
const updatePsicosocialFactor = catchAsync(async (req, res, next) => {
  const factorData = req.body;
  // Obtener el factor psicosocial
  const existingFactor = await psicosocialFactorModel.findByPk(
    req.params.IdPsicosocialFactor
  );
  if (!existingFactor) {
    return next(new AppError('El factor que intenta modificar no existe', 404));
  }
  // Actualizar los campos de los factores
  existingFactor.vulnerableCommunity = factorData.vulnerableCommunity;
  existingFactor.schoolExclusion = factorData.schoolExclusion;
  existingFactor.suicidalRisk = factorData.suicidalRisk;
  existingFactor.domesticViolence = factorData.domesticViolence;
  existingFactor.relativesInJail = factorData.relativesInJail;
  existingFactor.drugs = factorData.drugs;
  existingFactor.abandonment = factorData.abandonment;
  existingFactor.others = factorData.others;
  existingFactor.IdPersonData = factorData.IdPersonData;
  // Guardar los cambios en la base de datos
  await existingFactor.save();
  res.status(200).json({
    status: 'success',
    data: {
      FactorPsicosocial: existingFactor,
    },
  });
});

// Eliminar PersonaEncargada
const deletePsicosocialFactor = catchAsync(async (req, res, next) => {
  try {
    const { IdPsicosocialFactor } = req.params;
    await psicosocialFactorModel.destroy({
      where: {
        IdPsicosocialFactor,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        psicosocialFactor: IdPsicosocialFactor
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting factor entry', 500));
  }
});
module.exports = {
  getPsicosocialFactor,
  insertPsicosocialFactor,
  updatePsicosocialFactor,
  deletePsicosocialFactor,
};