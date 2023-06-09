import React from 'react';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
export default function EstadoExpendiente() {
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
                    Lista de Estados de Expedientes
                  </h6>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <table
                        class="table table-bordered"
                        id="tbdata"
                        cellspacing="0"
                        style={{ width: '100%' }}
                      >
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Permiso de Transporte</th>
                            <th>Uso de Imagenes Para Redes</th>
                            <th>Grabación de Voz en Taller</th>
                            <th>Grabación de Voz en Clinica</th>
                            <th>Persona</th>
                            <th>Estado Expediente</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Si</td>
                            <td>Si</td>
                            <td>Si</td>
                            <td>Si</td>
                            <td>Tiger Nixon</td>
                            <td>Activo</td>
                            <td>
                              <a
                                href="EditarEstadoExp"
                                class="btn btn-primary btn-sm"
                              >
                                <i class="fas fa-pencil-alt"></i>
                              </a>
                              &nbsp;
                              &nbsp;
                              <a
                                href="EditarEstadoExp"
                                class="btn btn-danger btn-sm"
                                data-toggle="modal"
                                data-target="#encuestaModal"
                              >
                                <i class="fas fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="modal fade"
                id="encuestaModal"
                tabindex="-1"
                aria-labelledby="encuestaModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title"
                        id="encuestaModalLabel"
                        data-dismiss="modal"
                      >
                        Eliminar
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>¿Seguro que desea eliminar el contenido?</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Cerrar
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Eliminar
                      </button>
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
