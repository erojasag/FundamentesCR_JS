const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const recordStatusModel = require('../models/recordStatus');

// Mostrar RecordStatus
const getRecordStatus = catchAsync(async (req, res, next) => {
  const recordStatusList = await recordStatusModel.findAll();
  console.log(recordStatusList);
  res.status('200').json({
    status: 'success',
    data: {
      recordStatusList,
    },
  });
});

// Crear RecordStatus
const insertRecordStatus = catchAsync(async (req, res, next) => {
  // Crea una nuevo recordStatus
  const newRecordStatus = await recordStatusModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      recordStatus: newRecordStatus,
    },
  });
});

// Editar RecordStatus
const updateRecordStatus = catchAsync(async (req, res, next) => {
  const recordStatusData = req.body;
  // Obtener el record
  const existingRecordStatus = await recordStatusModel.findByPk(
    req.params.IdRecordStatus
  );
  if (!existingRecordStatus) {
    return next(new AppError('El record Status que intenta modificar no existe', 404));
  }
  // Actualizar los campos del record
  existingRecordStatus.BirthCertificate = recordStatusData.BirthCertificate;
  existingRecordStatus.InformedConsent = recordStatusData.InformedConsent;
  existingRecordStatus.Transportation = recordStatusData.Transportation;
  existingRecordStatus.Photo = recordStatusData.Photo;
  existingRecordStatus.Video = recordStatusData.Video;
  existingRecordStatus.RRSSImg = recordStatusData.RRSSImg;
  existingRecordStatus.RecordVoiceForWorkShops = recordStatusData.RecordVoiceForWorkShops;
  existingRecordStatus.RecordVoiceForClinics = recordStatusData.RecordVoiceForClinics;
  existingRecordStatus.IdPersonData = recordStatusData.IdPersonData;
  existingRecordStatus.IdStatus = recordStatusData.IdStatus;

  // Guardar los cambios en la base de datos
  await existingRecordStatus.save();
  res.status(200).json({
    status: 'success',
    data: {
      recordStatus: existingRecordStatus,
    },
  });
});

// Eliminar recordStatus
const deleteRecordStatus = catchAsync(async (req, res, next) => {
  try {
    const { IdRecordStatus } = req.params;
    await recordStatusModel.destroy({
      where: {
        IdRecordStatus,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        recordStatus: IdRecordStatus
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting recordStatus entry', 500));
  }
});
module.exports = {
  getRecordStatus,
  insertRecordStatus,
  updateRecordStatus,
  deleteRecordStatus,
};