import React from 'react';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import ReportDownload from '../layouts/reports';
export default function Reportes() {
  return (
    <React.Fragment>
      <div id="page-top">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" className="d-flex flex-column">
            <Navbar />
            <div id="content">
              <div className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-4 d-flex justify-content-center align-items-center">
                <div className="col">
                  <div className="card shadow mb-4 h-100">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        Reporte de Beneficiarios con Escolaridad
                      </h6>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <div className="chart-area" style={{ height: '100%' }}>
                        <ReportDownload reportType="GetPacientesWithEscolaridad" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow mb-4 h-100">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        Reporte de Beneficiarios por genero
                      </h6>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <div className="chart-area" style={{ height: '100%' }}>
                        <ReportDownload reportType="pacientesPorGenero" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow mb-4 h-100">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        Reporte de Beneficiarios con Escolaridad
                      </h6>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <div className="chart-area" style={{ height: '100%' }}>
                        <ReportDownload reportType="pacientesPorAnoEscolar" />
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
