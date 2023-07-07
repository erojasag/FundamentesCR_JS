const { DataTypes } = require('sequelize');
const db = require('../config/db');

const userType = db.define(
  'roles',
  {
    RolId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    nombreRol: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'Rol',
      plural: 'Roles',
    },
  }
);

module.exports = userType;
