const { DataTypes } = require('sequelize');
const db = require('../config/db');

const condicionLaboral = db.define(
  'condicionesLaborales',
  {
    condicionLaboralId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    trabajaActualmente: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    lugar: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ultimoEmpleo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    motivoAbandono: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'condicionLaboral',
      plural: 'CondicionesLaborales',
    },
  }
);

condicionLaboral.addHook('beforeFind', async (options) => {
  options.attributes = {
    exclude: ['createdAt', 'updatedAt'],
  };
});

module.exports = condicionLaboral;
