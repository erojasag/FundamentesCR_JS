const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const relationshipModel = require('../models/relationship');

// Mostrar Relacion
const getRelationship = catchAsync(async (req, res, next) => {
  const relationshipList = await relationshipModel.findAll();
  console.log(relationshipList);
  res.status('200').json({
    status: 'success',
    data: {
        relationshipList,
    },
  });
});

// Crear Relacion
const insertRelationship = catchAsync(async (req, res, next) => {
  // Crea una nueva relacion
  const newRelationship = await relationshipModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
        relationship: newRelationship,
    },
  });
});

// Editar relacion
const updateRelationship = catchAsync(async (req, res, next) => {
  const relationshipData = req.body;
  // Obtener la relacion
  const existingRelationship = await relationshipModel.findByPk(
    req.params.IdRelationship
  );
  if (!existingRelationship) {
    return next(new AppError('La relacion que intenta modificar no existe', 404));
  }
  // Actualizar los campos del record
  existingRelationship.description = relationshipData.description;
  existingRelationship.name = relationshipData.name;
  // Guardar los cambios en la base de datos
  await existingRelationship.save();
  res.status(200).json({
    status: 'success',
    data: {
      relationship: existingRelationship,
    },
  });
});

// Eliminar relacion
const deleteRelationship = catchAsync(async (req, res, next) => {
  try {
    const { IdRelationship } = req.params;
    await relationshipModel.destroy({
      where: {
        IdRelationship,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        relationship: IdRelationship
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting relationship entry', 500));
  }
});
module.exports = {
  getRelationship,
  insertRelationship,
  updateRelationship,
  deleteRelationship,
};