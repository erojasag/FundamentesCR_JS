const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const houseModel = require('../models/house');

// Mostrar house
const getHouse = catchAsync(async (req, res, next) => {
  const houseList = await houseModel.findAll();
  console.log(houseList);
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
  res.status(201).json({
    status: 'success',
    data: {
      perfilEntrada: newHouse,
    },
  });
});

// Editar Perfilentrada
const updateHouse = catchAsync(async (req, res, next) => {
  const profileHouse = req.body;
  // Obtener el perfil existente
  const existingHouse = await houseModel.findByPk(
    req.params.IdHouse
  );
  if (!existingHouse) {
    return next(new AppError('El perfil que intenta modificar no existe', 404));
  }
  // Actualizar los campos del perfil
  existingHouse.Name = profileHouse.Name;
  existingHouse.Location = profileHouse.Location;
  // Guardar los cambios en la base de datos
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
    deletehouse
};