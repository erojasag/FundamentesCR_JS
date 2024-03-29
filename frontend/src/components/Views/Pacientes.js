import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Cookies from 'js-cookie';
import SideMenu from '../layouts/sideMenu';
import Casa from '../layouts/casa';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import DatosMedicos from '../layouts/datosMedicos';
import CondicionLaboral from '../layouts/condicionLaboral';
import Sociodemograficos from '../layouts/sociodemograficos';
import Encargado from '../layouts/encargado';
import DinamicaFamiliar from '../layouts/dinamicaFamiliar';
import Escolaridad from '../layouts/escolaridad';
import Loading from '../layouts/loading';
import { Pagination } from 'react-bootstrap';
import PerfilEntrada from '../layouts/perfilEntrada';
import { ToastContainer, toast } from 'react-toastify';

export default function Pacientes() {
  const navigate = useNavigate();
  const [agregaPerfilEntrada, setAgregaPerfilEntrada] = useState(false);

  const [pacientesData, setPacientesData] = useState([]);

  const [newPacienteData, setNewPacienteData] = useState({});

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  //datos medicos
  const [datosMedicos, setDatosMedicos] = useState({});
  const [updatedDatosMedicos, setUpdatedDatosMedicos] = useState(null);

  //datos condicion laboral
  const [condicionLaboral, setCondicionLaboral] = useState('');
  const [updatedCondicionLaboral, setUpdatedCondicionLaboral] = useState(null);

  //datos sociodemograficos
  const [sociodemograficos, setSociodemograficos] = useState('');
  const [updatedSociodemograficos, setUpdatedSociodemograficos] =
    useState(null);

  //datos encargado
  const [encargado, setEncargado] = useState('');
  const [updatedEncargado, setUpdatedEncargado] = useState(null);

  //datos dinamica familiar
  const [dinamicaFamiliar, setDinamicaFamiliar] = useState('');
  const [updatedDinamicaFamiliar, setUpdatedDinamicaFamiliar] = useState(null);

  //datos escolaridad
  const [escolaridad, setEscolaridad] = useState('');
  const [updatedEscolaridad, setUpdatedEscolaridad] = useState(null);

  //datos perfilEntrada
  const [perfilEntrada, setPerfilEntrada] = useState('');
  const [updatedPerfilEntrada, setUpdatedPerfilEntrada] = useState(null);

  const handlePerfilEntradaChange = (updatedPerfilEntrada) => {
    setUpdatedPerfilEntrada(updatedPerfilEntrada);
  };

  const handleNameChange = (event) => {
    setNewPacienteData({
      ...newPacienteData,
      nombreCompleto: event.currentTarget.value,
    });
  };
  const handleFechaNacimientoChange = (event) => {
    setNewPacienteData({
      ...newPacienteData,
      fechaNacimiento: event.currentTarget.value,
    });
  };
  const handleContactoChange = (event) => {
    setNewPacienteData({
      ...newPacienteData,
      contacto: event.currentTarget.value,
    });
  };
  const handleCedulaChange = (event) => {
    setNewPacienteData({
      ...newPacienteData,
      cedula: event.currentTarget.value,
    });
  };
  const handleEdadChange = (event) => {
    setNewPacienteData({
      ...newPacienteData,
      edad: event.currentTarget.value,
    });
  };
  const handleNacionalidadChange = (event) => {
    setNewPacienteData({
      ...newPacienteData,
      nacionalidad: event.currentTarget.value,
    });
  };
  const handleDistritoResidenciaChange = (event) => {
    setNewPacienteData({
      ...newPacienteData,
      distritoResidencia: event.currentTarget.value,
    });
  };
  const handleDireccionChange = (event) => {
    setNewPacienteData({
      ...newPacienteData,
      direccion: event.currentTarget.value,
    });
  };

  const handleGeneroChange = (event) => {
    setNewPacienteData({
      ...newPacienteData,
      genero: event.currentTarget.value,
    });
  };
  const handleSetSelectedUserId = (event) => {
    setNewPacienteData({
      ...newPacienteData,
      selectedUserId: event.currentTarget.value,
    });
  };

  const handleCasaChange = (event) => {
    setNewPacienteData({
      ...newPacienteData,
      casaId: event.currentTarget.value,
    });
  };

  const fetchData = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}pacientes`,
        {
          headers,
        }
      );
      console.log(response);
      setPacientesData(response.data.data.data);
    } catch (err) {
      if (err.response.data.message === 'jwt expired') {
        toast.error('Su sesión ha expirado');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }
      if (err.status === 500) {
        toast.error('Su sesión ha expirado');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deactivateUser = async (pacienteId) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };

    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_API}pacientes/${pacienteId}`,
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

    if (updatedDatosMedicos !== null) {
      const responseDatosMedicos = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}datosMedicos/`,
        updatedDatosMedicos,
        {
          headers,
        }
      );

      if (responseDatosMedicos.status === 201) {
        newPacienteData.datosMedicosId =
          responseDatosMedicos.data.data.data.datosMedicosId;
      }
    }

    if (updatedCondicionLaboral !== null) {
      const responseCondicionLaboral = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}condicionesLaborales/`,
        updatedCondicionLaboral,
        {
          headers,
        }
      );
      if (responseCondicionLaboral.status === 201) {
        newPacienteData.condicionLaboralId =
          responseCondicionLaboral.data.data.data.condicionLaboralId;
      }
    }

    if (updatedSociodemograficos !== null) {
      const responseSociodemograficos = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}sociodemograficos/`,
        updatedSociodemograficos,
        {
          headers,
        }
      );

      if (responseSociodemograficos.status === 201) {
        newPacienteData.sociodemograficosId =
          responseSociodemograficos.data.data.data.sociodemograficosId;
      }
    }

    if (updatedEncargado !== null) {
      const responseEncargado = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}encargados/`,
        updatedEncargado,
        {
          headers,
        }
      );
      if (responseEncargado.status === 201) {
        newPacienteData.encargadoId =
          responseEncargado.data.data.data.encargadoId;
      }
    }

    if (updatedDinamicaFamiliar !== null) {
      const responseDinamicaFamiliar = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}dinamicasFamiliares/`,
        updatedDinamicaFamiliar,
        {
          headers,
        }
      );
      if (responseDinamicaFamiliar.status === 201) {
        newPacienteData.dinamicaFamiliarId =
          responseDinamicaFamiliar.data.data.data.dinamicaFamiliarId;
      }
    }

    if (updatedEscolaridad !== null) {
      const responseEscolaridad = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}escolaridades/`,
        updatedEscolaridad,
        {
          headers,
        }
      );
      if (responseEscolaridad.status === 201) {
        newPacienteData.escolaridadId =
          responseEscolaridad.data.data.data.escolaridadId;
      }
    }
    if (updatedPerfilEntrada !== null) {
      const responseAspectosClinicos = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}aspectosClinicos/`,
        updatedPerfilEntrada.aspectoClinico,
        { headers }
      );

      const responseAspectosComunitarios = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}aspectosComunitarios/`,
        updatedPerfilEntrada.aspectoComunitario,
        { headers }
      );
      const responseAspectosPsicoeducativos = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}aspectosPsicoeducativos/`,
        updatedPerfilEntrada.aspectoPsicoeducativo,
        { headers }
      );
      const responseAspectosDesarrolloTalleres = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}aspectosDesarrolloTaller/`,
        updatedPerfilEntrada.aspectoDesarrolloTalleres,
        { headers }
      );

      if (
        responseAspectosClinicos.status === 201 &&
        responseAspectosComunitarios.status === 201 &&
        responseAspectosPsicoeducativos.status === 201 &&
        responseAspectosDesarrolloTalleres.status === 201
      ) {
        const body = {
          doctorId: Cookies.get('id'),
          aspectoClinicoId:
            responseAspectosClinicos.data.data.data.aspectoClinicoId,
          aspectoComunitarioId:
            responseAspectosComunitarios.data.data.data.aspectoComunitarioId,
          aspectoPsicoeducativoId:
            responseAspectosPsicoeducativos.data.data.data
              .aspectoPsicoEducativoId,
          aspectoDesarrolloTallerId:
            responseAspectosDesarrolloTalleres.data.data.data
              .aspectoDesarrolloTallerId,
        };
        const responsePerfilEntrada = await axios.post(
          `${process.env.REACT_APP_BACKEND_API}entrevistasEntrada/`,
          body,
          {
            headers,
          }
        );
        if (responsePerfilEntrada.status === 201) {
          newPacienteData.perfilEntradaId =
            responsePerfilEntrada.data.data.data.perfilEntradaId;
          newPacienteData.perfilSalidaId= null;
        }
      }
    }

    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}pacientes/`,
      newPacienteData,
      {
        headers,
      }
    );
    if (response.status === 201) {
      setLoading(true);
      toast.success('Paciente creado con éxito');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(newPacienteData.fechaNacimiento);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      setNewPacienteData({
        ...newPacienteData,
        edad: age,
      });
    };

    calculateAge();
  }, [newPacienteData.fechaNacimiento]);
  const clearData = () => {
    setNewPacienteData({
      nombreCompleto: '',
      fechaNacimiento: '',
      contacto: '',
      cedula: '',
      edad: '',
      nacionalidad: '',
      distritoResidencia: '',
      direccion: '',
      genero: '',
      casaId: '',
      datosMedicosId: '',
      condicionLaboralId: '',
      sociodemograficosId: '',
      encargadoId: '',
      dinamicaFamiliarId: '',
      perfilEntradaId: '',
      perfilSalidaId: '',
      escolaridadId: '',
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentPacientes = pacientesData.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPacientes = () => {
    return currentPacientes.map((paciente) => (
      <tr key={paciente.pacienteId}>
        <td>{paciente.nombreCompleto}</td>
        <td>{paciente.cedula}</td>
        <td>{paciente.direccion}</td>
        <td>{paciente.distritoResidencia}</td>
        <td>{paciente.contacto}</td>
        <td>{paciente.edad}</td>
        <td>{paciente.fechaNacimiento}</td>
        <td>{paciente.genero}</td>
        <td>{paciente.nacionalidad}</td>
        <td>
          <a
            href={`pacientes/${paciente.pacienteId}`}
            className="btn btn-primary btn-sm"
          >
            <i className="fas fa-pencil-alt"></i>
          </a>
          &nbsp; &nbsp;
          <a
            className="btn btn-danger btn-sm"
            data-toggle="modal"
            data-target="#usuariosModal"
            value={paciente.pacienteId}
            onClick={() => setSelectedUserId(paciente.pacienteId)}
          >
            <i className="fas fa-trash-alt"></i>
          </a>
        </td>
      </tr>
    ));
  };

  return (
    <React.Fragment>
      <div id="wrapper">
        <SideMenu />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <div className="card shadow mb-4 m-overflow">
                <div className="card-header py-3 bg-second-primary">
                  <h6 className="m-0 font-weight-bold text-white">
                    Lista de Beneficiarios
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
                        <i class="fas fa-user-plus"></i> Nuevo Beneficiario
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
                            <th>Género</th>
                            <th>Nacionalidad</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>{getPacientes()}</tbody>
                      </table>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <Pagination className="custom-pagination">
                      {Array.from({
                        length: Math.ceil(pacientesData.length / usersPerPage),
                      }).map((_, index) => (
                        <Pagination.Item
                          key={index + 1}
                          onClick={() => paginate(index + 1)}
                          className={
                            index + 1 === currentPage ? 'hide-current' : ''
                          }
                        >
                          {index + 1}
                        </Pagination.Item>
                      ))}
                    </Pagination>
                  </div>
                </div>
              </div>
              {loading && <Loading />}
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
                        onClick={clearData}
                      >
                        <span aria-hidden="true">x</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form class="mx-auto">
                        <div class="row justify-content-center">
                          <div class="col-sm-8">
                            <div class="form-row ">
                              <div class="form-group col-sm-6">
                                <label for="txtNombreCompleto">
                                  Nombre Completo
                                </label>
                                <input
                                  type="text"
                                  class="form-control form-control-sm input-validar"
                                  id="txtNombreCompleto"
                                  name="nombreCompleto"
                                  value={newPacienteData.nombreCompleto}
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
                                  value={newPacienteData.fechaNacimiento}
                                  onChange={handleFechaNacimientoChange}
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtContacto">
                                  Teléfono de Contacto
                                </label>
                                <input
                                  type="number"
                                  class="form-control form-control-sm input-validar"
                                  id="contacto"
                                  name="contacto"
                                  value={newPacienteData.contacto}
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
                                  value={newPacienteData.cedula}
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
                                  disabled
                                  value={newPacienteData.edad}
                                  onChange={handleEdadChange}
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtNacionalidad">
                                  Nacionalidad
                                </label>
                                <input
                                  type="text"
                                  class="form-control form-control-sm input-validar"
                                  id="nacionalidad"
                                  name="nacionalidad"
                                  value={newPacienteData.nacionalidad}
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
                                  value={newPacienteData.distritoResidencia}
                                  onChange={handleDistritoResidenciaChange}
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtDireccion">Dirección</label>
                                <input
                                  type="text"
                                  class="form-control form-control-sm 
                                 input-validar"
                                  id="direccion"
                                  name="direccion"
                                  value={newPacienteData.direccion}
                                  onChange={handleDireccionChange}
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtGenero">Género</label>
                                <select
                                  class="custom-select"
                                  id="genero"
                                  name="genero"
                                  value={newPacienteData.genero}
                                  onChange={handleGeneroChange}
                                >
                                  <option value="Prefiere no comentar">
                                    -No especifica-
                                  </option>
                                  <option value="Masculino">Masculino</option>
                                  <option value="Femenino">Femenino</option>
                                  <option value="No-Binario">No-Binario</option>
                                  <option value="Tansgenero">
                                    Transgénero
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <br />
                        <Casa
                          onCasaChange={handleCasaChange}
                          selectedCasa={newPacienteData.casa}
                        />
                        <hr />
                        <br />
                        <DatosMedicos
                          datosMedicos={datosMedicos}
                          setUpdatedDatosMedicos={setUpdatedDatosMedicos}
                        />
                        <hr />
                        <br />
                        <CondicionLaboral
                          condicionLaboral={condicionLaboral}
                          setUpdatedCondicionLaboral={
                            setUpdatedCondicionLaboral
                          }
                        />
                        <hr />
                        <br />
                        <Sociodemograficos
                          sociodemograficos={sociodemograficos}
                          setUpdatedSociodemograficos={
                            setUpdatedSociodemograficos
                          }
                        />
                        <hr />
                        <br />
                        <Encargado
                          encargado={encargado}
                          setUpdatedEncargado={setUpdatedEncargado}
                        />
                        <hr />
                        <br />
                        <DinamicaFamiliar
                          dinamicaFamiliar={dinamicaFamiliar}
                          setUpdatedDinamicaFamiliar={
                            setUpdatedDinamicaFamiliar
                          }
                        />
                        <hr />
                        <br />
                        <Escolaridad
                          escolaridad={escolaridad}
                          setUpdatedEscolaridad={setUpdatedEscolaridad}
                        />
                        <hr />

                        {!agregaPerfilEntrada ? (
                          <div class="row col-sm-6">
                            <button
                              class="btn btn-success btn-sm"
                              type="button"
                              id="btnGuardarCambios"
                              onClick={() => setAgregaPerfilEntrada(true)}
                            >
                              Anadir Perfil de Entrada
                            </button>
                          </div>
                        ) : (
                          <>
                            <PerfilEntrada
                              perfilEntrada={perfilEntrada}
                              setUpdatedPerfilEntrada={setUpdatedPerfilEntrada}
                            />
                          </>
                        )}
                        <hr />
                      </form>
                      <div class="modal-footer">
                        <button
                          class="btn btn-danger btn-sm"
                          type="button"
                          data-dismiss="modal"
                          onClick={clearData}
                        >
                          Cancel
                        </button>
                        <button
                          class="btn btn-success btn-sm"
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
            <ToastContainer />
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
