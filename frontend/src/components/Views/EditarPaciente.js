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

export default function EditarPaciente() {
  const { id } = useParams();
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

  const handleActivoChange = (event) => {
    setPacienteData({
      ...pacienteData,
      activo: event.currentTarget.value,
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
    setPacienteData(data);
    setDatosMedicos(data.datosMedicos);
    setCondicionLaboral(data.condicionLaboral);
    setSociodemograficos(data.sociodemograficos);
    setEncargado(data.encargado);
    setDinamicaFamiliar(data.dinamicaFamiliar);
    setEscolaridad(data.escolaridad);
    setPerfilEntrada(data.perfilEntrada);

    // if (data.perfilEntradaId !== null) {
    //   const responsePerfilEntrada = await axios.get(
    //     `http://localhost:3000/entrevistasEntrada/${data.perfilEntradaId}`,
    //     {
    //       headers,
    //     }
    //   );
    //   const dataPerfilEntrada = responsePerfilEntrada.data.data.data;
    //   setPerfilEntrada(dataPerfilEntrada);
    // }
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

  const handleGuardarCambios = async (event) => {
    event.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    if (updatedDatosMedicos !== null) {
      console.log(updatedDatosMedicos);
      await axios.patch(
        `http://localhost:3000/datosMedicos/${pacienteData.datosMedicosId}`,
        updatedDatosMedicos,
        {
          headers,
        }
      );
    }
    if (updatedCondicionLaboral !== null) {
      await axios.patch(
        `http://localhost:3000/condicionesLaborales/${pacienteData.condicionLaboralId}`,
        updatedCondicionLaboral,
        {
          headers,
        }
      );
    }
    if (updatedSociodemograficos !== null) {
      await axios.patch(
        `http://localhost:3000/sociodemograficos/${pacienteData.sociodemograficosId}`,
        updatedSociodemograficos,
        {
          headers,
        }
      );
    }
    if (updatedEncargado !== null) {
      await axios.patch(
        `http://localhost:3000/encargados/${pacienteData.encargadoId}`,
        updatedEncargado,
        {
          headers,
        }
      );
    }
    if (updatedDinamicaFamiliar !== null) {
      await axios.patch(
        `http://localhost:3000/dinamicasFamiliares/${pacienteData.dinamicaFamiliarId}`,
        updatedDinamicaFamiliar,
        {
          headers,
        }
      );
    }
    if (updatedEscolaridad !== null) {
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
      activo: pacienteData.activo,
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
                  Editar Expediente
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
                          <label for="txtGenero">Genero</label>
                          <select
                            class="custom-select"
                            id="genero"
                            name="genero"
                            value={pacienteData.genero}
                            onChange={handleGeneroChange}
                          >
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="No-Binario">No-Binario</option>
                          </select>
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtDireccion">Direccion</label>
                          <input
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
                          <label for="txtActivo">Activo</label>
                          <select
                            class="custom-select"
                            id="genero"
                            value={pacienteData.activo}
                            onChange={handleActivoChange}
                          >
                            <option value="true">Si</option>
                            <option value="false">No</option>
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
                      {pacienteData.perfilEntradaId !== null && (
                        <PerfilEntrada
                          perfilEntrada={perfilEntrada}
                          setUpdatedPerfilEntrada={setUpdatedPerfilEntrada}
                        />
                      )}
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
