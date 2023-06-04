const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const admissionInterviewModel = require('../models/AdmissionInterview');

// Mostrar Perfilentrada
const getAdmissionInterviews = catchAsync(async (req, res, next) => {
  const admissionInterviewsList = await admissionInterviewModel.findAll();
  console.log(admissionInterviewsList);
  res.status('200').json({
    status: 'success',
    data: {
      admissionInterviewsList,
    },
  });
});

// Crear Perfilentrada
const insertAdmissionInterview = catchAsync(async (req, res, next) => {
  // Crea un nuevo perfil
  const newProfile = await admissionInterviewModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      perfilEntrada: newProfile,
    },
  });
});

// Editar Perfilentrada
const updateAdmissionInterview = catchAsync(async (req, res, next) => {
  const profileData = req.body;
  // Obtener el perfil existente
  const existingProfile = await admissionInterviewModel.findByPk(
    req.params.IdEntrada
  );
  if (!existingProfile) {
    return next(new AppError('El perfil que intenta modificar no existe', 404));
  }
  // Actualizar los campos del perfil
  existingProfile.Nombre = profileData.Nombre;
  existingProfile.Apellido1 = profileData.Apellido1;
  existingProfile.Apellido2 = profileData.Apellido2;
  existingProfile.Cedula = profileData.Cedula;
  existingProfile.FechaIngreso = profileData.FechaIngreso;
  // Guardar los cambios en la base de datos
  await existingProfile.save();
  res.status(200).json({
    status: 'success',
    data: {
      perfilEntrada: existingProfile,
    },
  });
});

// Eliminar Perfilentrada
const deleteAdmissionInterview = catchAsync(async (req, res, next) => {
  try {
    const { IdAdmissionInterview } = req.params;
    await admissionInterviewModel.destroy({
      where: {
        IdAdmissionInterview,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        perfilesEntrada: IdAdmissionInterview,
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting profile entry', 500));
  }
});
module.exports = {
  getAdmissionInterviews,
  insertAdmissionInterview,
  updateAdmissionInterview,
  deleteAdmissionInterview,
};
