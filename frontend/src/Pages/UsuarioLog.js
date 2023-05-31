import React from 'react';

export default function UsuarioLog() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            class="sidebar-brand d-flex align-items-center justify-content-center"
            href="Inicio"
          >
            <div class="sidebar-brand-icon">
              <img
                src="assets/img/Logo.png"
                alt=""
                style={{ width: '80px', height: '90px', float: 'left' }}
              />
            </div>
            <div class="sidebar-brand-text mx-0">Fundamentes</div>
          </a>

          <hr class="sidebar-divider my-0" />
          <li class="nav-item">
            <a class="nav-link" href="Inicio">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseAdministracion"
              aria-expanded="true"
              aria-controls="collapseAdministracion"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span>Usuario Login</span>
            </a>
            <div
              id="collapseAdministracion"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <a class="collapse-item" href="UsuarioLog">
                  Usuarios
                </a>
                <a class="collapse-item" href="EditarUsuarioLog">
                  Editar Usuario
                </a>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseExpediente"
              aria-expanded="true"
              aria-controls="collapseExpediente"
            >
              <i class="fas fa-fw fa-clipboard-list"></i>
              <span>Paciente</span>
            </a>
            <div
              id="collapseExpediente"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <a class="collapse-item" href="/Pascientes">
                  Paciente
                </a>
                <a class="collapse-item" href="/EditarPasciente">
                  Editar Paciente
                </a>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseInventario"
              aria-expanded="true"
              aria-controls="collapseInventario"
            >
              <i class="fas fa-fw fa-clipboard-list"></i>
              <span>Expedientes</span>
            </a>
            <div
              id="collapseInventario"
              class="collapse"
              aria-labelledby="headingInventario"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <a class="collapse-item" href="DatosExpediente">
                  Datos de Expedientes
                </a>
                <a class="collapse-item" href="Pascientes">
                  Datos de Pacientes
                </a>
                <a class="collapse-item" href="PersonaResponsable">
                  Persona Responsable
                </a>
                <a class="collapse-item" href="Convivencia">
                  Convivencia
                </a>
                <a class="collapse-item" href="DatosSocioEconomicos">
                  Datos SocioEconomicos
                </a>
                <a class="collapse-item" href="FactorPsicosocial">
                  Factor Psicosocial
                </a>
                <a class="collapse-item" href="CalificacionRiesgo">
                  Calificación Riesgo
                </a>
                <a class="collapse-item" href="EstadoExpediente">
                  Estado del Expediente
                </a>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseEntrada"
              aria-expanded="true"
              aria-controls="collapseEntrada"
            >
              <i class="fas fa-fw fa-clipboard-list"></i>
              <span>Perfil de Entrada</span>
            </a>
            <div
              id="collapseEntrada"
              class="collapse"
              aria-labelledby="headingEntrada"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <a class="collapse-item" href="/PerfilEntrada">
                  Perfil de Entrada
                </a>
                <a class="collapse-item" href="/EditarPerfilEntrada">
                  Editar Perfil de Entrada
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseSalida"
              aria-expanded="true"
              aria-controls="collapseSalida"
            >
              <i class="fas fa-fw fa-clipboard-list"></i>
              <span>Perfil de Salida</span>
            </a>
            <div
              id="collapseSalida"
              class="collapse"
              aria-labelledby="headingSalida"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <a class="collapse-item" href="/PerfilSalida">
                  Perfil de Salida
                </a>
                <a class="collapse-item" href="/EditarPerfilSalida">
                  Editar Perfil de Salida
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseEncuesta"
              aria-expanded="true"
              aria-controls="collapseEncuesta"
            >
              <i class="fas fa-fw fa-clipboard-list"></i>
              <span>Grado de Satisfacción</span>
            </a>
            <div
              id="collapseEncuesta"
              class="collapse"
              aria-labelledby="headingEncuesta"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <a class="collapse-item" href="/EncuestaSatisfaccion">
                  Encuesta de Satisfacción
                </a>
                <a class="collapse-item" href="/Encuestas">
                  Agregar Encuesta
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseReportes"
              aria-expanded="true"
              aria-controls="collapseReportes"
            >
              <i class="fas fa-fw fa-chart-area"></i>
              <span>Consulta de Estado</span>
            </a>
            <div
              id="collapseReportes"
              class="collapse"
              aria-labelledby="headingInventario"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <a class="collapse-item" href="ReporteExpediente">
                  Datos Expedientes
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseAcciones"
              aria-expanded="true"
              aria-controls="collapseAcciones"
            >
              <i class="fas fa-fw fa-chart-area"></i>
              <span>Consulta de Bitácora</span>
            </a>
            <div
              id="collapseAcciones"
              class="collapse"
              aria-labelledby="headingAcciones"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <a class="collapse-item" href="Acciones">
                  Reporte de Acciones
                </a>
              </div>
            </div>
          </li>

          <hr class="sidebar-divider" />
          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                class="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i class="fa fa-bars"></i>
              </button>

              <ul class="navbar-nav ml-auto">
                <div class="topbar-divider d-none d-sm-block"></div>

                <li class="nav-item dropdown no-arrow">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                      Nataly
                    </span>
                    <img
                      class="img-profile rounded-circle"
                      src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=300"
                    />
                  </a>

                  <div
                    class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a class="dropdown-item" href="Perfil">
                      <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Perfil
                    </a>
                    <div class="dropdown-divider"></div>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Salir
                    </a>
                  </div>
                </li>
              </ul>
            </nav>

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
                                href="EditarUsuarioLogUsuarioLog"
                                class="btn btn-primary btn-sm"
                              >
                                <i class="fas fa-pencil-alt"></i>
                              </a>
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

          <footer class="sticky-footer bg-white">
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright &copy; Fundamentes</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
}
