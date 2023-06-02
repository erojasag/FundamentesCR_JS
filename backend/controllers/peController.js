const AppError = require('../utils/appError');

const catchAsync = require('../utils/catchAsync');


const PerfilEntrada = require('../models/PerfilEntrada');

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
module.exports = { getPerfiles };
