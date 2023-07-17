import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Cookies from 'js-cookie';

export default function PerfilEntrada() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const fetchData = async () => {
      const response = await axios(
        'https://fundamentes-dev-bf6998eb4614.herokuapp.com/entrevistasEntrada/',
        {
          headers: headers,
        }
      );
      console.log(response.data.data.data);
      setData(response.data.data.data);
    };
    fetchData();
  }, []);

  const getListPerfiles = () => {
    return data.map((item) => (
      <tr>
        <td>
          {item.doctor.nombre} {item.doctor.primerApe} {item.doctor.segundoApe}
        </td>
        <td>
          {item.aspectoComunitario.altaVulnerabilidadViolencia ? 'Si' : 'No'}
        </td>
        <td>{item.aspectoComunitario.puntajeAltaVulnerabilidadViolencia}</td>
        <td>
          {item.aspectoComunitario.observacionesAltaVulnerabilidadViolencia}
        </td>
        <td>{item.aspectoComunitario.reflexionEntorno ? 'Si' : 'No'}</td>
        <td>{item.aspectoComunitario.puntajeReflexionEntorno}</td>
        <td>
          {item.aspectoComunitario.ObservarcionesReflexionEntorno ? 'Si' : 'No'}
        </td>
        <td>{item.aspectoComunitario.formasRelacionarse ? 'Si' : 'No'}</td>
        <td>{item.aspectoComunitario.puntajeFormasRelacionarse}</td>
        <td>{item.aspectoComunitario.observacionesFormasRelacionarse}</td>
        <td>{item.aspectoComunitario.cuestionamientoNormas ? 'Si' : 'No'}</td>
        <td>{item.aspectoComunitario.puntajeCuestionamientoNormas}</td>
        <td>{item.aspectoComunitario.observacionesCuestionamientoNormas}</td>
        <td>{item.aspectoComunitario.puntajeTotal}</td>
        <td>{item.aspectoComunitario.prioridad}</td>
        <td>{item.aspectoClinico.ideacionAutolesiones ? 'Si' : 'No'}</td>
        <td>{item.aspectoClinico.puntajeIdeacion}</td>
        <td>{item.aspectoClinico.observacionIdeacion}</td>
        <td>{item.aspectoClinico.personaSignificativa ? 'Si' : 'No'}</td>
        <td>{item.aspectoClinico.puntajePersonaSignificativa}</td>
        <td>{item.aspectoClinico.observacionesPersonaSignificativa}</td>
        <td>{item.aspectoClinico.violenciaIntrafamiliar}</td>
        <td>
          {item.aspectoClinico.puntajeViolenciaIntrafalimiar ? 'Si' : 'No'}
        </td>
        <td>{item.aspectoClinico.violenciaSexual ? 'Si' : 'No'}</td>
        <td>{item.aspectoClinico.puntajeViolenciaSexual}</td>
        <td>{item.aspectoClinico.observacionesViolenciaSexual}</td>
        <td>{item.aspectoClinico.violenciaPsicologica ? 'Si' : 'No'}</td>
        <td>{item.aspectoClinico.puntajeViolenciaPsicologica}</td>
        <td>{item.aspectoClinico.observacionesViolenciaPsicologica}</td>
        <td>{item.aspectoClinico.violenciaFisicaFamiliar ? 'Si' : 'No'}</td>
        <td>{item.aspectoClinico.puntajeViolenciaFisicaFamiliar}</td>
        <td>{item.aspectoClinico.observacionesViolenciaFisicaFamiliar}</td>
        <td>{item.aspectoClinico.personasPrivadasLibertad ? 'Si' : 'No'}</td>
        <td>{item.aspectoClinico.puntajePersonasPrivadasLibertad}</td>
        <td>{item.aspectoClinico.observacionesPersonasPrivadasLibertad}</td>
        <td>{item.aspectoClinico.consumoDrogasFamilia ? 'Si' : 'No'}</td>
        <td>{item.aspectoClinico.puntajeConsumoDrogasFamilia}</td>
        <td>{item.aspectoClinico.observacionesConsumoDrogasFamilia}</td>
        <td>{item.aspectoClinico.abandonoFamiliar ? 'Si' : 'No'}</td>
        <td>{item.aspectoClinico.puntajeAbandonoFamiliar}</td>
        <td>{item.aspectoClinico.observacionesAbandonoFamiliar}</td>
        <td>{item.aspectoClinico.relacionEmocionesCuerpo ? 'Si' : 'No'}</td>
        <td>{item.aspectoClinico.puntajeRelacionEmocionesCuerpo}</td>
        <td>{item.aspectoClinico.observacionesRelacionEmocionesCuerpo}</td>
        <td>{item.aspectoClinico.responsabilidadCuidadores ? 'Si' : 'No'}</td>
        <td>
          {
            item.aspectoClinico
              .puntajeResponsabilidadCuidadoresobservacionesResponsabilidadCuidadores
          }
        </td>
        <td>{item.aspectoClinico.observacionesResponsabilidadCuidadores}</td>
        <td>{item.aspectoClinico.puntajeTotal}</td>
        <td>{item.aspectoClinico.prioridad}</td>

        <td>
          <a href="EditarPerfilEntrada" class="btn btn-primary btn-sm">
            <i class="fas fa-pencil-alt"></i>
          </a>
          &nbsp;
          <a
            href="EditarPerfilEntrada"
            class="btn btn-danger btn-sm"
            data-toggle="modal"
            data-target="#perfilModal"
          >
            <i class="fas fa-trash-alt"></i>
          </a>
        </td>
      </tr>
    ));
  };
  return (
    <div id="wrapper">
      <SideMenu />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div class="container-fluid">
            <div class="card shadow mb-4">
              <div class="card-header py-3 bg-second-primary">
                <h6 class="m-0 font-weight-bold text-white">
                  Lista de Perfiles de Entrada
                </h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <button
                      class="btn btn-success"
                      data-toggle="modal"
                      data-target="#modalData"
                    >
                      <i class="fas fa-user-plus"></i> Nuevo Perfil de Entrada
                    </button>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-12">
                    <table
                      class="table table-bordered"
                      id="tbdata"
                      cellspacing="0"
                      style={{ width: '100%' }}
                    >
                      <thead>
                        <tr>
                          <th>Doctor</th>
                          <th>Aspectos Comunitarios</th>
                          <th>Puntaje vulnerabilidad a violencia </th>
                          <th>Observaciones vulnerabilidad a violencia</th>
                          <th>Reflexión sobre el entorno</th>
                          <th>Puntaje reflexión sobre el entorno</th>
                          <th>Observaciones reflexión sobre el entorno</th>
                          <th>Formas de relacionarse</th>
                          <th>Puntaje formas de relacionarse</th>
                          <th>Observaciones formas de relacionarse</th>
                          <th>Cuestionamiento de normas</th>
                          <th>Puntaje cuestionamiento de normas</th>
                          <th>Observaciones cuestionamiento de normas</th>
                          <th>Puntaje total A. Clinico</th>
                          <th>Prioridad A. Clinico</th>
                          <th>ideacionAutolesiones</th>
                          <th>puntajeIdeacion</th>
                          <th>observacionesIdeacion</th>
                          <th>personaSignificativa</th>
                          <th>puntajePersonaSignificativa</th>
                          <th>observacionesPersonaSignificativa</th>
                          <th>violenciaIntrafamiliar</th>
                          <th>puntajeViolenciaIntrafamiliar</th>
                          <th>observacionesViolenciaIntrafamiliar</th>
                          <th>violenciaSexual</th>
                          <th>puntajeViolenciaSexual</th>
                          <th>observacionesViolenciaSexual</th>
                          <th>violenciaPsicologica</th>
                          <th>puntajeViolenciaPsicologica</th>
                          <th>observacionesViolenciaPsicologica</th>
                          <th>violenciaFisicaFamiliar</th>
                          <th>puntajeViolenciaFisicaFamiliar</th>
                          <th>observacionesViolenciaFisicaFamiliar</th>
                          <th>personasPrivadasLibertad</th>
                          <th>puntajePersonasPrivadasLibertad</th>
                          <th>observacionesPersonasPrivadasLibertad</th>
                          <th>consumoDrogasFamilia</th>
                          <th>puntajeConsumoDrogasFamilia</th>
                          <th>observacionesConsumoDrogasFamilia</th>
                          <th>abandonoFamiliar</th>
                          <th>puntajeAbandonoFamiliar</th>
                          <th>observacionesAbandonoFamiliar</th>
                          <th>relacionEmocionesCuerpo</th>
                          <th>observacionesRelacionEmocionesCuerpo</th>
                          <th>responsabilidadCuidadores</th>
                          <th>puntajeResponsabilidadCuidadores</th>
                          <th>observacionesResponsabilidadCuidadores</th>
                          <th>puntajeTotal</th>
                          <th>Prioridad</th>
                          <th>Aspectos Psicoeducativos</th>
                          <th property="Acciones">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>{getListPerfiles()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="perfilModal"
              tabindex="-1"
              aria-labelledby="perfilModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title"
                      id="perfilModalLabel"
                      data-dismiss="modal"
                    >
                      Eliminar
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>¿Seguro que desea eliminar el contenido?</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="modalData"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
              data-backdrop="static"
            >
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h6>Añadir Perfil de Entrada</h6>
                    <button
                      class="close"
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <input type="hidden" value="0" id="txtId" />
                      <div class="row">
                        <div class="col-sm-8">
                          <div class="form-row">
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
                              <label for="txtIdUsuario">
                                Nombre de Usuario
                              </label>
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
                                <option value="0">
                                  Seleccione una opción:
                                </option>
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
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      class="btn btn-danger btn-sm"
                      type="button"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      class="btn btn-primary btn-sm"
                      type="button"
                      id="btnGuardar"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
