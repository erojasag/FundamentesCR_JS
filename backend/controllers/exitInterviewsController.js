const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const ExitInterviewsModel = require('../models/exitInterview');
const db = require('../config/db');

const getExitInterviews = catchAsync(async (req, res, next) => {
  const exitInterviews = await ExitInterviewsModel.findAll();
  res.status('200').json({
    status: 'success',
    data: {
      exitInterviews,
    },
  });
});

const insertExitInterview = catchAsync(async (req, res, next) => {
  await db.query('DISABLE TRIGGER ALL ON ExitInterviews ;');
  const newInterview = await ExitInterviewsModel.create(req.body);
  await db.query('DISABLE TRIGGER ALL ON ExitInterviews ;');
  res.status(201).json({
    status: 'success',
    data: {
      perfilEntrada: newInterview,
    },
  });
});

const updateExitInterview = catchAsync(async (req, res, next) => {
  const existingProfile = await ExitInterviewsModel.findByPk(req.params.id);
  if (!existingProfile) {
    return next(
      new AppError(
        'La Entrevista de salida que intenta modificar no existe',
        404
      )
    );
  }
  console.log(existingProfile);

  existingProfile.dataValues.Observations = req.body;

  await existingProfile.save();
  res.status(200).json({
    status: 'success',
    data: {
      perfilEntrada: existingProfile,
    },
  });
});

const deleteExitInterview = catchAsync(async (req, res, next) => {
  const IdExitInterview = req.params.id;
  if (!IdExitInterview)
    return next(new AppError('Porfavor ingrese un id', 500));
  await ExitInterviewsModel.destroy({
    where: {
      IdExitInterview,
    },
  });

  res.status(200).json({
    status: 'success',
    data: {
      perfilesEntrada: IdExitInterview,
    },
  });
});
module.exports = {
  getExitInterviews,
  insertExitInterview,
  updateExitInterview,
  deleteExitInterview,
};
