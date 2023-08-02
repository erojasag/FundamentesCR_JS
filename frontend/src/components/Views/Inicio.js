import React, { useEffect, useState } from 'react';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Stats from '../layouts/stats';
import CircleChartCasas from '../layouts/circleChartCasas';
import CircleChartEdad from '../layouts/circleChartEdad';
import CircleChartPersonasPorGenero from '../layouts/circleChartPersonasPorGenero';
import CircleChartPersonasPorAnoEscolar from '../layouts/circleChartPersonaPorAnoEscolar';
import Cookies from 'js-cookie';
import axios from 'axios';
export default function Index() {
  const [jsonData, setJsonData] = useState(null);

  const fetchData = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_API}stats/GetPacientesWithEscolaridad`,
      {
        headers,
      }
    );

    console.log(response.data.data.data);

    setJsonData(response.data.data.data);
  };

  const handleGeneratePDF = () => {
    // Your code to generate the PDF, e.g., open it in a new window for the user to download
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div id="page-top">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <Stats />

              <div className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-4 d-flex justify-content-center align-items-center">
                <div className="col ">
                  <div className="card shadow mb-4 h-100">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        Rangos de edad atendidos
                      </h6>
                    </div>
                    <div className="card-body align-items-center justify-content-center">
                      <div className="chart-area" style={{ height: '350px' }}>
                        <CircleChartEdad />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow mb-4 h-100">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        Número total de usuarios por casa
                      </h6>
                    </div>
                    <div className="card-body align-items-center justify-content-center">
                      <div
                        className="chart-area"
                        style={{ height: '350px', width: '100%' }}
                      >
                        <CircleChartCasas />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow mb-4 h-100">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        Total género masculino y femenino
                      </h6>
                    </div>
                    <div className="card-body align-items-center justify-content-center">
                      <div
                        className="chart-area"
                        style={{ height: '350px', width: '100%' }}
                      >
                        <CircleChartPersonasPorGenero />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow mb-4 h-100">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        Total escolaridad
                      </h6>
                    </div>
                    <div className="card-body align-items-center justify-content-center">
                      <div
                        className="chart-area"
                        style={{ height: '350px', width: '100%' }}
                      >
                        <CircleChartPersonasPorAnoEscolar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
