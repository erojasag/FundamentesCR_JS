const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Status = db.define(
  'Statuses',
  {
    IdStatus: {
      type: DataTypes.UUIDV1,
      primaryKey: true,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'Status',
      plural: 'Statuses',
    },
  }
);

module.exports = Status;
