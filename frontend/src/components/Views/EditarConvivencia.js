import React from 'react';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
export default function EditarConvivencia() {
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
                      Editar Convivencia
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="form-group col-sm-6">
                            <label for="txtMadre">Madre</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtMadre"
                              name="txtMadre"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtPadre">Padre</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtPadre"
                              name="txtPadre"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtHermanos">Hermanos</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtHermanos"
                              name="txtHermanos"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtCantidadHermanos">
                              Cantidad de Hermanos
                            </label>
                            <input
                              type="number"
                              class="form-control form-control-sm input-validar"
                              id="txtCantidadHermanos"
                              name="txtCantidadHermanos"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtOtraPersona">Otra Persona</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtOtraPersona"
                              name="txtOtraPersona"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtPersona">Persona</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtPersona"
                              name="txtPersona"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      class="btn btn-success btn-sm"
                      type="button"
                      id="btnGuardarCambios"
                    >
                      Guardar Cambios
                    </button>
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
