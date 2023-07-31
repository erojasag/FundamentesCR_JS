const { DataTypes } = require('sequelize');
const usuario = require('./usuario');
const db = require('../config/db');
const aspectosComunitarios = require('./aspectoComunitario');
const aspectosClinicos = require('./aspectoClinico');
const aspectosPsicoEducativos = require('./aspectoPsicoEducativo');
const aspectosDesarrolloTalleres = require('./aspectoDesarrolloTaller');

const perfilEntrada = db.define(
  'perfilesEntrada',
  {
    perfilEntradaId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    doctorId: {
      type: DataTypes.UUIDV1,
      references: {
        model: usuario,
        key: 'usuarioId',
      },
    },
    aspectoComunitarioId: {
      type: DataTypes.UUIDV1,
      references: {
        model: aspectosComunitarios,
        key: 'aspectosComunitariosId',
      },
    },
    aspectoClinicoId: {
      type: DataTypes.UUIDV1,
      references: {
        model: aspectosClinicos,
        key: 'aspectoClinicoId',
      },
    },
    aspectoPsicoeducativoId: {
      type: DataTypes.UUIDV1,
      references: {
        model: aspectosPsicoEducativos,
        key: 'aspectoPsicoeducativoId',
      },
    },
    aspectoDesarrolloTallerId: {
      type: DataTypes.UUIDV1,
      references: {
        model: aspectosDesarrolloTalleres,
        key: 'aspectoDesarrolloTallerId',
      },
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
      singular: 'perfilEntrada',
      plural: 'perfilesEntrada',
    },
  }
);

perfilEntrada.addHook('beforeFind', async (options) => {
  options.attributes = {
    exclude: ['doctorId', 'createdAt', 'updatedAt'],
  };
  options.include = [
    {
      model: usuario,
      as: 'doctor',
      attributes: {
        exclude: [
          'usuarioId',
          'email',
          'contrasena',
          'rolId',
          'contrasenaChangedAt',
          'contrasenaResetToken',
          'contrasenaResetExpires',
          'createdAt',
          'updatedAt',
          'activo',
        ],
      },
    },
    {
      model: aspectosComunitarios,
      as: 'aspectoComunitario',
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
    {
      model: aspectosClinicos,
      as: 'aspectoClinico',
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
    {
      model: aspectosPsicoEducativos,
      as: 'aspectoPsicoeducativo',
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
    {
      model: aspectosDesarrolloTalleres,
      as: 'aspectoDesarrolloTaller',
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  ];
});

perfilEntrada.belongsTo(usuario, {
  foreignKey: 'doctorId',
  as: 'doctor',
});

perfilEntrada.belongsTo(aspectosComunitarios, {
  foreignKey: 'aspectoComunitarioId',
  as: 'aspectoComunitario',
});

perfilEntrada.belongsTo(aspectosClinicos, {
  foreignKey: 'aspectoClinicoId',
  as: 'aspectoClinico',
});

perfilEntrada.belongsTo(aspectosPsicoEducativos, {
  foreignKey: 'aspectoPsicoeducativoId',
  as: 'aspectoPsicoeducativo',
});

perfilEntrada.belongsTo(aspectosDesarrolloTalleres, {
  foreignKey: 'aspectoDesarrolloTallerId',
  as: 'aspectoDesarrolloTaller',
});

module.exports = perfilEntrada;
