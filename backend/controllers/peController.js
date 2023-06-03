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
const insertProfileEnt= catchAsync(async (req, res) => {
  const profileData = req.body;
  try {
    const perfilesEntrada = await PerfilEntrada.create(
      {
        Nombre: profileData.Nombre,
        Apellido1: profileData.Apellido1,
        Apellido2: profileData.Apellido2,
        Cedula: profileData.Cedula,
        FechaIngreso: profileData.FechaIngreso,
        IdUsuario: profileData.IdUsuario,
        IdCasa: profileData.IdCasa
      },
      {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    );
    return res.status(201).json({
      status: 'success',
      data: {
        perfilEntrada: perfilesEntrada,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
});

// Editar Perfilentrada
const updateProfileEnt = catchAsync(async (req, res) => {
  const profileId = req.params.id;
  const profileData = req.body;
  try {
    const [rowsAffected, updatedProfile] = await PerfilEntrada.update(
      {
        Nombre: profileData.Nombre,
        Apellido1: profileData.Apellido1,
        Apellido2: profileData.Apellido2,
        Cedula: profileData.Cedula,
        FechaIngreso: profileData.FechaIngreso,
        IdUsuario: profileData.IdUsuario,
        IdCasa: profileData.IdCasa
      },
      {
        where: { IdEntrada: profileId },
        returning: true
      }
    );
    if (rowsAffected === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Profile not found',
      });
    }
    const updatedProfileData = updatedProfile[0].get();
    return res.status(200).json({
      status: 'success',
      data: {
        perfilEntrada: updatedProfileData,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
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

