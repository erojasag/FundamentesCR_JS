import React from 'react';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
export default function EditarUsuarioLog() {
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
                    Editar usuario
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
                            <label for="Apellidos">Apellidos</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="Apellidos"
                              name="Apellidos"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="Cedula">Cédula</label>
                            <input
                              type="number"
                              class="form-control form-control-sm input-validar"
                              id="Cedula"
                              name="Cedula"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="Correo">Correo</label>
                            <input
                              type="email"
                              class="form-control form-control-sm input-validar"
                              id="Correo"
                              name="Correo"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="Contraseña">Contraseña</label>
                            <input
                              type="password"
                              class="form-control form-control-sm input-validar"
                              id="Contraseña"
                              name="Contraseña"
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
                          href="/ListaUsuarios"
                        >
                          Cancelar
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
