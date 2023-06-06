const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Gender = db.define(
  'Genders',
  {
    IdGender: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    Description: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
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
