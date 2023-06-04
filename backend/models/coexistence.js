const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Coexistence = db.define('Coexistences', {
  IdCoexistence: {
    type: DataTypes.UUIDV1V4,
    allowNull: false,
    primaryKey: true,
  },
  Mother: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  Father: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  Siblings: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  SiblingsQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  OtherPerson: {
    type: DataTypes.BOOLEAN,
  },
  IdPersonData: {
    type: DataTypes.UUIDV1,
    allowNull: false,
    references: {
      model: 'PersonsData',
      key: 'IdPersonData',
    },
  },
},{
  name:{
    singular:'Coexistence',
    plural  :'Coexistences'
  }
});

module.exports = Coexistence;
