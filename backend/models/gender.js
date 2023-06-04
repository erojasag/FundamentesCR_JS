const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Gender = db.define(
  'Genders',
  {
    IdSexo: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
    },
  },
  {
    name: {
      singular: 'Gender',
      plural: 'Genders',
    },
  }
);

module.exports = Gender;
