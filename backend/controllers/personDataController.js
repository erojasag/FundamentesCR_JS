const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const personDataModel = require('../models/personData');


const getpersonData = catchAsync(async (req, res, next) => {
  const personDataList = await personDataModel.findAll();
  res.status('200').json({
    status: 'success',
    data: {
      personDataList,
    },
  });
});


const insertpersonData= catchAsync(async (req, res, next) => {
  const newpersonData = await personDataModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      perfilEntrada: newpersonData,
    },
  });
});


const updatepersonData= catchAsync(async (req, res, next) => {
  const profileData = req.body;

  const existingpersonData = await personDataModel.findByPk(
    req.params.IdPersonData
  );
  if (!existingpersonData) {
    return next(new AppError('El perfil que intenta modificar no existe', 404));
  }
    existingpersonData.fullName = profileData.fullName;
    existingpersonData.community = profileData.community;
    existingpersonData.school = profileData.school;
    existingpersonData.diagnose = profileData.diagnose;
    existingpersonData.allergies = profileData.allergies;
    existingpersonData.address = profileData.address;
    existingpersonData.phoneNumber = profileData.phoneNumber;
    existingpersonData.Cedula = profileData.Cedula;
    existingpersonData.age = profileData.age;
    existingpersonData.IdAcademicDegree = profileData.IdAcademicDegree;
    existingpersonData.birthDate = profileData.birthDate;
    existingpersonData.repetition = profileData.repetition;
    existingpersonData.immigrant = profileData.immigrant; 
    existingpersonData.lgtbiq = profileData.lgtbiq;  
    existingpersonData.fatherMother = profileData.fatherMother;
    existingpersonData.IdRecord = profileData.IdRecord;
    existingpersonData.IdGender = profileData.IdGender;
    existingpersonData.IdNationality = profileData.IdNationality;
  await existingpersonData.save();
  res.status(200).json({
    status: 'success',
    data: {
      perfilEntrada: existingpersonData,
    },
  });
});


const deletepersonData = catchAsync(async (req, res, next) => {
  try {
    const { IdPersonData } = req.params;
    await personDataModel.destroy({
      where: {
        IdPersonData,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        perfilesEntrada: IdPersonData,
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting profile entry', 500));
  }
});
module.exports = {
    getpersonData,
  insertpersonData ,
  updatepersonData ,
  deletepersonData ,
};
