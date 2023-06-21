const { DataTypes } = require('sequelize');
const usuario = require('./usuario');
const db = require('../config/db');
const aspectosComunitarios = require('./aspectoComunitario');
const aspectosClinicos = require('./aspectoClinico');
const aspectosPsicoEducativos = require('./aspectoPsicoEducativo');
const aspectosDesarrolloTalleres = require('./aspectoDesarrolloTaller');

const perfilSalida = db.define(
  'perfilesSalida',
  {
    perfilSalidaId: {
      type: DataTypes.UUIDV1,
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
    aspectoPsicoEducativoId: {
      type: DataTypes.UUIDV1,
      references: {
        model: aspectosPsicoEducativos,
        key: 'aspectoPsicoEducativoId',
      },
    },
    aspectoDesarrolloTallerId: {
      type: DataTypes.UUIDV1,
      references: {
        model: aspectosDesarrolloTalleres,
        key: 'aspectoDesarrolloTallerId',
      },
    },
  },
  {
    name: {
      singular: 'perfilSalida',
      plural: 'perfilesSalida',
    },
  }
);

perfilSalida.addHook('beforeFind', async (options) => {
  options.attributes = {
    exclude: [
      'doctorId',
      'aspectoComunitarioId',
      'aspectoClinicoId',
      'aspectoPsicoEducativoId',
      'aspectoDesarrolloTallerId',
      'createdAt',
      'updatedAt',
    ],
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
        exclude: ['aspectoComunitarioId', 'createdAt', 'updatedAt'],
      },
    },
    {
      model: aspectosClinicos,
      as: 'aspectoClinico',
      attributes: {
        exclude: ['aspectoClinicoId', 'createdAt', 'updatedAt'],
      },
    },
    {
      model: aspectosPsicoEducativos,
      as: 'aspectoPsicoEducativo',
      attributes: {
        exclude: ['aspectoPsicoEducativoId', 'createdAt', 'updatedAt'],
      },
    },
    {
      model: aspectosDesarrolloTalleres,
      as: 'aspectoDesarrolloTaller',
      attributes: {
        exclude: ['aspectoDesarrolloTallerId', 'createdAt', 'updatedAt'],
      },
    },
  ];
});

perfilSalida.belongsTo(usuario, {
  foreignKey: 'doctorId',
  as: 'doctor',
});

perfilSalida.belongsTo(aspectosComunitarios, {
  foreignKey: 'aspectoComunitarioId',
  as: 'aspectoComunitario',
});

perfilSalida.belongsTo(aspectosClinicos, {
  foreignKey: 'aspectoClinicoId',
  as: 'aspectoClinico',
});

perfilSalida.belongsTo(aspectosPsicoEducativos, {
  foreignKey: 'aspectoPsicoEducativoId',
  as: 'aspectoPsicoEducativo',
});

perfilSalida.belongsTo(aspectosDesarrolloTalleres, {
  foreignKey: 'aspectoDesarrolloTallerId',
  as: 'aspectoDesarrolloTaller',
});

module.exports = perfilSalida;
