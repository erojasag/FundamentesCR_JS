const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Nationality = db.define(
  'Nationalities',
  {
    IdNationality: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    Description: {
      type: DataTypes.STRING(50),
    },
  },
  {
    name: {
      singular: 'Nationatily',
      plural: 'Nationalities',
    },
  }
);

module.exports = Nationality;
