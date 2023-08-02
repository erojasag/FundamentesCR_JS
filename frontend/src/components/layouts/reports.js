import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
  },
});

// Create PDF component
const MyPDF = ({ data }) => (
  <Document>
    {data.map((item, index) => (
      <Page key={index} size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Nombre: {item.Nombre}</Text>
          <Text style={styles.text}>Contacto: {item.Contacto}</Text>
          <Text style={styles.text}>Edad: {item.Edad}</Text>
          <Text style={styles.text}>Nacionalidad: {item.Nacionalidad}</Text>
          {/* Add other fields you want to include in the PDF */}
        </View>
      </Page>
    ))}
  </Document>
);

export default MyPDF;
