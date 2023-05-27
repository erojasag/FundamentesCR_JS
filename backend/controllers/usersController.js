const db = require('../config/db');
const UsuarioModel = require('../models/Usuario');

const getAllUsers = async (req, res) => {
  try {
    const query = await db.query('SELECT * FROM Usuario');

    const listUsers = { ...query.recordset };
    console.log(listUsers);
    res.status(200).json({
      status: 'success',
      results: query.recordset.length,
      data: {
        listUsers,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new UsuarioModel(
      req.body.nombre,
      req.body.apellido1,
      req.body.apellido2,
      req.body.cedula,
      req.body.correo,
      req.body.contrasena,
      req.body.IdTipoUsuario
    );
    console.log(newUser);
    const query = await db.query(
      `INSERT INTO Usuario (IdUsuario, Nombre, Apellido1, Apellido2, Cedula, Correo, Contrasena, IdTipoUsuario) 
       VALUES (@IdUsuario, @Nombre, @Apellido1, @Apellido2, @Cedula, @Correo, @Contrasena, @IdTipoUsuario)`,
      {
        IdUsuario: newUser.idUsuario,
        Nombre: newUser.nombre,
        Apellido1: newUser.apellido1,
        Apellido2: newUser.apellido2,
        Cedula: newUser.cedula,
        Correo: newUser.correo,
        Contrasena: newUser.contrasena,
        IdTipoUsuario: newUser.IdTipoUsuario
      }
    );
    // const user = req.body;
    // console.log(user);
    res.status(200).json({
      status: 'success',
      data: {
        query,
      },
      message: 'User created successfully!',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        users: 'users',
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        users: 'users',
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        users: 'users',
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUserById,
};
