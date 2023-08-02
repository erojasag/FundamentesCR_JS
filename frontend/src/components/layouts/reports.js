import React from 'react';
import { Page, Document, StyleSheet, Text, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    marginBottom: 5,
  },
});

const PDFDocument = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Pacientes con Escolaridad</Text>
        <Text style={styles.heading}>Rangos de edad atendidos</Text>
        <Text style={styles.content}>
          {/* Insert data related to CircleChartEdad */}
        </Text>

        <Text style={styles.heading}>Número total de usuarios por casa</Text>
        <Text style={styles.content}>
          {/* Insert data related to CircleChartCasas */}
        </Text>

        <Text style={styles.heading}>Total genero masculino y femenino</Text>
        <Text style={styles.content}>
          {/* Insert data related to CircleChartPersonasPorGenero */}
        </Text>

        <Text style={styles.heading}>Total escolaridad</Text>
        <Text style={styles.content}>
          {/* Insert data related to CircleChartPersonasPorAnoEscolar */}
        </Text>
      </Page>
    </Document>
  );
};

export default PDFDocument;
