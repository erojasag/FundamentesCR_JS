const { DataTypes } = require('sequelize');
const Casas = require('./casa');
const db = require('../config/db');
const datoMedico = require('./datoMedico');
const condicionLaboral = require('./condicionLaboral');
const sociodemograficos = require('./sociodemografico');
const encargado = require('./encargado');
const dinamicaFamiliar = require('./dinamicaFamiliar');
const perfilEntrada = require('./perfilEntrada');
const perfilSalida = require('./perfilSalida');
const escolaridad = require('./escolaridad');
const encuestaSatisfaccion = require('./encuestaSatisfaccion');

const Paciente = db.define(
  'pacientes',
  {
    pacienteId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    nombreCompleto: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cedula: {
      type: DataTypes.STRING(15),
      unique: true,
      validate: {
        isNumeric: true,
        notEmpty: true,
        len: [9, 15],
      },
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    contacto: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nacionalidad: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    distritoResidencia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    casaId: {
      type: DataTypes.UUIDV1,
      references: {
        model: Casas,
        key: 'casaId',
      },
    },
    datosMedicosId: {
      type: DataTypes.UUID,
      references: {
        model: datoMedico,
        key: 'datosMedicosId',
      },
    },
    condicionLaboralId: {
      type: DataTypes.UUID,
      references: {
        model: condicionLaboral,
        key: 'condicionLaboralId',
      },
    },
    sociodemograficosId: {
      type: DataTypes.UUID,
      references: {
        model: sociodemograficos,
        key: 'sociodemograficosId',
      },
    },
    encargadoId: {
      type: DataTypes.UUID,
      references: {
        model: encargado,
        key: 'encargadoId',
      },
    },
    dinamicaFamiliarId: {
      type: DataTypes.UUID,
      references: {
        model: dinamicaFamiliar,
        key: 'dinamicaFamiliarId',
      },
    },
    perfilEntradaId: {
      type: DataTypes.UUID,
      references: {
        model: perfilEntrada,
        key: 'perfilEntradaId',
      },
      perfilSalidaId: {
        type: DataTypes.UUID,
        references: {
          model: perfilSalida,
          key: 'perfilSalidaId',
        },
      },
      escolaridadId: {
        type: DataTypes.UUID,
        references: {
          model: escolaridad,
          key: 'escolaridadId',
        },
      },
      encuestaSatisfaccionId: {
        type: DataTypes.UUID,
        references: {
          model: encuestaSatisfaccion,
          key: 'encuestaSatisfaccionId',
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
  },
  {
    name: {
      singular: 'paciente',
      plural: 'pacientes',
    },
  }
);

Paciente.addHook('beforeFind', async (options) => {
  options.where = {
    ...(options.where || {}),
    activo: true,
  };
  options.include = [
    {
      model: Casas,
      as: 'casa',
      attributes: ['casaId', 'nombreCasa', 'canton', 'provincia', 'direccion'],
    },
    {
      model: datoMedico,
      as: 'datosMedicos',
      attributes: [
        'alergias',
        'consumo',
        'embarazo',
        'hijoshijas',
        'expedienteHNP',
        'situacionParticular',
        'observaciones',
      ],
    },
    {
      model: condicionLaboral,
      as: 'condicionLaboral',
      attributes: [
        'trabajaActualmente',
        'lugar',
        'ultimoEmpleo',
        'motivoAbandono',
      ],
    },
    {
      model: sociodemograficos,
      as: 'sociodemograficos',
      attributes: [
        'tipoVivienda',
        'habitantesHogar',
        'cantidadFamilias',
        'electricidad',
        'aguaPotable',
        'celular',
        'internet',
        'cable',
        'internet',
        'recibeSubsidio',
        'institucion',
        'tipo',
        'datosInteres',
      ],
    },
    {
      model: encargado,
      as: 'encargado',
      attributes: [
        'parentezco',
        'nombreCompleto',
        'fechaNacimiento',
        'edad',
        'nacionalidad',
        'cedula',
        'contacto',
        'escolaridad',
        'ocupacion',
        'condicionLaboral',
        'consumoMedicinas',
        'expedienteHNP',
        'situacionParticular',
      ],
    },
    {
      model: dinamicaFamiliar,
      as: 'dinamicaFamiliar',
      attributes: [
        'privLibertad',
        'violenciaMujer',
        'violenciaFami',
        'acontecimientoRelev',
      ],
    },
    {
      model: perfilEntrada,
      as: 'perfilEntrada',
      attributes: [
        'perfilEntradaId',
        'doctorId',
        'aspectoComunitarioId',
        'aspectoClinicoId',
        'aspectoPsicoeducativoId',
        'aspectoDesarrolloTallerId',
      ],
    },
    {
      model: perfilSalida,
      as: 'perfilSalida',
      attributes: [
        'doctorId',
        'aspectoComunitarioId',
        'aspectoClinicoId',
        'aspectoPsicoeducativoId',
        'aspectoDesarrolloTallerId',
      ],
    },
    {
      model: escolaridad,
      as: 'escolaridad',
      attributes: [
        'inclusion',
        'expulsion',
        'tipoEducacion',
        'anoEscolar',
        'centroEducativo',
        'repitencia',
        'adecuacion',
        'ultimoAnoAprobado',
        'fechaSalida',
        'motivoSalida',
        'reinsercion',
      ],
    },
    {
      model: encuestaSatisfaccion,
      as: 'encuestaSatisfaccion',
    },
  ];
});

Paciente.belongsTo(Casas, {
  foreignKey: 'casaId',
  as: 'casa',
});

Paciente.belongsTo(datoMedico, {
  foreignKey: 'datosMedicosId',
  as: 'datosMedicos',
});

Paciente.belongsTo(condicionLaboral, {
  foreignKey: 'condicionLaboralId',
  as: 'condicionLaboral',
});

Paciente.belongsTo(sociodemograficos, {
  foreignKey: 'sociodemograficosId',
  as: 'sociodemograficos',
});

Paciente.belongsTo(encargado, {
  foreignKey: 'encargadoId',
  as: 'encargado',
});

Paciente.belongsTo(dinamicaFamiliar, {
  foreignKey: 'dinamicaFamiliarId',
  as: 'dinamicaFamiliar',
});

Paciente.belongsTo(perfilEntrada, {
  foreignKey: 'perfilEntradaId',
  as: 'perfilEntrada',
});

Paciente.belongsTo(perfilSalida, {
  foreignKey: 'perfilSalidaId',
  as: 'perfilSalida',
});

Paciente.belongsTo(escolaridad, {
  foreignKey: 'escolaridadId',
  as: 'escolaridad',
});

Paciente.belongsTo(encuestaSatisfaccion, {
  foreignKey: 'encuestaSatisfaccionId',
  as: 'encuestaSatisfaccion',
});

module.exports = Paciente;
