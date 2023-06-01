import React from 'react';
import SideMenu from '../utils/sideMenu';
import Navbar from '../utils/navbar';
import Footer from '../utils/footer';
export default function EditarDatosExpediente() {
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
                            <label for="txtFecha">Fecha de la Entrevista</label>
                            <input
                              type="date"
                              class="form-control form-control-sm input-validar"
                              id="txtFecha"
                              name="txtFecha"
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
                          <div class="form-group col-sm-12">
                            <label for="txtEstado">Estado del Expediente</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtEstado"
                              name="txtEstado"
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
