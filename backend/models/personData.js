const { DataTypes } = require('sequelize');
const db = require('../config/db');

const PersonData = db.define(
  'PersonsData',
  {
    IdPersonData: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    community: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    school: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diagnose: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allergies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cedula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    IdAcademicDegree: {
      type: DataTypes.UUIDV1,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    repetition: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    immigrant: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    lgtbiq: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    fatherMother: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    IdRecord: {
      type: DataTypes.UUIDV1,
      allowNull: false,
    },
    IdGender: {
      type: DataTypes.UUIDV1,
      allowNull: false,
    },
    IdNationality: {
      type: DataTypes.UUIDV1,
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'PersonsData',
      plural: 'PersonData',
    },
  }
);

module.exports = PersonData;
