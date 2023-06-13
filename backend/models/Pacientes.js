const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Pacientes = db.define(
  'pacientes',
  {
    pacienteId: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    nombreCompleto: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cedula: {
      type: DataTypes.STRING(15),
      unique: true,
      validate: {
        isNumeric: true,
        notEmpty: true,
        len: [9, 15],
      },
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    contacto: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nacionalidad: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    distritoResidencia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'paciente',
      plural: 'pacientes',
    },
  }
);

module.exports = Pacientes;
