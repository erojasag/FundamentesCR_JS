const { DataTypes } = require('sequelize');
const db = require('../config/db');

const ExitInterview = db.define(
  'ExitInterviews',
  {
    IdExitInterviews: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
  },
  {
    name: {
      singular: 'ExitInterview',
      plural: 'ExitInterviews',
    },
  }
);

module.exports = ExitInterview;
