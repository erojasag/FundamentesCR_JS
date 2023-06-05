const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const ActionLogModel = require("../models/actionLog");

// Mostrar ActionLog
const getActionLog = catchAsync(async (req, res, next) => {
  const ActionLogList = await ActionLogModel.findAll();
  console.log(ActionLogList);
  res.status("200").json({
    status: "success",
    data: {
      ActionLogList,
    },
  });
});

// Crear Perfilentrada
const insertActionLog = catchAsync(async (req, res, next) => {
  // Crea un nuevo perfil
  const newActionLog = await ActionLogModel.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      ActionLog: newActionLog,
    },
  });
});

// Editar Perfilentrada
const updateActionLog = catchAsync(async (req, res, next) => {
  const profileActionLog = req.body;
  // Obtener el perfil existente
  const existingActionLog = await ActionLogModel.findByPk(
    req.params.IdActionLogs
  );
  if (!existingActionLog) {
    return next(new AppError("El perfil que intenta modificar no existe", 404));
  }
  // Actualizar los campos del perfil
  existingActionLog.Username = profileActionLog.Username;
  existingActionLog.Table = profileActionLog.Table;
  existingActionLog.Date = profileActionLog.Date;
  existingActionLog.Action = profileActionLog.Action;

  // Guardar los cambios en la base de datos
  await existingActionLog.save();
  res.status(200).json({
    status: "success",
    data: {
      profileActionLog: existingActionLog,
    },
  });
});

// Eliminar Perfilentrada
const deleteActionLog = catchAsync(async (req, res, next) => {
  try {
    const { IdActionLogs } = req.params;
    await ActionLogModel.destroy({
      where: {
        IdActionLogs,
      },
    });
    res.status(200).json({
      status: "success",
      data: {
        ActionLog: IdActionLogs,
      },
    });
  } catch (err) {
    console.error(err);
    return next(new AppError("Error deleting profile entry", 500));
  }
});
module.exports = {
  getActionLog,
  insertActionLog,
  updateActionLog,
  deleteActionLog,
};
