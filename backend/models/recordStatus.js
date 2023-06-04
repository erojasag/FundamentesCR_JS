const { DataTypes } = require('sequelize');
const db = require('../config/db');

const RecordStatus = db.define('RecordsStatus', {
  IdRecordStatus: {
    type: DataTypes.UUIDV1,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true,
  },
  BirthCertificate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  InformedConsent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Transportation: {
    type: DataTypes.STRING,
  },
  Photo: {
    type: DataTypes.BLOB,
  },
  Video: {
    type: DataTypes.BLOB,
  },
  RRSSImg: {
    type: DataTypes.BLOB,
  },
  RecordVoiceForWorkShops: {
    type: DataTypes.BOOLEAN,
  },
  RecordVoiceForClinics: {
    type: DataTypes.BOOLEAN,
  },
  IdPersonData: {
    type: DataTypes.UUIDV1,
  },
  IdStatus: {
    type: DataTypes.UUIDV1,
  },
},
{
  name: {
    singular: 'RecordStatus',
    plural: 'RecordsStatus',
  },
});

module.exports = RecordStatus;
