const { DataTypes } = require('sequelize');
const db = require('../config/db');

const TipoUsuario = db.define('TipoUsuario', {
  IdTipoUsuario: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  Descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

TipoUsuario.getRole = async (id) => {
  const { Descripcion } = await TipoUsuario.findByPk(id, {
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  return Descripcion;
};

module.exports = TipoUsuario;
