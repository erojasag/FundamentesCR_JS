const {
  getAll,
  getOne,
  insertOne,
  updateOne,
  deleteOne,
} = require('./handlerFactory');

const rol = require('../models/rol');

const getAllRoles = getAll(rol);

const getRolById = getOne(rol);

const agregarRol = insertOne(rol);

const updateRol = updateOne(rol);

const deleteRol = deleteOne(rol);

module.exports = {
  getAllRoles,
  getRolById,
  agregarRol,
  updateRol,
  deleteRol,
};
