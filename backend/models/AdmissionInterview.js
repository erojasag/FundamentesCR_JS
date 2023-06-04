const { DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('./User');
const house = require('./house');

const AdmissionInterview = db.define(
  'AdmissionInterviews',
  {
    IdAdmissionInterview: {
      type: DataTypes.UUIDV1,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    Observations: { type: DataTypes.STRING },
    AdmissionDate: { type: DataTypes.DATE },

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
    updatedAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  },
  {
    name: {
      singular: 'AdmissionInterview',
      plural: 'AdmissionInterviews',
    },
  }
);

AdmissionInterview.beforeFind((options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt', 'IdUsuario', 'IdCasa'],
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
  ];
});
AdmissionInterview.beforeCreate((admissionInterviews) => {
  admissionInterviews.attributes = {
    exclude: ['createdAt', 'updatedAt'],
  };
});
AdmissionInterview.belongsTo(User, {
  foreignKey: 'IdUser',
  as: 'Users',
});

AdmissionInterview.belongsTo(house, {
  foreignKey: 'IdHouse',
  as: 'Houses',
});

module.exports = AdmissionInterview;
