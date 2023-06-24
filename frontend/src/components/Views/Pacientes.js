import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import SideMenu from '../layouts/sideMenu';

import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';

export default function Pacientes() {
  const [data, setData] = useState([]);
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [contacto, setContacto] = useState('');
  const [cedula, setCedula] = useState('');
  const [edad, setEdad] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [distritoResidencia, setDistritoResidencia] = useState('');
  const [direccion, setDireccion] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [genero, setGenero] = useState('');

  const handleNameChange = (event) => {
    setNombreCompleto(event.currentTarget.value);
  };
  const handleFechaNacimientoChange = (event) => {
    setFechaNacimiento(event.currentTarget.value);
  };
  const handleContactoChange = (event) => {
    setContacto(event.currentTarget.value);
  };
  const handleCedulaChange = (event) => {
    setCedula(event.currentTarget.value);
  };
  const handleEdadChange = (event) => {
    setEdad(event.currentTarget.value);
  };
  const handleNacionalidadChange = (event) => {
    setNacionalidad(event.currentTarget.value);
  };
  const handleDistritoResidenciaChange = (event) => {
    setDistritoResidencia(event.currentTarget.value);
  };
  const handleDireccionChange = (event) => {
    setDireccion(event.currentTarget.value);
  };

  const handleGeneroChange = (event) => {
    setGenero(event.currentTarget.value);
  };

  const deactivateUser = async (pacienteId) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };

    const response = await axios.delete(
      `http://localhost:3000/pacientes/${pacienteId}`,
      {
        headers,
      }
    );
    if (response.status === 204) {
      window.location.reload();
    }
  };
  const createPaciente = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };

    const body = {
      nombreCompleto,
      fechaNacimiento,
      contacto,
      cedula,
      edad,
      nacionalidad,
      distritoResidencia,
      direccion,
      genero,
    };

    const response = await axios.post('http://localhost:3000/pacientes/', body, {
      headers,
    });
    if (response.status === 201) {
      window.location.reload();
    }
  };

  const fetchData = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const response = await axios.get('http://localhost:3000/pacientes', {
      headers,
    });
    const data = response.data.data.data;
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getPacientes = () => {
    return data.map((paciente) => (
      <tr key={5}>
        <td>{paciente.nombreCompleto}</td>
        <td>{paciente.cedula}</td>
        <td>{paciente.direccion}</td>
        <td>{paciente.distritoResidencia}</td>
        <td>{paciente.contacto}</td>
        <td>{paciente.edad}</td>
        <td>{paciente.fechaNacimiento}</td>
        <td>Si</td>
        <td>{paciente.genero}</td>
        <td>{paciente.nacionalidad}</td>
        <td>
          <a
            href={`/Pacientes/EditarPaciente/${paciente.pacienteId}`}
            className="btn btn-primary btn-sm"
          >
            <i className="fas fa-pencil-alt"></i>
          </a>
          &nbsp; &nbsp;
          <a
            href="eliminarPaciente"
            className="btn btn-danger btn-sm"
            data-toggle="modal"
            data-target="#usuariosModal"
            onClick={() => setSelectedUserId(paciente.pacienteId)}
          >
            <i className="fas fa-trash-alt"></i>
          </a>
        </td>
      </tr>
    ));
  };
  return (
    <div id="wrapper">
      <SideMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <div className="card shadow mb-4">
              <div className="card-header py-3 bg-second-primary">
                <h6 className="m-0 font-weight-bold text-white">
                  Lista de Pacientes
                </h6>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <button
                      class="btn btn-success"
                      data-toggle="modal"
                      data-target="#modalData"
                    >
                      <i class="fas fa-user-plus"></i> Nuevo Paciente
                    </button>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      className="table table-bordered"
                      id="tbdata"
                      cellSpacing="0"
                      style={{ width: '100%' }}
                    >
                      <thead>
                        <tr key={6}>
                          <th>Nombre Completo</th>
                          <th>Cédula</th>
                          <th>Dirección</th>
                          <th>Distrito</th>
                          <th>Teléfono</th>
                          <th>Edad Actual</th>
                          <th>Fecha de Nacimiento</th>
                          <th>Migrante</th>
                          <th>Genero</th>
                          <th>Nacionalidad</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>{getPacientes()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="usuariosModal"
              tabIndex="-1"
              aria-labelledby="usuariosModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="usuariosModalLabel"
                      data-dismiss="modal"
                    >
                      Eliminar
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>¿Seguro que desea desactivar el paciente?</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-dismiss="modal"
                      onClick={() => deactivateUser(selectedUserId)}
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
                    <h6>Añadir Paciente</h6>
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
                              <label for="txtNombreCompleto">
                                Nombre Completo
                              </label>
                              <input
                                type="text"
                                class="form-control form-control-sm input-validar"
                                id="txtNombre"
                                name="nombreCompleto"
                                value={nombreCompleto}
                                onChange={handleNameChange}
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtFechaNacimiento">
                                Fecha De Nacimiento
                              </label>
                              <input
                                type="date"
                                class="form-control form-control-sm input-validar"
                                id="fechaNacimiento"
                                name="fechaNacimiento"
                                value={fechaNacimiento}
                                onChange={handleFechaNacimientoChange}
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtContacto">
                                Telefono de Contacto
                              </label>
                              <input
                                type="number"
                                class="form-control form-control-sm input-validar"
                                id="contacto"
                                name="contacto"
                                value={contacto}
                                onChange={handleContactoChange}
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtCedula">Cedula</label>
                              <input
                                type="number"
                                class="form-control form-control-sm input-validar"
                                id="cedula"
                                name="cedula"
                                value={cedula}
                                onChange={handleCedulaChange}
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtEdad">Edad</label>
                              <input
                                type="number"
                                class="form-control form-control-sm input-validar"
                                id="edad"
                                name="edad"
                                value={edad}
                                onChange={handleEdadChange}
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtNacionalidad">Nacionalidad</label>
                              <input
                                type="text"
                                class="form-control form-control-sm input-validar"
                                id="nacionalidad"
                                name="nacionalidad"
                                value={nacionalidad}
                                onChange={handleNacionalidadChange}
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtDistrito">Distrito</label>
                              <input
                                type="text"
                                class="form-control form-control-sm input-validar"
                                id="distritoResidencia"
                                name="distritoResidencia"
                                value={distritoResidencia}
                                onChange={handleDistritoResidenciaChange}
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtDireccion">Direccion</label>
                              <input
                                type="text"
                                class="form-control form-control-sm 
                                 input-validar"
                                id="direccion"
                                name="direccion"
                                value={direccion}
                                onChange={handleDireccionChange}
                              />
                            </div>
                            <div class="form-group col-sm-6">
                              <label for="txtGenero">Genero</label>
                              <select
                                class="custom-select"
                                id="genero"
                                name="genero"
                                value={genero}
                                onChange={handleGeneroChange}
                              >
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="No-Binario">No-Binario</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
                        onClick={createPaciente}
                      >
                        Guardar
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
  );
}
