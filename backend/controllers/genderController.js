const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const genderModel = require('../models/gender');

// Mostrar gender
const getgender = catchAsync(async (req, res, next) => {
  const genderList = await genderModel.findAll();
  console.log(genderList);
  res.status('200').json({
    status: 'success',
    data: {
      genderList,
    },
  });
});

// Crear Perfilentrada
const insertgender = catchAsync(async (req, res, next) => {
  // Crea un nuevo perfil
  const newgender = await genderModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      perfilEntrada: newgender,
    },
  });
});

// Editar Perfilentrada
const updategender = catchAsync(async (req, res, next) => {
  const profilegender = req.body;
  // Obtener el perfil existente
  const existingGender = await genderModel.findByPk(
    req.params.IdGender
  );
  if (!existingGender) {
    return next(new AppError('El perfil que intenta modificar no existe', 404));
  }
  // Actualizar los campos del perfil
  existingGender.Description = profilegender.Description;
  // Guardar los cambios en la base de datos
  await existingGender.save();
  res.status(200).json({
    status: 'success',
    data: {
      gender: existingGender,
    },
  });
});

// Eliminar Perfilentrada
const deletegender = catchAsync(async (req, res, next) => {
  try {
    const { IdGender } = req.params;
    await genderModel.destroy({
      where: {
        IdGender,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        profilegender: IdGender,
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting gender entry', 500));
  }
});
module.exports = {
    getgender,
    insertgender,
    updategender,
    deletegender
};