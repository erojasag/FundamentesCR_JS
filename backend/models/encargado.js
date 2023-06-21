const { DataTypes } = require('sequelize');
const db = require('../config/db');

const encargado = db.define(
  'Encargados',
  {
    encargadoId: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    parentezco: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    nombreCompleto: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
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
    cedula: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    contacto: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    escolaridad: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ocupacion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    condicionLaboral: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    consumoMedicinas: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    expedienteHNP: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    situacionParti: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'Encargado',
      plural: 'Encargados',
    },
  }
);

encargado.addHook('beforeFind', async (options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt'],
  };
});

module.exports = encargado;
