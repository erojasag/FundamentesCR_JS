import React from 'react';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
export default function EditarParentezco() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideMenu />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <form>
              <div class="container-fluid">
                <div class="card shadow mb-4">
                  <div class="card-header py-3 bg-second-primary">
                    <h6 class="m-0 font-weight-bold text-white">
                      Datos del Negocio
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-12">
                        <form>
                          <div class="row">
                            <div class="form-group col-sm-6">
                              <label for="txtNombre">Nombre Completo</label>
                              <input
                                type="text"
                                class="form-control form-control-sm input-validar"
                                id="txtNombre"
                                name="Nombre"
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtCorreo">Padre</label>
                              <input
                                type="email"
                                class="form-control form-control-sm input-validar"
                                id="Sexo"
                                name="Sexo"
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtCorreo">Nacionalidad</label>
                              <input
                                type="email"
                                class="form-control form-control-sm input-validar"
                                id="PoblacionPoblacion"
                                name="Poblacion"
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtCorreo">Cedula</label>
                              <input
                                type="email"
                                class="form-control form-control-sm input-validar"
                                id="Nacionalidad"
                                name="Nacionalidad"
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtCorreo">Telefono</label>
                              <input
                                type="email"
                                class="form-control form-control-sm input-validar"
                                id="Cedula"
                                name="Cedula"
                              />
                            </div>
                          </div>
                          <button
                            class="btn btn-success btn-sm"
                            type="button"
                            id="btnGuardarCambios"
                          >
                            Guardar Cambios
                          </button>
                          &nbsp; &nbsp;
                          <a
                            class="btn btn-danger btn-sm"
                            type="button"
                            id="btnGuardarCambios"
                            href="/PersonaResponsable"
                          >
                            Cancelar
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
