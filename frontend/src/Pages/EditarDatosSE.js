import React from 'react'
export default function EditarDatosSE() {
    return (
        <React.Fragment>
            <div id="wrapper">

                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div class="sidebar-brand-icon">
                            <img src="assets/img/Logo.png" alt="" style={{ width: '80px', height: '90px', float: 'left' }} />
                        </div>
                        <div class="sidebar-brand-text mx-0">Fundamentes</div>
                    </a>

                    <hr class="sidebar-divider my-0" />
                    <li class="nav-item">
                        <a class="nav-link" href="Inicio">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAdministracion"
                            aria-expanded="true" aria-controls="collapseAdministracion">
                            <i class="fas fa-fw fa-cog"></i>
                            <span>Usuario Login</span>
                        </a>
                        <div id="collapseAdministracion" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="UsuarioLog">Usuarios</a>
                                <a class="collapse-item" href="EditarUsuarioLog">Editar Usuario</a>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseExpediente"
                            aria-expanded="true" aria-controls="collapseExpediente">
                            <i class="fas fa-fw fa-clipboard-list"></i>
                            <span>Paciente</span>
                        </a>
                        <div id="collapseExpediente" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="/Pascientes">Paciente</a>
                                <a class="collapse-item" href="/EditarPasciente">Editar Paciente</a>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseInventario"
                            aria-expanded="true" aria-controls="collapseInventario">
                            <i class="fas fa-fw fa-clipboard-list"></i>
                            <span>Expedientes</span>
                        </a>
                        <div id="collapseInventario" class="collapse" aria-labelledby="headingInventario" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="DatosExpediente">Datos de Expedientes</a>
                                <a class="collapse-item" href="Pascientes">Datos de Pacientes</a>
                                <a class="collapse-item" href="PersonaResponsable">Persona Responsable</a>
                                <a class="collapse-item" href="Convivencia">Convivencia</a>
                                <a class="collapse-item" href="DatosSocioEconomicos">Datos SocioEconomicos</a>
                                <a class="collapse-item" href="FactorPsicosocial">Factor Psicosocial</a>
                                <a class="collapse-item" href="CalificacionRiesgo">Calificación Riesgo</a>
                                <a class="collapse-item" href="EstadoExpediente">Estado del Expediente</a>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseEntrada"
                            aria-expanded="true" aria-controls="collapseEntrada">
                            <i class="fas fa-fw fa-clipboard-list"></i>
                            <span>Perfil de Entrada</span>
                        </a>
                        <div id="collapseEntrada" class="collapse" aria-labelledby="headingEntrada"
                            data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="/PerfilEntrada">Perfil de Entrada</a>
                                <a class="collapse-item" href="/EditarPerfilEntrada">Editar Perfil de Entrada</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSalida"
                            aria-expanded="true" aria-controls="collapseSalida">
                            <i class="fas fa-fw fa-clipboard-list"></i>
                            <span>Perfil de Salida</span>
                        </a>
                        <div id="collapseSalida" class="collapse" aria-labelledby="headingSalida"
                            data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="/PerfilSalida">Perfil de Salida</a>
                                <a class="collapse-item" href="/EditarPerfilSalida">Editar Perfil de Salida</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseEncuesta"
                            aria-expanded="true" aria-controls="collapseEncuesta">
                            <i class="fas fa-fw fa-clipboard-list"></i>
                            <span>Grado de Satisfacción</span>
                        </a>
                        <div id="collapseEncuesta" class="collapse" aria-labelledby="headingEncuesta"
                            data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="/EncuestaSatisfaccion">Encuesta de Satisfacción</a>
                                <a class="collapse-item" href="/Encuestas">Agregar Encuesta</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseReportes"
                            aria-expanded="true" aria-controls="collapseReportes">
                            <i class="fas fa-fw fa-chart-area"></i>
                            <span>Consulta de Estado</span>
                        </a>
                        <div id="collapseReportes" class="collapse" aria-labelledby="headingInventario" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="ReporteExpediente">Datos Expedientes</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAcciones"
                            aria-expanded="true" aria-controls="collapseAcciones">
                            <i class="fas fa-fw fa-chart-area"></i>
                            <span>Consulta de Bitácora</span>
                        </a>
                        <div id="collapseAcciones" class="collapse" aria-labelledby="headingAcciones" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="Acciones">Reporte de Acciones</a>
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

                            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>

                            <ul class="navbar-nav ml-auto">

                                <div class="topbar-divider d-none d-sm-block"></div>

                                <li class="nav-item dropdown no-arrow">
                                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                        <img class="img-profile rounded-circle"
                                            src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=300" />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a class="dropdown-item" href="Perfil">
                                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Perfil
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Salir
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <form>
                            <div class="container-fluid">
                                <div class="card shadow mb-4">
                                    <div class="card-header py-3 bg-second-primary">
                                        <h6 class="m-0 font-weight-bold text-white">Editar DatosSocioEconomicos</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="form-group col-sm-6">
                                                        <label for="txtComparteCuarto">Comparte Cuarto</label>
                                                        <input type="text" class="form-control form-control-sm input-validar"
                                                            id="txtComparteCuarto" name="txtComparteCuarto" />
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label for="txtAccesoInternet">Acceso Internet</label>
                                                        <input type="text" class="form-control form-control-sm input-validar"
                                                            id="txtAccesoInternet" name="txtAccesoInternet" />
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label for="txtPersona">Persona</label>
                                                        <input type="text" class="form-control form-control-sm input-validar"
                                                            id="txtPersona" name="txtPersona" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="btn btn-success btn-sm" type="button" id="btnGuardarCambios">Guardar
                                            Cambios</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <footer class="sticky-footer bg-white">
                            <div class="container my-auto">
                                <div class="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2021</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}