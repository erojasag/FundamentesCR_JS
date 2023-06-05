const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const statusModel = require('../models/status');

// Mostrar Calificacion
const getStatus = catchAsync(async (req, res, next) => {
  const statusList = await statusModel.findAll();
  console.log(statusList);
  res.status('200').json({
    status: 'success',
    data: {
        statusList,
    },
  });
});

// Crear estatus
const insertStatus = catchAsync(async (req, res, next) => {
  // Crea un estatus
  const newStatus = await statusModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
        statusP: newStatus,
    },
  });
});

// Editar estatus
const updateStatus = catchAsync(async (req, res, next) => {
  const statusData = req.body;
  // Obtener estatus
  const existingStatus = await statusModel.findByPk(
    req.params.IdStatus
  );
  if (!existingStatus) {
    return next(new AppError('Los estatus que intenta modificar no existe', 404));
  }
  // Actualizar los campos de estatus
  existingStatus.sharedRoom = statusData.sharedRoom;
  existingStatus.internetAccess = statusData.internetAccess;
  existingStatus.IdPersonData = statusData.IdPersonData;
  // Guardar los cambios de estatus
  await existingStatus.save();
  res.status(200).json({
    status: 'success',
    data: {
        statusP: existingStatus,
    },
  });
});

// Eliminar estatus
const deleteStatus = catchAsync(async (req, res, next) => {
  try {
    const { IdStatus } = req.params;
    await statusModel.destroy({
      where: {
        IdStatus,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        statusP: IdStatus
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting Status entry', 500));
  }
});
module.exports = {
  getStatus,
  insertStatus,
  updateStatus,
  deleteStatus,
};