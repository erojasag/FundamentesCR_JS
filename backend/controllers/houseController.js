const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const houseModel = require('../models/house');

// Mostrar house
const getHouse = catchAsync(async (req, res, next) => {
  const houseList = await houseModel.findAll();
  res.status('200').json({
    status: 'success',
    data: {
      houseList,
    },
  });
});

// Crear Perfilentrada
const insertHouse = catchAsync(async (req, res, next) => {
  // Crea un nuevo perfil

  const newHouse = await houseModel.create(req.body);

  if (!newHouse) {
    return next(new AppError('No se pudo crear la casa', 404));
  }
  res.status(201).json({
    status: 'success',
    data: {
      house: newHouse,
    },
  });
});

// Editar Perfilentrada
const updateHouse = catchAsync(async (req, res, next) => {
  // Obtener el perfil existente
  const existingHouse = await houseModel.findByPk(req.params.IdHouse);
  if (!existingHouse) {
    return next(new AppError('El perfil que intenta modificar no existe', 404));
  }
  // Actualizar los campos del perfil
  existingHouse.Name = req.body.Name;
  existingHouse.Location = req.body.Location;
  await existingHouse.save();

  res.status(200).json({
    status: 'success',
    data: {
      House: existingHouse,
    },
  });
});

// Eliminar Perfilentrada
const deletehouse = catchAsync(async (req, res, next) => {
  try {
    const { IdHouse } = req.params;
    await houseModel.destroy({
      where: {
        IdHouse,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        profileHouse: IdHouse,
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting profile entry', 500));
  }
});
module.exports = {
  getHouse,
  insertHouse,
  updateHouse,
  deletehouse,
};
