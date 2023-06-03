const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Casas = db.define(
  'Casas',
  {
    IdCasa: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'Casa',
      plural: 'Casas',
    },
  }
);

Casas.beforeFind((options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt'],
  };
});

module.exports = Casas;
