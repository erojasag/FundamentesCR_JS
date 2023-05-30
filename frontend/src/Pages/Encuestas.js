import React from 'react'
import "./Style.css"


export default function Encuestas() {
    return (
        <div id="wrapper">

            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                    <div class="sidebar-brand-icon">
                        <img src="Assets/img/Logo.png" alt="" style={{ width: '80px', height: '90px', float: 'left' }} />
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

                    <div class="container-fluid">
                        <div class="container">
                            <section class="row">
                                <div class="col-md-12">
                                    <h1 class="text-center">Formulario de Encuesta de Satisfacción</h1>
                                    <p class="text-center">Fundación Fundamentes</p>
                                </div>
                            </section>
                            <br />
                            <section class="row">
                                <section class="col-md-12">
                                    <h3>Datos básicos</h3>
                                    <p></p>
                                </section>
                            </section>
                            <section class="row">
                                <section class="col-md-12">
                                    <section class="row">
                                        <div class="col-md-8">
                                            <div class="form-group">
                                                <label for="nombreCompleto">Nombre Completo:</label>
                                                <input type="text" class="form-control" id="nombreCompleto" maxlength="128"
                                                    placeholder="Nombre Completo" required />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form_group">
                                                <label for="edadEncuestado">Edad:</label>
                                                <input type="number" class="form-control" id="edadEncuestado"
                                                    placeholder="Edad" maxlength="3" required />
                                            </div>
                                        </div>
                                    </section>
                                    <section class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="idIdentificacion">Identificación:</label>
                                                <input type="number" id="idIdentificacion" class="form-control"
                                                    placeholder="Numero de Identificación" maxlength="15" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="telefono">Teléfono:</label>
                                            <input type="text" class="form-control" id="telefono"
                                                placeholder="Número Telefónico" maxlength="12" required />
                                        </div>
                                    </section>
                                </section>
                            </section>
                            <hr />
                            <br />

                            <section class="row">
                                <div class="col-md-12">
                                    <h3>Satisfacción</h3>
                                    <p></p>
                                </div>
                            </section>


                            <section class="row">
                                <div class="col-md-12">
                                    <section class="row">
                                        <div class="col-md-8">
                                            <p>¿Cómo calificaría su experiencia respecto a los servicios que ha recibido a
                                                través de la fundación?</p>
                                        </div>
                                    </section>

                                    <div class="wrapper">
                                        <div class="encuesta">
                                            <form>
                                                <div class="rating">
                                                    <input type="radio" id="rating5" name="calificacion" value="5" />
                                                    <label for="rating5" title="Muy Malo" class="fa-regular fa-face-frown fa-3x" style={{ color: 'red' }}></label>
                                                    <input type="radio" id="rating4" name="calificacion" value="4" />
                                                    <label for="rating4" title="Malo" class="fa-regular fa-face-frown-open fa-3x" style={{ color: ' orange' }}></label>
                                                    <input type="radio" id="rating3" name="calificacion" value="3" />
                                                    <label for="rating3" title="Regular" class="fa-regular fa-face-meh fa-3x" style={{ color: 'rgb(226, 226, 20)' }}></label>
                                                    <input type="radio" id="rating2" name="calificacion" value="2" />
                                                    <label for="rating2" title="Bueno" class="fa-sharp fa-regular fa-face-smile fa-3x" style={{ color: 'limegreen' }}></label>
                                                    <input type="radio" id="rating1" name="calificacion" value="1" />
                                                    <label for="rating1" title="Muy Bueno" class="fa-regular fa-face-laugh-beam fa-3x" style={{ color: 'green' }}></label>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <br />

                            <section class="row">
                                <div class="col-md-12">
                                    <section class="row">
                                        <div class="col-md-8">
                                            <p>¿Recomendaria a sus familiares y amigos esta fundación?</p>
                                        </div>
                                        <div class="col-md-4">
                                            <select class="form-control" id="pregunta14">
                                                <option value="0">Seleccione una opción:</option>
                                                <option value="1">Sí</option>
                                                <option value="2">No</option>
                                            </select>
                                        </div>
                                    </section>
                                </div>
                            </section><br />
                            <hr />


                            <section class="row">
                                <div class="col-md-12">
                                    <h3>Comentarios</h3>
                                    <p></p>
                                </div>
                            </section>
                            <section class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="comment">Agregue sus opiniones:</label>
                                        <textarea class="form-control" rows="6" id="comentarios"></textarea>
                                    </div>
                                </div>
                            </section>
                            <section class="row">
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-info" id="saveForm" onclick="saveForm">Guardar
                                        Encuesta</button>
                                    <br />
                                    <br />
                                    <button type="button" class="btn btn-danger" id="clearForm">Limpiar formulario</button>
                                </div>
                            </section>
                        </div>

                        <br /><br />

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
    )
}

