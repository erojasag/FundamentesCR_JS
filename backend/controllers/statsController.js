const fs = require('fs');
const PDFDocument = require('pdfkit');
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

const GetPacientesWithEscolaridad = catchAsync(async (req, res) => {
  const doc = new PDFDocument();

  const report = await db.query('Call GetPacientesWithEscolaridad();');

  doc.pipe(fs.createWriteStream('output.pdf'));

  report.forEach((paciente) => {
    doc.fontSize(25).text(`${paciente.Nombre}`, 100, 100);
  });
  doc.image('E:/FundamentesCR_JS/backend/public/images/fundamentes-logo.png', {
    fit: [250, 300],
    align: 'center',
    valign: 'center',
  });

  doc.end();

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
  GetPacientesWithEscolaridad,
};
