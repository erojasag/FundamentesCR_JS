const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const socioEconomicsDataModel = require('../models/socioEconomicsData');

// Mostrar Calificacion
const getSocioEconomicsData = catchAsync(async (req, res, next) => {
  const socioEconomicsDataList = await socioEconomicsDataModel.findAll();
  console.log(socioEconomicsDataList);
  res.status('200').json({
    status: 'success',
    data: {
        socioEconomicsDataList,
    },
  });
});

// Crear Datos Socio Economicos
const insertSocioEconomicsData = catchAsync(async (req, res, next) => {
  // Crea un Dato Socio Economico
  const newSocioEconomicsData = await socioEconomicsDataModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
        socioEconomicsData: newSocioEconomicsData,
    },
  });
});

// Editar Datos Socio Economicos
const updateSocioEconomicsData = catchAsync(async (req, res, next) => {
  const socioEconomicsDataData = req.body;
  // Obtener Datos Socio Economicos
  const existingSocioEconomicsData = await socioEconomicsDataModel.findByPk(
    req.params.IdSocioEconomicsData
  );
  if (!existingSocioEconomicsData) {
    return next(new AppError('Los datos socio economicos que intenta modificar no existe', 404));
  }
  // Actualizar los campos de Datos Socio Economicos
  existingSocioEconomicsData.sharedRoom = socioEconomicsDataData.sharedRoom;
  existingSocioEconomicsData.internetAccess = socioEconomicsDataData.internetAccess;
  existingSocioEconomicsData.IdPersonData = socioEconomicsDataData.IdPersonData;
  // Guardar los cambios en la base de datos
  await existingSocioEconomicsData.save();
  res.status(200).json({
    status: 'success',
    data: {
        socioEconomicsData: existingSocioEconomicsData,
    },
  });
});

// Eliminar Datos Socio Economicos
const deleteSocioEconomicsData = catchAsync(async (req, res, next) => {
  try {
    const { IdSocioEconomicsData } = req.params;
    await socioEconomicsDataModel.destroy({
      where: {
        IdSocioEconomicsData,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        socioEconomicsData: IdSocioEconomicsData
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError('Error deleting SocioEconomicsData entry', 500));
  }
});
module.exports = {
  getSocioEconomicsData,
  insertSocioEconomicsData,
  updateSocioEconomicsData,
  deleteSocioEconomicsData,
};