import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const ReportDownload = () => {
  const [downloadLink, setDownloadLink] = useState('');

  const fetchPDFReport = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
        
      };
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}stats/GetPacientesWithEscolaridad`,
        {
          headers,
          responseType: 'arrayBuffer', // Important to specify the response type as 'blob'
        }
      );

      console.log(response);

      // Create a Blob URL to display and download the PDF
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setDownloadLink(pdfUrl);
    } catch (error) {
      console.error('Error fetching PDF report:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchPDFReport}>Fetch PDF Report</button>
      {downloadLink && (
        <div>
          <a href={downloadLink} download="output .pdf">
            Download PDF Report
          </a>
        </div>
      )}
    </div>
  );
};

export default ReportDownload;
