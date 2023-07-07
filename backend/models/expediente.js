const { DataTypes } = require('sequelize');
const Usuarios = require('./usuario');
const paciente = require('./paciente');
const db = require('../config/db');

const expediente = db.define(
  'expedientes',
  {
    expedienteId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    doctorId: {
      type: DataTypes.UUIDV1,
      references: {
        model: Usuarios,
        key: 'usuarioId',
      },
    },
    pacienteId: {
      type: DataTypes.UUIDV1,
      references: {
        model: paciente,
        key: 'pacienteId',
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
      singular: 'expediente',
      plural: 'expedientes',
    },
  }
);

expediente.addHook('beforeFind', async (options) => {
  options.attributes = {
    exclude: ['doctorId', 'pacienteId', 'datosMedicosId'],
  };
  options.include = [
    {
      model: Usuarios,
      as: 'doctor',
      attributes: ['nombre', 'primerApe', 'segundoApe'],
    },
    {
      model: paciente,
      as: 'paciente',
      attributes: [
        'nombreCompleto',
        'contacto',
        'fechaNacimiento',
        'edad',
        'nacionalidad',
        'distritoResidencia',
        'direccion',
        'genero',
        'casaId',
        'cedula',
        'datosMedicosId',
      ],
    },
  ];
});

expediente.belongsTo(Usuarios, {
  foreignKey: 'doctorId',
  as: 'doctor',
});

expediente.belongsTo(paciente, {
  foreignKey: 'pacienteId',
  as: 'paciente',
});

module.exports = expediente;
