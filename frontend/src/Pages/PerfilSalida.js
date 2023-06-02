import React from 'react';
import SideMenu from '../utils/sideMenu';
import Navbar from '../utils/navbar';
import Footer from '../utils/footer';

export default function PerfilSalida() {
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
                    Lista de Perfiles de Salida
                  </h6>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <button
                        class="btn btn-success"
                        data-toggle="modal"
                        data-target="#modalData"
                      >
                        <i class="fas fa-user-plus"></i> Nuevo Perfil de Salida
                      </button>
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
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Primer Apellido</th>
                            <th>Segundo Apellido</th>
                            <th>Cédula</th>
                            <th>Fecha de Salida</th>
                            <th>Casa EscuchArte</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Tiger</td>
                            <td>Nixon</td>
                            <td>Nixon</td>
                            <td>1-1111-1111</td>
                            <td>04/18/2023</td>
                            <td>Sixaola</td>
                            <td>
                              <a
                                href="EditarPerfilSalida"
                                class="btn btn-primary btn-sm"
                              >
                                <i class="fas fa-pencil-alt"></i>
                              </a>
                              <a
                                href="EditarPerfilSalida"
                                class="btn btn-danger btn-sm"
                                data-toggle="modal"
                                data-target="#perfilModal"
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
                id="perfilModal"
                tabindex="-1"
                aria-labelledby="perfilModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title"
                        id="perfilModalLabel"
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

              <div
                class="modal fade"
                id="modalData"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
                data-backdrop="static"
              >
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h6>Añadir Perfil de Salida</h6>
                      <button
                        class="close"
                        type="button"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <input type="hidden" value="0" id="txtId" />
                        <div class="row">
                          <div class="col-sm-8">
                            <div class="form-row">
                              <div class="form-group col-sm-6">
                                <label for="txtNombre">Nombre</label>
                                <input
                                  type="text"
                                  class="form-control form-control-sm input-validar"
                                  id="txtNombre"
                                  name="Nombre"
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtApellido1">
                                  Primer Apellido
                                </label>
                                <input
                                  type="text"
                                  class="form-control form-control-sm input-validar"
                                  id="txtApellido1"
                                  name="txtApellido1"
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtApellido2">
                                  Segundo Apellido
                                </label>
                                <input
                                  type="text"
                                  class="form-control form-control-sm input-validar"
                                  id="txtApellido2"
                                  name="txtApellido2"
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtCedula">Cédula</label>
                                <input
                                  type="text"
                                  class="form-control form-control-sm input-validar"
                                  id="txtCedula"
                                  name="txtCedula"
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtFechaSalida">
                                  Fecha de Salida
                                </label>
                                <input
                                  type="date"
                                  class="form-control form-control-sm input-validar"
                                  id="txtFechaSalida"
                                  name="txtFechaSalida"
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtIdUsuario">
                                  Nombre de Usuario
                                </label>
                                <input
                                  type="text"
                                  class="form-control form-control-sm input-validar"
                                  id="txtIdUsuario"
                                  name="txtIdUsuario"
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtCasa">Casa EscuchArte</label>
                                <select class="custom-select" id="cboCasa">
                                  <option value="0">
                                    Seleccione una opción:
                                  </option>
                                  <option value="1">CASA WOLABA YOUTH</option>
                                  <option value="2">
                                    CASA IRIRIA DITSÖ JÚ
                                  </option>
                                  <option value="3">CASA YAMIPA</option>
                                  <option value="4">CASA LOVE AND UNITY</option>
                                  <option value="5">
                                    CASA CARMEN LYRA - Bribri, Pavas
                                  </option>
                                  <option value="6">El TRIUNFO</option>
                                  <option value="7">CASA METRÓPOLIS</option>
                                  <option value="8">
                                    CASA CARMEN LYRA - Santa Ana
                                  </option>
                                  <option value="9">
                                    CASA CAMILLE CLAUDEL
                                  </option>
                                  <option value="10">CASA SAINT-EXUPÉRY</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        class="btn btn-danger btn-sm"
                        type="button"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        class="btn btn-primary btn-sm"
                        type="button"
                        id="btnGuardar"
                      >
                        Guardar
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
