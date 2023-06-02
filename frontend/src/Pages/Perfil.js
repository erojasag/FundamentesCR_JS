import React from 'react';
import SideMenu from '../utils/sideMenu';
import Navbar from '../utils/navbar';
import Footer from '../utils/footer';
export default function Perfil() {
  return (
    <React.Fragment>
      <div id="page-top">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Navbar />
              <form>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="card shadow mb-4">
                        <div class="card-header py-3 bg-second-primary">
                          <h6 class="m-0 font-weight-bold text-white">
                            <i class="fas fa-user"></i> Mis Datos
                          </h6>
                        </div>
                        <div
                          class="card-body"
                          style={{
                            textAlign: 'center',
                            alignItems: 'center !important',
                          }}
                        >
                          <div class="form-row">
                            <div class="form-group col-sm-10">
                              <img
                                id="imgFoto"
                                src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=300"
                                class="rounded mx-auto d-block"
                                style={{ width: '200px', height: '200px' }}
                                alt="Profile"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-sm-10">
                              <label for="txtNombre">Nombre</label>
                              <input
                                type="text"
                                class="form-control form-control-sm"
                                disabled
                                id="txtNombre"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-sm-10">
                              <label for="txtCorreo">Correo</label>
                              <input
                                type="email"
                                class="form-control form-control-sm"
                                id="txtCorreo"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-sm-10">
                              <label for="txTelefono">Telefono</label>
                              <input
                                type="text"
                                class="form-control form-control-sm"
                                id="txTelefono"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-sm-10">
                              <label for="txtRol">Rol</label>
                              <input
                                type="text"
                                class="form-control form-control-sm"
                                disabled
                                id="txtRol"
                              />
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-10">
                              <a
                                type="button"
                                class="btn btn-danger btn-sm btn-block"
                                href="/CambiarContrasena"
                              >
                                Cambiar Contraseña
                              </a>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              <button
                                type="button"
                                class="btn btn-success btn-sm btn-block "
                                id="btnGuardarCambios"
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
              </form>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
