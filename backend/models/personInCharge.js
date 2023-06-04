const { DataTypes } = require('sequelize');
const db = require('../config/db');

const PersonInCharge = db.define(
  'PersonsInCharge',
  {
    IdPersonInCharge: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING(150),
    },
    cedula: {
      type: DataTypes.STRING(50),
    },
    phoneNumber: {
      type: DataTypes.STRING(50),
    },
    IdPersonData: {
      type: DataTypes.UUIDV1,
    },
    IdRelationship: {
      type: DataTypes.UUIDV1,
    },
    IdNationality: {
      type: DataTypes.UUIDV1,
    },
  },
  {
    name: {
      singular: 'PersonInCharge',
      plural: 'PersonsInCharge',
    },
  }
);

module.exports = PersonInCharge;
