const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const personInChargeModel = require('../models/personInCharge');

// Mostrar PersonaEncargada
const getPersonInCharge = catchAsync(async (req, res, next) => {
  const personInChargeList = await personInChargeModel.findAll();
  console.log(personInChargeList);
  res.status('200').json({
    status: 'success',
    data: {
      personInChargeList,
    },
  });
});

// Crear PersonaEncargada
const insertPersonInCharge = catchAsync(async (req, res, next) => {
  // Crea una nueva persona encargada
  const newPerson = await personInChargeModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      perfilEntrada: newPerson,
    },
  });
});

// Editar PersonaEncargada
const updatePersonInCharge = catchAsync(async (req, res, next) => {
  const personData = req.body;
  // Obtener el persona encargada
  const existingPerson = await personInChargeModel.findByPk(
    req.params.IdPersonInCharge
  );
  if (!existingPerson) {
    return next(new AppError('La persona que intenta modificar no existe', 404));
  }
  // Actualizar los campos de la persona
  existingPerson.fullName = personData.fullName;
  existingPerson.cedula = personData.cedula;
  existingPerson.phoneNumber = personData.phoneNumber;
  existingPerson.IdPersonaData = personData.IdPersonaData;
  existingPerson.IdRelationship = personData.IdRelationship;
  existingPerson.IdNacionality = personData.IdNacionality;
  // Guardar los cambios en la base de datos
  await existingPerson.save();
  res.status(200).json({
    status: 'success',
    data: {
      perfilEntrada: existingPerson,
    },
  });
});

// Eliminar PersonaEncargada
const deletePersonInCharge = catchAsync(async (req, res, next) => {
  try {
    const { IdPersonInCharge } = req.params;
    await personInChargeModel.destroy({
      where: {
        IdPersonInCharge,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        personInCharge: IdPersonInCharge
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting person entry', 500));
  }
});
module.exports = {
  getPersonInCharge,
  insertPersonInCharge,
  updatePersonInCharge,
  deletePersonInCharge,
};