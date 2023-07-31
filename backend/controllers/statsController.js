const catchAsync = require('../utils/catchAsync');
const db = require('../config/db');

const getPacientesPorEdad = catchAsync(async (req, res, next) => {
  const ageRanges = await db.query('CALL GetAgeRangesWithCounts()');
  res.status(200).json({
    status: 'success',
    data: {
      data: ageRanges,
    },
  });
});

const getStatsCasa = catchAsync(async (req, res, next) => {
  const pacientesPorCasa = await db.query('CALL GetStatsCasas()');

  res.status(200).json({
    status: 'success',

    data: {
      data: pacientesPorCasa,
    },
  });
});

const getPacientesPorGenero = catchAsync(async (req, res, next) => {
  const pacientesPorGenero = await db.query('CALL CountDistinctGenders()');

  res.status(200).json({
    status: 'success',
    data: {
      data: pacientesPorGenero,
    },
  });
});

const getPacientesPorAnoEscolar = catchAsync(async (req, res, next) => {
  const pacientesPorAnoEscolar = await db.query(
    'CALL CountDistinctSchoolYears()'
  );

  res.status(200).json({
    status: 'success',
    data: {
      data: pacientesPorAnoEscolar,
    },
  });
});

const getPacientesWithEscolaridad = catchAsync(async (req, res) => {
  const report = await db.query('Call GetPacientesWithEscolaridad();');

  res.status(200).json({
    status: 'success',
    responseType: 'blob',
    data: {
      data: report,
    },
  });
});

module.exports = {
  getPacientesPorEdad,
  getStatsCasa,
  getPacientesPorGenero,
  getPacientesPorAnoEscolar,
  getPacientesWithEscolaridad,
};
