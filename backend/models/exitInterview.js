const { DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('./User');
const house = require('./house');

const ExitInterview = db.define(
  'ExitInterviews',
  {
    IdExitInterview: {
      type: DataTypes.UUIDV1,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    Observations: {
      type: DataTypes.STRING,
    },
    ExitDate: {
      type: DataTypes.DATE,
    },
    IdUser: {
      type: DataTypes.UUIDV1,
      references: {
        model: User,
        key: 'IdUser',
      },
    },
    IdHouse: {
      type: DataTypes.UUIDV1,
      references: {
        model: house,
        key: 'IdHouse',
      },
    },
    IdDoctorUser: {
      type: DataTypes.UUIDV1,
      references: {
        model: User,
        key: 'IdDoctorUser',
      },
    },
  },
  {
    name: {
      singular: 'ExitInterview',
      plural: 'ExitInterviews',
    },
  }
);

ExitInterview.beforeFind((options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt', 'IdUser', 'IdHouse'],
  };
  options.include = [
    {
      model: User,
      as: 'Users',
      attributes: ['Name', 'FirstLastName', 'SecondLastName', 'Cedula'],
    },
    {
      model: house,
      as: 'Houses',
      attributes: ['Name', 'Location'],
    },
    {
      model: User,
      as: 'Doctors',
      attributes: ['Name', 'FirstLastName', 'SecondLastName', 'Cedula'],
    },
  ];
});
ExitInterview.beforeCreate((exitInterviews) => {
  exitInterviews.attributes = {
    exclude: ['createdAt', 'updatedAt'],
  };
});
ExitInterview.belongsTo(User, {
  foreignKey: 'IdUser',
  as: 'Users',
});

ExitInterview.belongsTo(User, {
  foreignKey: 'IdDoctorUser',
  as: 'Doctors',
});

ExitInterview.belongsTo(house, {
  foreignKey: 'IdHouse',
  as: 'Houses',
});

module.exports = ExitInterview;
