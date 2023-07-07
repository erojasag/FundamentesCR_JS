const {
  getAll,
  getOne,
  insertOne,
  updateOne,
  deleteOne,
} = require('./handlerFactory');
const EncuestaSatisfaccion = require('../models/encuestaSatisfaccion');

const getAllEncuestaSatisfaccion = getAll(EncuestaSatisfaccion);

const getEncuestaSatisfaccion = getOne(EncuestaSatisfaccion);

const insertEncuestaSatisfaccion = insertOne(EncuestaSatisfaccion);

const updateEncuestaSatisfaccion = updateOne(EncuestaSatisfaccion);

const deleteEncuestaSatisfaccion = deleteOne(EncuestaSatisfaccion);

const getEncuestaSatisfaccionByPaciente = async (req, res, next) => {
  try {
    const encuestaSatisfaccion = await EncuestaSatisfaccion.findAll({
      where: {
        pacienteId: req.params.id,
      },
    });

    if (!encuestaSatisfaccion) {
      return res.status(404).json({
        status: 'fail',
        message: 'No se encontró encuesta de satisfacción con ese ID',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        encuestaSatisfaccion,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllEncuestaSatisfaccion,
  getEncuestaSatisfaccion,
  insertEncuestaSatisfaccion,
  updateEncuestaSatisfaccion,
  deleteEncuestaSatisfaccion,
  getEncuestaSatisfaccionByPaciente,
};
