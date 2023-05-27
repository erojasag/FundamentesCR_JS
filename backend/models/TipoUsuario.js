const { DataTypes } = require('sequelize');
const db = require('../config/db');

const TipoUsuario = db.define('TipoUsuario', {
  IdTipoUsuario: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
  },
  Descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

TipoUsuario.associate = (models) => {
  TipoUsuario.hasMany(models.Usuario, { foreignKey: 'IdTipoUsuario' });
};

module.exports = TipoUsuario;
