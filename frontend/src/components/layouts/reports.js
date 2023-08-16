import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ToastContainer, toast } from 'react-toastify';

const ReportDownload = ({ reportType }) => {
  const [downloadLink, setDownloadLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (downloadLink) {
      downloadPDF(); // Initiate download when downloadLink is available
    }
  }, [downloadLink]);

  const fetchPDFReport = async () => {
    setIsLoading(true);
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}stats/${reportType}`,
        {
          headers,
        }
      );

      const pdf = new jsPDF('landscape');

      if (reportType === 'GetPacientesWithEscolaridad') {
        const data = response.data.data;
        pdf.setFontSize(18);
        pdf.text('Beneficiarios con escolaridad', 105, 20, { align: 'center' });
        const rows = [
          'Nombre',
          'Contacto',
          'Edad',
          'Nacionalidad',
          'Genero',
          'Tipo de Educacion',
          'Ano Escolar',
          'Centro Educativo',
          'Ultimo Ano Aprobado',
          'Adecuacion',
          'Fecha de Salida',
          'Motivo de Salida',
        ];

        const tableData = data.map((item) => [
          item.Nombre,
          item.Contacto,
          item.Edad.toString(),
          item.Nacionalidad,
          item.Genero,
          item.TipoEducacion,
          item.AnoEscolar,
          item.CentroEducativo,
          item.UltimoAnoAprobado,
          item.Adecuacion,
          item.FechaDeSalida,
          item.MotivoSalida,
        ]);

        autoTable(pdf, {
          startY: 40,
          head: [rows],
          body: tableData,
          theme: 'grid', // You can change the theme or customize further
        });
      } else if (reportType === 'pacientesPorGenero') {
        const data = response.data.data.data;
        pdf.setFontSize(18);
        pdf.text('Beneficiarios por genero', 105, 20, { align: 'center' });

        const rows = ['Genero', 'Cantidad'];

        const tableData = data.map((item) => [
          item.genero,
          item.cantidad_personas_x_generos,
        ]);

        autoTable(pdf, {
          startY: 40,
          head: [rows],
          body: tableData,
          theme: 'grid',
        });
      } else if (reportType === 'pacientesPorAnoEscolar') {
        const data = response.data.data.data;

        pdf.setFontSize(18);
        pdf.text('Beneficiarios por genero', 105, 20, { align: 'center' });

        const rows = ['Ano Escolar', 'Cantidad'];

        const tableData = data.map((item) => [
          item.anoEscolar,
          item.cantidad_ninos_x_ano_escolar,
        ]);

        autoTable(pdf, {
          startY: 40,
          head: [rows],
          body: tableData,
          theme: 'grid',
        });
      }

      // Generate a data URL for the PDF
      const pdfDataUri = pdf.output('datauristring');

      setDownloadLink(pdfDataUri);
    } catch (error) {
      toast.error('Error al generar el reporte');
    } finally {
      setIsLoading(false);
    }
  };
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = downloadLink;

    if (reportType === 'GetPacientesWithEscolaridad') {
      link.download = 'Beneficiarios_con_escolaridad.pdf';
    } else if (reportType === 'pacientesPorGenero') {
      link.download = 'Beneficiarios_por_genero.pdf';
    } else if (reportType === 'pacientesPorAnoEscolar') {
      link.download = 'Beneficiarios_por_ano_escolar.pdf';
    }
    link.click();
  };

  return (
    <div>
      <button
        onClick={fetchPDFReport}
        disabled={isLoading}
        className="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
      >
        {isLoading ? 'Generando...' : 'Generar PDF'}
      </button>
    </div>
  );
};

export default ReportDownload;
