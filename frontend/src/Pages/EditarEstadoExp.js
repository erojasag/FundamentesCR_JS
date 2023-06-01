import React from 'react';
import SideMenu from '../utils/sideMenu';
import Navbar from '../utils/navbar';
import Footer from '../utils/footer';
export default function EditarEstadoExp() {
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
                      Editar Estado de Expediente
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="form-group col-sm-6">
                            <label for="txtConstNacimiento">
                              Constancia de Nacimiento
                            </label>
                            <input
                              type="file"
                              class="form-control form-control-sm input-validar"
                              id="txtConstNacimiento"
                              name="txtConstNacimiento"
                              alt="Constancia de Nacimiento"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtConsentiInformado">
                              Consentimiento Informado
                            </label>
                            <input
                              type="file"
                              class="form-control form-control-sm input-validar"
                              id="txtConsentiInformado"
                              name="txtConsentiInformado"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtPermiso">Permiso Transporte</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtPermiso"
                              name="txtPermiso"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtFotografia">Fotografia</label>
                            <input
                              type="imege"
                              class="form-control form-control-sm input-validar"
                              id="txtFotografia"
                              name="txtFotografia"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtVideo">Video</label>
                            <input
                              type="file"
                              class="form-control form-control-sm input-validar"
                              id="txtVideo"
                              name="txtVideo"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtUsoImgParaRedes">
                              Uso de Imagenes Para Redes
                            </label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtUsoImgParaRedes"
                              name="txtUsoImgParaRedes"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtGrabaVozTaller">
                              Grabación de Voz en Taller
                            </label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtGrabaVozTaller"
                              name="txtGrabaVozTaller"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtGrabaVozClini">
                              Grabación de Voz en Clinica
                            </label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtGrabaVozClini"
                              name="txtGrabaVozClini"
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
                          <div class="form-group col-sm-6">
                            <label for="txtEstado">Estado</label>
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
