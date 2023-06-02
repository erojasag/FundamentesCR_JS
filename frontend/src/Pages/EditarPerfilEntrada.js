import React from 'react';
import SideMenu from '../utils/sideMenu';
import Navbar from '../utils/navbar';
import Footer from '../utils/footer';

export default function EditarPefilEntrada() {
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
                    Editar Perfil de Entrada
                  </h6>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <form>
                        <div class="row">
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
                            <label for="txtApellido1">Primer Apellido</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtApellido1"
                              name="txtApellido1"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtApellido2">Segundo Apellido</label>
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
                            <label for="txtFechaIngreso">
                              Fecha de Ingreso
                            </label>
                            <input
                              type="date"
                              class="form-control form-control-sm input-validar"
                              id="txtFechaIngreso"
                              name="txtFechaIngreso"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtIdUsuario">Nombre de Usuario</label>
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
                              <option value="0">Seleccione una opción:</option>
                              <option value="1">CASA WOLABA YOUTH</option>
                              <option value="2">CASA IRIRIA DITSÖ JÚ</option>
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
                              <option value="9">CASA CAMILLE CLAUDEL</option>
                              <option value="10">CASA SAINT-EXUPÉRY</option>
                            </select>
                          </div>
                        </div>
                        <button
                          class="btn btn-success btn-sm"
                          type="button"
                          id="btnGuardarCambios"
                        >
                          Guardar Cambios
                        </button>
                        &nbsp;
                        <a
                          class="btn btn-danger btn-sm"
                          type="button"
                          id="btnGuardarCambios"
                          href="/perfilEntrada"
                        >
                          Volver
                        </a>
                      </form>
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
