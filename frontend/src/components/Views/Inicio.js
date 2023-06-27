import React from 'react';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';

export default function Index() {
  return (
    <React.Fragment>
      <div id="page-top">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <div class="row">
                  <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Total de Casos
                            </div>
                            <div
                              class="h5 mb-0 font-weight-bold text-gray-800"
                              id="totalVenta"
                            >
                              300
                            </div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Total de Ingresados
                            </div>
                            <div
                              class="h5 mb-0 font-weight-bold text-gray-800"
                              id="totalIngresos"
                            >
                              40
                            </div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Total de Procesos
                            </div>
                            <div
                              class="h5 mb-0 font-weight-bold text-gray-800"
                              id="totalProductos"
                            >
                              50
                            </div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Total de Salidas
                            </div>
                            <div
                              class="h5 mb-0 font-weight-bold text-gray-800"
                              id="totalCategorias"
                            >
                              180
                            </div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-8 col-lg-7">
                    <div class="card shadow mb-4">
                      <div class="card-header py-3 bg-second-primary">
                        <h6 class="m-0 font-weight-bold text-white">
                          Rangos de edad atendidos
                        </h6>
                      </div>

                      <div class="card-body">
                        <div
                          class="chart-area"
                          style={{ height: '350px !important' }}
                        >
                          <canvas id="charVentas"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-5">
                    <div class="card shadow mb-4">
                      <div class="card-header py-3 bg-second-primary">
                        <h6 class="m-0 font-weight-bold text-white">
                          Casa hogar
                        </h6>
                      </div>

                      <div class="card-body">
                        <div
                          class="chart-pie"
                          style={{ height: '350px !important' }}
                        >
                          <canvas id="charProductos"></canvas>
                        </div>
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
