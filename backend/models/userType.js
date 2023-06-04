const { DataTypes } = require('sequelize');
// const Usuarios = require('./Usuarios');
const db = require('../config/db');

const userType = db.define(
  'UsersType',
  {
    IdUserType: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'PersonInCharge',
      plural: 'PersonsInCharge',
    },
  }
);

module.exports = userType;
