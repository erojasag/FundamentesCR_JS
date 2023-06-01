import React from 'react';
import SideMenu from '../utils/sideMenu';
import Navbar from '../utils/navbar';
import Footer from '../utils/footer';

export default function UsuarioLog() {
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
                    Lista de Usuarios
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
                        <i class="fas fa-user-plus"></i> Nuevo Usuario
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
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Cedula</th>
                            <th>Correo</th>
                            <th>Accion</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Tiger </td>
                            <td>Nixon</td>
                            <th>123456789</th>
                            <td>Edi@gmail.com</td>
                            <td>
                              <a
                                href="EditarUsuarioLog"
                                class="btn btn-primary btn-sm"
                              >
                                <i class="fas fa-pencil-alt"></i>
                              </a>
                              &nbsp; &nbsp;
                              <a
                                href="EditarUsuarioLogUsuario"
                                class="btn btn-danger btn-sm"
                                data-toggle="modal"
                                data-target="#exampleModal"
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
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
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
                      <h6>Añadir Usuario</h6>
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
                                <label for="txtCorreo">Apellidos</label>
                                <input
                                  type="email"
                                  class="form-control form-control-sm input-validar"
                                  id="Sexo"
                                  name="Sexo"
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtCorreo">Cedula</label>
                                <input
                                  type="email"
                                  class="form-control form-control-sm input-validar"
                                  id="Sexo"
                                  name="Sexo"
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtCorreo">Correo</label>
                                <input
                                  type="email"
                                  class="form-control form-control-sm input-validar"
                                  id="PoblacionPoblacion"
                                  name="Poblacion"
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtCorreo">Contraseña</label>
                                <input
                                  type="email"
                                  class="form-control form-control-sm input-validar"
                                  id="Nacionalidad"
                                  name="Nacionalidad"
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtCorreo">Tipo Usuario</label>
                                <select
                                  class="custom-select"
                                  id="cboTipoDocumentoVenta"
                                >
                                  <option value="1">Administrador</option>
                                  <option value="0">Psicologo</option>
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
