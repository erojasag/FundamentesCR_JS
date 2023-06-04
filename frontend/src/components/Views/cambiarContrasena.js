import React from 'react';
import SideMenu from '../layouts/sideMenu';
import Footer from '../layouts/footer';
export default function CambiarContrasena() {
  return (
    <React.Fragment>
      <div id="page-top">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <div class="col-sm-6">
                <div class="card shadow mb-4">
                  <div class="card-header py-3 bg-second-primary">
                    <h6 class="m-0 font-weight-bold text-white">
                      <i class="fas fa-key"></i> Cambiar Contraseña
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="form-row">
                      <div class="form-group col-sm-10">
                        <label for="txtClaveActual">Contraseña Actual</label>
                        <input
                          type="password"
                          class="form-control form-control-sm input-validar"
                          id="txtClaveActual"
                          name="Clave Actual"
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-sm-10">
                        <label for="txtClaveNueva">Nueva Contraseña</label>
                        <input
                          type="password"
                          class="form-control form-control-sm input-validar"
                          id="txtClaveNueva"
                          name="Clave Nueva"
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-sm-10">
                        <label for="txtConfirmarClave">
                          Confirmar Contraseña
                        </label>
                        <input
                          type="password"
                          class="form-control form-control-sm input-validar"
                          id="txtConfirmarClave"
                          name="Confirmar Clave"
                        />
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-10">
                        <button
                          type="button"
                          class="btn btn-success btn-sm btn-block"
                          id="btnCambiarClave"
                        >
                          Guardar Cambios
                        </button>
                      </div>
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
