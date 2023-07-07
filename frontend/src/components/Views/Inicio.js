import React from 'react';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import CircleChart from '../layouts/circleChartEdad';
import CircleChartCasas from '../layouts/circleChartCasas';
import Stats from '../layouts/stats';

export default function Index() {
  return (
    <React.Fragment>
      <div id="page-top">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <Stats />

              <div className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col ">
                  <div className="card shadow mb-4 h-100">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        Rangos de edad atendidos
                      </h6>
                    </div>
                    <div className="card-body align-items-center justify-content-center">
                      <div className="chart-area" style={{ height: '350px' }}>
                        <CircleChart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow mb-4 h-100">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        Casas Escucharte Total de pacientes por casa
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
                {/* <div className="col">
                  <div className="card shadow mb-4 h-100">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        Total de procesos
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
                </div> */}
                {/* <div className="col">
                  <div className="card shadow mb-4 h-100">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        Total de salidas
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
                </div> */}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
