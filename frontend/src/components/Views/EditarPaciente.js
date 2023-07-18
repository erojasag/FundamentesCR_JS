import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Casa from '../layouts/casa';
import DatosMedicos from '../layouts/datosMedicos';
import axios from 'axios';
import CondicionLaboral from '../layouts/condicionLaboral';
import Sociodemograficos from '../layouts/sociodemograficos';
import Encargado from '../layouts/encargado';
import DinamicaFamiliar from '../layouts/dinamicaFamiliar';
import Escolaridad from '../layouts/escolaridad';
import PerfilEntrada from '../layouts/perfilEntrada';
import PerfilSalida from '../layouts/perfilSalida';

export default function EditarPaciente() {
  const { id } = useParams();
  const [agregaPerfilEntrada, setAgregaPerfilEntrada] = useState(false);
  const [agregaPerfilSalida, setAgregaPerfilSalida] = useState(false);
  const navigate = useNavigate();
  const [pacienteData, setPacienteData] = useState({});
  //datos medicos
  const [datosMedicos, setDatosMedicos] = useState('');
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

  //datos perfilSalida
  const [perfilSalida, setPerfilSalida] = useState('');
  const [updatedPerfilSalida, setUpdatedPerfilSalida] = useState(null);

  const handleNameChange = (event) => {
    setPacienteData({
      ...pacienteData,
      nombreCompleto: event.currentTarget.value,
    });
  };
  const handleFechaNacimientoChange = (event) => {
    setPacienteData({
      ...pacienteData,
      fechaNacimiento: event.currentTarget.value,
    });
  };
  const handleContactoChange = (event) => {
    setPacienteData({
      ...pacienteData,
      contacto: event.currentTarget.value,
    });
  };
  const handleCedulaChange = (event) => {
    setPacienteData({
      ...pacienteData,
      cedula: event.currentTarget.value,
    });
  };
  const handleEdadChange = (event) => {
    setPacienteData({
      ...pacienteData,
      edad: event.currentTarget.value,
    });
  };
  const handleNacionalidadChange = (event) => {
    setPacienteData({
      ...pacienteData,
      nacionalidad: event.currentTarget.value,
    });
  };
  const handleDistritoResidenciaChange = (event) => {
    setPacienteData({
      ...pacienteData,
      distritoResidencia: event.currentTarget.value,
    });
  };
  const handleDireccionChange = (event) => {
    setPacienteData({
      ...pacienteData,
      direccion: event.currentTarget.value,
    });
  };

  const handleGeneroChange = (event) => {
    setPacienteData({
      ...pacienteData,
      genero: event.currentTarget.value,
    });
  };

  const handleCasaChange = (event) => {
    setPacienteData({
      ...pacienteData,
      casaId: event.currentTarget.value,
    });
  };

  async function fetchPaciente() {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };

    const response = await axios.get(`http://localhost:3000/pacientes/${id}`, {
      headers,
    });
    const data = response.data.data.data;
    console.log(data);
    setPacienteData(data);
    setDatosMedicos(data.datosMedicos);
    setCondicionLaboral(data.condicionLaboral);
    setSociodemograficos(data.sociodemograficos);
    setEncargado(data.encargado);
    setDinamicaFamiliar(data.dinamicaFamiliar);
    setEscolaridad(data.escolaridad);
    setPerfilEntrada(data.perfilEntrada);

    if (data.perfilEntradaId !== null) {
      const responsePerfilEntrada = await axios.get(
        `http://localhost:3000/entrevistasEntrada/${data.perfilEntradaId}`,
        {
          headers,
        }
      );
      const dataPerfilEntrada = responsePerfilEntrada.data.data.data;
      setPerfilEntrada(dataPerfilEntrada);
      setAgregaPerfilEntrada(true);
    }
    // if (data.perfilSalidaId !== null) {
    //   const responsePerfilSalida = await axios.get(
    //     `http://localhost:3000/entrevistasSalida/${data.perfilSalidaId}`,
    //     {
    //       headers,
    //     }
    //   );
    //   const dataPerfilSalida = responsePerfilSalida.data.data.data;
    //   setPerfilSalida(dataPerfilSalida);
    // }
  }

  useEffect(() => {
    fetchPaciente();
  }, []);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(pacienteData.fechaNacimiento);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      setPacienteData({
        ...pacienteData,
        edad: age,
      });
    };

    calculateAge();
  }, [pacienteData.fechaNacimiento]);

  const handleGuardarCambios = async (event) => {
    event.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    if (updatedDatosMedicos !== null) {
      if (pacienteData.datosMedicosId === null) {
        const response = await axios.post(
          `http://localhost:3000/datosMedicos/`,
          updatedDatosMedicos,
          {
            headers,
          }
        );
        pacienteData.datosMedicosId = response.data.data.data.datosMedicosId;
      }

      await axios.patch(
        `http://localhost:3000/datosMedicos/${pacienteData.datosMedicosId}`,
        updatedDatosMedicos,
        {
          headers,
        }
      );
    }
    if (updatedCondicionLaboral !== null) {
      if (pacienteData.condicionLaboralId === null) {
        const response = await axios.post(
          `http://localhost:3000/condicionesLaborales/`,
          updatedCondicionLaboral,
          {
            headers,
          }
        );
        pacienteData.condicionLaboralId =
          response.data.data.data.condicionLaboralId;
      }

      await axios.patch(
        `http://localhost:3000/condicionesLaborales/${pacienteData.condicionLaboralId}`,
        updatedCondicionLaboral,
        {
          headers,
        }
      );
    }
    if (updatedSociodemograficos !== null) {
      if (pacienteData.sociodemograficosId === null) {
        const response = await axios.post(
          `http://localhost:3000/sociodemograficos/`,
          updatedSociodemograficos,
          {
            headers,
          }
        );
        pacienteData.sociodemograficosId =
          response.data.data.data.sociodemograficosId;
      }

      await axios.patch(
        `http://localhost:3000/sociodemograficos/${pacienteData.sociodemograficosId}`,
        updatedSociodemograficos,
        {
          headers,
        }
      );
    }
    if (updatedEncargado !== null) {
      if (pacienteData.encargadoId === null) {
        const response = await axios.post(
          `http://localhost:3000/encargados/`,
          updatedEncargado,
          {
            headers,
          }
        );
        pacienteData.encargadoId = response.data.data.data.encargadoId;
      }

      await axios.patch(
        `http://localhost:3000/encargados/${pacienteData.encargadoId}`,
        updatedEncargado,
        {
          headers,
        }
      );
    }
    if (updatedDinamicaFamiliar !== null) {
      if (pacienteData.dinamicaFamiliarId === null) {
        const response = await axios.post(
          `http://localhost:3000/dinamicasFamiliares/`,
          updatedDinamicaFamiliar,
          {
            headers,
          }
        );
        pacienteData.dinamicaFamiliarId =
          response.data.data.data.dinamicaFamiliarId;
      }

      await axios.patch(
        `http://localhost:3000/dinamicasFamiliares/${pacienteData.dinamicaFamiliarId}`,
        updatedDinamicaFamiliar,
        {
          headers,
        }
      );
    }
    if (updatedEscolaridad !== null) {
      if (pacienteData.escolaridadId === null) {
        const response = await axios.post(
          `http://localhost:3000/escolaridades/`,
          updatedEscolaridad,
          {
            headers,
          }
        );
        pacienteData.escolaridadId = response.data.data.data.escolaridadId;
      }
      await axios.patch(
        `http://localhost:3000/escolaridades/${pacienteData.escolaridadId}`,
        updatedEscolaridad,
        {
          headers,
        }
      );
    }

    const body = {
      nombreCompleto: pacienteData.nombreCompleto,
      fechaNacimiento: pacienteData.fechaNacimiento,
      contacto: pacienteData.contacto,
      cedula: pacienteData.cedula,
      edad: pacienteData.edad,
      nacionalidad: pacienteData.nacionalidad,
      distritoResidencia: pacienteData.distritoResidencia,
      direccion: pacienteData.direccion,
      genero: pacienteData.genero,
      casaId: pacienteData.casaId,
      datosMedicosId: pacienteData.datosMedicosId,
      condicionLaboralId: pacienteData.condicionLaboralId,
      sociodemograficosId: pacienteData.sociodemograficosId,
      encargadoId: pacienteData.encargadoId,
      dinamicaFamiliarId: pacienteData.dinamicaFamiliarId,
      escolaridadId: pacienteData.escolaridadId,
      perfilEntradaId: pacienteData.perfilEntradaId,
      perfilSalidaId: pacienteData.perfilSalidaId,
    };
    await axios.patch(
      `http://localhost:3000/pacientes/${pacienteData.pacienteId}`,
      body,
      {
        headers,
      }
    );
    navigate('/pacientes');
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
                  Editar Beneficiario
                </h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-12">
                    <form onSubmit={handleGuardarCambios}>
                      <div class="row">
                        <div class="form-group col-sm-6">
                          <label for="txtNombre">Nombre</label>
                          <input
                            type="text"
                            class="form-control form-control-sm input-validar"
                            id="txtNombre"
                            name="Nombre"
                            value={pacienteData.nombreCompleto}
                            onChange={handleNameChange}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCedula">Cedula</label>
                          <input
                            type="number"
                            class="form-control form-control-sm input-validar"
                            id="cedula"
                            name="cedula"
                            value={pacienteData.cedula}
                            onChange={handleCedulaChange}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtFechaNacimiento">
                            Fecha de Nacimiento
                          </label>
                          <input
                            type="date"
                            class="form-control form-control-sm input-validar"
                            id="fechaNacimiento"
                            name="fechaNacimiento"
                            value={pacienteData.fechaNacimiento}
                            onChange={handleFechaNacimientoChange}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtTelefono">Telefono</label>
                          <input
                            type="email"
                            class="form-control form-control-sm input-validar"
                            id="Correo"
                            name="Correo"
                            value={pacienteData.contacto}
                            onChange={handleContactoChange}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtEdad">Edad</label>
                          <input
                            type="number"
                            class="form-control form-control-sm input-validar"
                            id="edad"
                            name="edad"
                            value={pacienteData.edad}
                            onChange={handleEdadChange}
                            disabled
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtNacionalidad">Nacionalidad</label>
                          <input
                            type="text"
                            class="form-control form-control-sm input-validar"
                            id="nacionalidad"
                            name="nacionalidad"
                            value={pacienteData.nacionalidad}
                            onChange={handleNacionalidadChange}
                          />
                        </div>

                        <div class="form-group col-sm-6">
                          <label for="txtDireccion">Direccion</label>
                          <textarea
                            type="text"
                            class="form-control form-control-sm input-validar"
                            id="direccion"
                            name="direccion"
                            value={pacienteData.direccion}
                            onChange={handleDireccionChange}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtDistrito">Distrito</label>
                          <input
                            type="text"
                            class="form-control form-control-sm input-validar"
                            id="distrito"
                            name="distrito"
                            value={pacienteData.distritoResidencia}
                            onChange={handleDistritoResidenciaChange}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtGenero">Genero</label>
                          <select
                            class="custom-select"
                            id="genero"
                            name="genero"
                            value={pacienteData.genero}
                            onChange={handleGeneroChange}
                          >
                            <option selected>Seleccione una opción</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="No-Binario">No-Binario</option>
                          </select>
                        </div>
                      </div>
                      <hr />
                      <Casa
                        onCasaChange={handleCasaChange}
                        selectedCasa={pacienteData.casaId}
                      />
                      <br />
                      <hr />
                      <DatosMedicos
                        datosMedicos={datosMedicos}
                        setUpdatedDatosMedicos={setUpdatedDatosMedicos}
                      />
                      <br />
                      <hr />
                      <CondicionLaboral
                        condicionLaboral={condicionLaboral}
                        setUpdatedCondicionLaboral={setUpdatedCondicionLaboral}
                      />
                      <br />
                      <hr />
                      <Sociodemograficos
                        sociodemograficos={sociodemograficos}
                        setUpdatedSociodemograficos={
                          setUpdatedSociodemograficos
                        }
                      />
                      <br />
                      <hr />
                      <Encargado
                        encargado={encargado}
                        setUpdatedEncargado={setUpdatedEncargado}
                      />
                      <br />
                      <hr />
                      <DinamicaFamiliar
                        dinamicaFamiliar={dinamicaFamiliar}
                        setUpdatedDinamicaFamiliar={setUpdatedDinamicaFamiliar}
                      />
                      <br />
                      <hr />
                      <Escolaridad
                        escolaridad={escolaridad}
                        setUpdatedEscolaridad={setUpdatedEscolaridad}
                      />
                      <br />
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
                      {!agregaPerfilSalida && (
                        <div class="row col-sm-6">
                          <button
                            class="btn btn-success btn-sm"
                            type="button"
                            id="btnGuardarCambios"
                            onClick={() => setAgregaPerfilSalida(true)}
                          >
                            Anadir Perfil de Salida
                          </button>
                        </div>
                      )}
                      {agregaPerfilSalida && (
                        <>
                          <div class="form-group row justify-content-center">
                            <label
                              for="txtDistrito"
                              className="col-form-label-lg"
                            >
                              Perfil de Salida
                            </label>
                          </div>

                          <PerfilSalida
                            perfilEntrada={perfilSalida}
                            setUpdatedPerfilEntrada={setUpdatedPerfilSalida}
                          />

                          <div class="row col-sm-6">
                            <button
                              class="btn btn-danger btn-sm"
                              type="button"
                              id="btnGuardarCambios"
                              onClick={() => setAgregaPerfilSalida(false)}
                            >
                              Cancelar
                            </button>
                          </div>
                        </>
                      )}
                      <br />
                      <hr />
                      <button
                        class="btn btn-success btn-sm"
                        type="button"
                        id="btnGuardarCambios"
                        onClick={handleGuardarCambios}
                      >
                        Guardar Cambios
                      </button>
                      &nbsp; &nbsp;
                      <a
                        class="btn btn-danger btn-sm"
                        type="button"
                        id="btnGuardarCambios"
                        href="/pacientes"
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
  );
}
