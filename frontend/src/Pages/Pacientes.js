import React from 'react';
import SideMenu from '../utils/sideMenu';
import Navbar from '../utils/navbar';
import Footer from '../utils/footer';

export default function Pacientes() {
  return (
    <div id="wrapper">
      <SideMenu />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />

          <div class="container-fluid">
            <div class="card shadow mb-4">
              <div class="card-header py-3 bg-second-primary">
                <h6 class="m-0 font-weight-bold text-white">
                  Lista de Usuarios
                </h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <a class="btn btn-success" href="AgregarPersonaResponsable">
                      <i class="fas fa-user-plus"></i> Nuevo Usuario
                    </a>
                  </div>
                </div>
                <hr />
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
                          <th>Nombre Completo</th>
                          <th>Cédula</th>
                          <th>Dirección</th>
                          <th>Teléfono</th>
                          <th>Edad Actual</th>
                          <th>Fecha de Nacimiento</th>
                          <th>Migrante</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>12332112</td>
                          <td>Alajuela</td>
                          <td>12344321</td>
                          <td>19</td>
                          <td>01/01/2000</td>
                          <td>Si</td>
                          <td>
                            <a
                              href="EditarPasciente"
                              class="btn btn-primary btn-sm"
                            >
                              <i class="fas fa-pencil-alt"></i>
                            </a>
                            <a
                              href="EditarPasciente"
                              class="btn btn-danger btn-sm"
                              data-toggle="modal"
                              data-target="#usuariosModal"
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
              id="usuariosModal"
              tabindex="-1"
              aria-labelledby="usuariosModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title"
                      id="usuariosModalLabel"
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
                    <button type="button" class="close" data-dismiss="modal">
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
  );
}
