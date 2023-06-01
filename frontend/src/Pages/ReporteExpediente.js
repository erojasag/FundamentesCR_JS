import React from 'react';
import SideMenu from '../utils/sideMenu';
import Navbar from '../utils/navbar';
import Footer from '../utils/footer';
export default function ReporteExpediente() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideMenu />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div class="container-fluid">
              <div class="card shadow mb-4">
                <div class="card-header py-3 bg-second-primary">
                  <h6 class="m-0 font-weight-bold text-white">
                    Reporte de Salidas
                  </h6>
                </div>
                <div class="card-body">
                  <div class="form-row align-items-end">
                    <div class="form-group col-sm-3">
                      <label for="txtFechaInicio">Fecha Entrevista</label>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        id="txtFechaInicio"
                      />
                    </div>
                    <div class="form-group col-sm-3">
                      <label for="txtFechaFin">Numero Expediente</label>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        id="txtFechaFin"
                      />
                    </div>
                    <div class="form-group col-sm-3">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        id="btnBuscar"
                      >
                        <i class="fas fa-search"></i> Buscar
                      </button>
                    </div>
                  </div>

                  <hr />
                  <div class="row">
                    <div class="col-sm-12">
                      <table
                        id="tbdata"
                        class="table table-sm table-striped"
                        cellspacing="0"
                        style={{ width: '100%' }}
                      >
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Fecha de Entrevista</th>
                            <th scope="col">Numero expediente</th>
                            <th scope="col">Estado</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
