const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');
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

  const data = {
    title: 'Pacientes con Escolaridad',
    heading: 'Pacientes con Escolaridad',
    pacientes: report.map((paciente) => {
      return {
        nombre: paciente.Nombre,
        contacto: paciente.Contacto,
        edad: paciente.Edad,
        nacionalidad: paciente.Nacionalidad,
        genero: paciente.Genero,
        tipoEducacion: paciente.TipoEducacion,
        anoEscolar: paciente.AnoEscolar,
        centroEducativo: paciente.CentroEducativo,
        ultimoAnoAprobado: paciente.UltimoAnoAprobado,
        adecuacion: paciente.Adecuacion,
        fechaDeSalida: paciente.FechaDeSalida,
        motivoSalida: paciente.MotivoSalida,
      };
    }),
  };

  try {
    const templatePath = path.join(__dirname, '../pdf/template.hbs');
    const templateContent = fs.readFileSync(templatePath, 'utf-8');
    const compiledTemplate = handlebars.compile(templateContent);
    const html = compiledTemplate(data);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);
    await page.emulateMediaType('print');

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="output.pdf"');
    res.send(pdfBuffer);

    console.log('PDF generated and sent successfully.');
  } catch (err) {
    console.error('Error generating or sending PDF:', err);
    res.status(500).json({ error: 'Error generating or sending PDF.' });
  }
});

module.exports = {
  getPacientesPorEdad,
  getStatsCasa,
  getPacientesPorGenero,
  getPacientesPorAnoEscolar,
  getPacientesWithEscolaridad,
};
