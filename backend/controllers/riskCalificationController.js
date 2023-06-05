const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const riskCalificationModel = require('../models/riskCalifications');

// Mostrar Calificacion
const getRiskCalification = catchAsync(async (req, res, next) => {
  const riskCalificationList = await riskCalificationModel.findAll();
  console.log(riskCalificationList);
  res.status('200').json({
    status: 'success',
    data: {
        riskCalificationList,
    },
  });
});

// Crear Calificacion
const insertRiskCalification = catchAsync(async (req, res, next) => {
  // Crea una nueva calificacion
  const newRiskCalification = await riskCalificationModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
        riskCalification: newRiskCalification,
    },
  });
});

// Editar calificacion
const updateRiskCalification = catchAsync(async (req, res, next) => {
  const riskCalificationData = req.body;
  // Obtener la calificacion
  const existingRiskCalification = await riskCalificationModel.findByPk(
    req.params.IdRisk
  );
  if (!existingRiskCalification) {
    return next(new AppError('La calificacion que intenta modificar no existe', 404));
  }
  // Actualizar los campos del record
  existingRiskCalification.riskCalifications = riskCalificationData.riskCalifications;
  existingRiskCalification.psicosocialRisk = riskCalificationData.psicosocialRisk;
  existingRiskCalification.assistanceRequest = riskCalificationData.assistanceRequest;
  existingRiskCalification.IdPersonData = riskCalificationData.IdPersonData;
  // Guardar los cambios en la base de datos
  await existingRiskCalification.save();
  res.status(200).json({
    status: 'success',
    data: {
      riskCalification: existingRiskCalification,
    },
  });
});

// Eliminar calificacion
const deleteRiskCalification = catchAsync(async (req, res, next) => {
  try {
    const { IdRisk } = req.params;
    await riskCalificationModel.destroy({
      where: {
        IdRisk,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        riskCalification: IdRisk
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting riskCalification entry', 500));
  }
});
module.exports = {
  getRiskCalification,
  insertRiskCalification,
  updateRiskCalification,
  deleteRiskCalification,
};