const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const ExistInterviewModel = require('../models/exitInterview');


const getExistInterview = catchAsync(async (req, res, next) => {
  const ExistInterviewModelList = await ExistInterviewModel.findAll();
  console.log(ExistInterviewModelList);
  res.status('200').json({
    status: 'success',
    data: {
      ExistInterviewModelList,
    },
  });
});


const insertExistInterview= catchAsync(async (req, res, next) => {

  const newExistInterview = await ExistInterviewModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      perfilEntrada: newExistInterview,
    },
  });
});


const updateExistInterview= catchAsync(async (req, res, next) => {
  const profileData = req.body;

  const existingProfile = await ExistInterviewModel.findByPk(
    req.params.IdExitInterviews
  );
  if (!existingProfile) {
    return next(new AppError('El perfil que intenta modificar no existe', 404));
  }
  
  existingProfile.IdExitInterviews = profileData.IdExitInterviews;
 
  await existingProfile.save();
  res.status(200).json({
    status: 'success',
    data: {
      perfilEntrada: existingProfile,
    },
  });
});


const deleteExistInterview = catchAsync(async (req, res, next) => {
  try {
    const { IdExitInterviews } = req.params;
    await ExistInterviewModel.destroy({
      where: {
        IdExitInterviews,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        perfilesEntrada: IdExitInterviews,
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting profile entry', 500));
  }
});
module.exports = {
    getExistInterview,
  insertExistInterview ,
  updateExistInterview ,
  deleteExistInterview ,
};
