const db = require('../config/db');

const getAllExpedientes = async (req, res) => {
  try {
    const query = await db.query('SELECT * FROM EstadoExpediente');
    console.log(query);
    res.status(200).json({
      status: 'success',
      data: {
        query,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const createExpediente = async (req, res) => {};

const getExpedienteById = async (req, res) => {};

const deleteExpedienteById = async (req, res) => {};

const updateExpediente = async (req, res) => {};

module.exports = {
  getAllExpedientes,
  createExpediente,
  getExpedienteById,
  deleteExpedienteById,
  updateExpediente,
};
