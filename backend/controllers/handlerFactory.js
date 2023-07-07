const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findAll();

    if (!doc) return next(new AppError('No se encontraron registros', 404));

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

const getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const doc = await Model.findByPk(id);

    if (!doc) return next(new AppError('No se encontraron registros', 404));

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

const insertOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    if (!doc) return next(new AppError('No se pudo crear el registro', 500));

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

const updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    console.log(req.params.id, req.body);
    let doc = await Model.findByPk(req.params.id);
    doc = await doc.update(req.body);

    if (!doc)
      return next(new AppError('No se pudo actualizar el registro', 500));

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByPk(req.params.id);
    await doc.destroy();

    if (!doc) return next(new AppError('No se pudo eliminar el registro', 500));

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

module.exports = {
  getOne,
  getAll,
  insertOne,
  updateOne,
  deleteOne,
};
