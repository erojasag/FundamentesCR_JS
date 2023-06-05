const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const coexistenceModel = require("../models/coexistence");

// Mostrar coexistence
const getcoexistence = catchAsync(async (req, res, next) => {
  const coexistenceList = await coexistenceModel.findAll();
  console.log(coexistenceList);
  res.status("200").json({
    status: "success",
    data: {
      coexistenceList,
    },
  });
});

// Crear coexistence
const insertcoexistence = catchAsync(async (req, res, next) => {
  // Crea un nuevo perfil
  const newcoexistence = await coexistenceModel.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
        coexistence: newcoexistence,
    },
  });
});

// Editar coexistence
const updatecoexistence = catchAsync(async (req, res, next) => {
  const profilecoexistence = req.body;
  // Obtener el coexistence existente
  const existingcoexistence = await coexistenceModel.findByPk(
    req.params.IdCoexistence
  );
  if (!existingcoexistence) {
    return next(new AppError("El perfil que intenta modificar no existe", 404));
  }
  // Actualizar los campos del coexistence
  existingcoexistence.Mother = profilecoexistence.Mother;
  existingcoexistence.Father = profilecoexistence.Father;
  existingcoexistence.Siblings = profilecoexistence.Siblings;
  existingcoexistence.SiblingsQty = profilecoexistence.SiblingsQty;
  existingcoexistence.OtherPerson = profilecoexistence.OtherPerson;
  existingcoexistence.IdPersonData = profilecoexistence.IdPersonData;
  // Guardar los cambios en la base de datos
  await existingcoexistence.save();
  res.status(200).json({
    status: "success",
    data: {
      profilecoexistence: existingcoexistence,
    },
  });
});

// Eliminar coexistence
const deletecoexistence = catchAsync(async (req, res, next) => {
  try {
    const { IdCoexistence } = req.params;
    await coexistenceModel.destroy({
      where: {
        IdCoexistence,
      },
    });
    res.status(200).json({
      status: "success",
      data: {
        profilecoexistence: IdCoexistence,
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError("Error deleting profile entry", 500));
  }
});
module.exports = {
  getcoexistence,
  insertcoexistence,
  updatecoexistence,
  deletecoexistence,
};
