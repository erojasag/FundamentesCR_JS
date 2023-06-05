const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const recordModel = require('../models/record');

// Mostrar Record
const getRecord = catchAsync(async (req, res, next) => {
  const recordList = await recordModel.findAll();
  console.log(recordList);
  res.status('200').json({
    status: 'success',
    data: {
      recordList,
    },
  });
});

// Crear Record
const insertRecord = catchAsync(async (req, res, next) => {
  // Crea una nuevo record
  const newRecord = await recordModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      record: newRecord,
    },
  });
});

// Editar Record
const updateRecord = catchAsync(async (req, res, next) => {
  const recordData = req.body;
  // Obtener el record
  const existingRecord = await recordModel.findByPk(
    req.params.IdRecord
  );
  if (!existingRecord) {
    return next(new AppError('El record que intenta modificar no existe', 404));
  }
  // Actualizar los campos del record
  existingRecord.interviewDate = recordData.interviewDate;
  existingRecord.IdUser = recordData.IdUser;
  existingRecord.IdStatus = recordData.IdStatus;
  // Guardar los cambios en la base de datos
  await existingRecord.save();
  res.status(200).json({
    status: 'success',
    data: {
      record: existingRecord,
    },
  });
});

// Eliminar record
const deleteRecord = catchAsync(async (req, res, next) => {
  try {
    const { IdRecord } = req.params;
    await recordModel.destroy({
      where: {
        IdRecord,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        record: IdRecord
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting record entry', 500));
  }
});
module.exports = {
  getRecord,
  insertRecord,
  updateRecord,
  deleteRecord,
};