const { DataTypes } = require('sequelize');
const db = require('../config/db');

const PersonaResponsable = db.define('PersonaResponsable', {
  id: {
    type: DataTypes.INTEGER,
  },
});

module.exports = PersonaResponsable;
