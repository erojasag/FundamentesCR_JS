const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const PerfilEntrada = require('../models/PerfilEntrada');

// Mostrar Perfilentrada
const getPerfiles = catchAsync(async (req, res, next) => {
  try {
    const perfilesEntrada = await PerfilEntrada.findAll();
    console.log(perfilesEntrada);
    res.status('200').json({
      status: 'success',
      data: {
        perfilesEntrada,
      },
    });
  } catch (err) {
    console.log(err);
    return next(new AppError(err, 500));
  }
});

// Crear Perfilentrada
const insertProfileEnt = catchAsync(async (req, res, next) => {
    // Crea un nuevo perfil
    const newProfile = await PerfilEntrada.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        perfilEntrada: newProfile,
      },
    });
});

// Editar Perfilentrada
const updateProfileEnt = catchAsync(async (req, res, next) => {
    const profileData = req.body;
    // Obtener el perfil existente
    const existingProfile = await PerfilEntrada.findByPk(req.params.IdEntrada);
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
const deletePerEntra = catchAsync(async (req, res, next) => {
  try {
    const { IdEntrada } = req.params;
    await PerfilEntrada.destroy({
      where: {
        IdEntrada,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        perfilesEntrada: IdEntrada,
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting profile entry', 500));
  }
});
module.exports = { getPerfiles, insertProfileEnt, updateProfileEnt, deletePerEntra};

