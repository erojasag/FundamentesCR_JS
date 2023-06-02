import React from 'react';
import SideMenu from '../utils/sideMenu';
import Navbar from '../utils/navbar';
export default function EditarFactor() {
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
                      Editar Factor Psicosocial
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="form-group col-sm-6">
                            <label for="txtComuniVulnerable">
                              Comunidad Vulnerable
                            </label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtComuniVulnerable"
                              name="txtComuniVulnerable"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtExclusionEscolar">
                              Exclusion Escolar
                            </label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtExclusionEscolar"
                              name="txtExclusionEscolar"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtRiesgoSuicida">Riesgo Suicida</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtRiesgoSuicida"
                              name="txtRiesgoSuicida"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtViolenciaIntrafamiliar">
                              Violencia Intrafamiliar
                            </label>
                            <input
                              type="number"
                              class="form-control form-control-sm input-validar"
                              id="txtViolenciaIntrafamiliar"
                              name="txtViolenciaIntrafamiliar"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtFamiliarPrivLibertad">
                              Familiar Privado de Libertad
                            </label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtFamiliarPrivLibertad"
                              name="txtFamiliarPrivLibertad"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtConsumoVentaDroga">
                              Consumo/Venta Droga
                            </label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtConsumoVentaDroga"
                              name="txtConsumoVentaDroga"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtAbandono">Abandono</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtAbandono"
                              name="txtAbandono"
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtOtroCriterio">Otro Criterio</label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="txtOtroCriterio"
                              name="txtFamiliarPrivLibertad"
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
  );
}
