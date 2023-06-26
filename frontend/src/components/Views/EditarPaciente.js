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

export default function EditarPaciente() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [contacto, setContacto] = useState('');
  const [cedula, setCedula] = useState('');
  const [edad, setEdad] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [distritoResidencia, setDistritoResidencia] = useState('');
  const [direccion, setDireccion] = useState('');
  const [genero, setGenero] = useState('');
  const [activo, setActivo] = useState(true);
  const [casa, setCasa] = useState('');

  //datos medicos
  const [datosMedicos, setDatosMedicos] = useState('');
  const [datosMedicosId, setDatosMedicosId] = useState('');
  const [updatedDatosMedicos, setUpdatedDatosMedicos] = useState(null);

  //datos condicion laboral
  const [condicionLaboral, setCondicionLaboral] = useState('');
  const [condicionLaboralId, setCondicionLaboralId] = useState('');
  const [updatedCondicionLaboral, setUpdatedCondicionLaboral] = useState(null);

  //datos sociodemograficos
  const [sociodemograficos, setSociodemograficos] = useState('');
  const [sociodemograficosId, setSociodemograficosId] = useState('');
  const [updatedSociodemograficos, setUpdatedSociodemograficos] =
    useState(null);

  //datos encargado
  const [encargado, setEncargado] = useState('');
  const [encargadoId, setEncargadoId] = useState('');
  const [updatedEncargado, setUpdatedEncargado] = useState(null);

  //datos dinamica familiar
  const [dinamicaFamiliar, setDinamicaFamiliar] = useState('');
  const [dinamicaFamiliarId, setDinamicaFamiliarId] = useState('');
  const [updatedDinamicaFamiliar, setUpdatedDinamicaFamiliar] = useState(null);

  //datos escolaridad
  const [escolaridad, setEscolaridad] = useState('');
  const [escolaridadId, setEscolaridadId] = useState('');
  const [updatedEscolaridad, setUpdatedEscolaridad] = useState(null);

  //datos perfilEntrada
  const [perfilEntrada, setPerfilEntrada] = useState('');
  const [perfilEntradaId, setPerfilEntradaId] = useState('');
  const [updatedPerfilEntrada, setUpdatedPerfilEntrada] = useState(null);

  //datos perfilSalida
  const [perfilSalida, setPerfilSalida] = useState('');
  const [perfilSalidaId, setPerfilSalidaId] = useState('');
  const [updatedPerfilSalida, setUpdatedPerfilSalida] = useState(null);

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

  const handleActivoChange = (event) => {
    setActivo(event.currentTarget.value);
  };

  const handleCasaChange = (event) => {
    setCasa(event.currentTarget.value);
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
    setNombreCompleto(data.nombreCompleto);
    setFechaNacimiento(data.fechaNacimiento);
    setContacto(data.contacto);
    setCedula(data.cedula);
    setEdad(data.edad);
    setNacionalidad(data.nacionalidad);
    setDistritoResidencia(data.distritoResidencia);
    setDireccion(data.direccion);
    setGenero(data.genero);
    setActivo(data.activo);
    setCasa(data.casaId);
    setDatosMedicosId(data.datosMedicosId);
    setCondicionLaboralId(data.condicionLaboralId);
    setSociodemograficosId(data.sociodemograficosId);
    setEncargadoId(data.encargadoId);
    setDinamicaFamiliarId(data.dinamicaFamiliarId);
    setEscolaridadId(data.escolaridadId);
    setPerfilEntradaId(data.perfilEntradaId);
    setPerfilSalidaId(data.perfilSalidaId);

    if (data.datosMedicosId === null) return;

    const responseDatosMedicos = await axios.get(
      `http://localhost:3000/datosMedicos/${data.datosMedicosId}`,
      {
        headers,
      }
    );

    const dataDatosMedicos = responseDatosMedicos.data.data.data;
    setDatosMedicos(dataDatosMedicos);

    const responseCondicionLaboral = await axios.get(
      `http://localhost:3000/condicionesLaborales/${data.condicionLaboralId}`,
      {
        headers,
      }
    );
    const dataCondicionLaboral = responseCondicionLaboral.data.data.data;
    setCondicionLaboral(dataCondicionLaboral);

    const responseSociodemograficos = await axios.get(
      `http://localhost:3000/sociodemograficos/${data.sociodemograficosId}`,
      {
        headers,
      }
    );
    const socioDemograficosData = responseSociodemograficos.data.data.data;
    setSociodemograficos(socioDemograficosData);

    const responseEncargado = await axios.get(
      `http://localhost:3000/encargados/${data.encargadoId}`,
      {
        headers,
      }
    );
    const encargadoData = responseEncargado.data.data.data;
    setEncargado(encargadoData);

    const responseDinamicaFamiliar = await axios.get(
      `http://localhost:3000/dinamicasFamiliares/${data.dinamicaFamiliarId}`,
      {
        headers,
      }
    );
    const dinamicaFamiliarData = responseDinamicaFamiliar.data.data.data;
    setDinamicaFamiliar(dinamicaFamiliarData);

    const responseEscolaridad = await axios.get(
      `http://localhost:3000/escolaridades/${data.escolaridadId}`,
      {
        headers,
      }
    );
    const escolaridadData = responseEscolaridad.data.data.data;
    setEscolaridad(escolaridadData);
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
      activo,
      casaId: casa,
      datosMedicosId: datosMedicosId,
      condicionLaboralId: condicionLaboralId,
      sociodemograficosId: sociodemograficosId,
      encargadoId: encargadoId,
      dinamicaFamiliarId: dinamicaFamiliarId,
      escolaridadId: escolaridadId,
      perfilEntradaId: perfilEntradaId,
      perfilSalidaId: perfilSalidaId,
    };

    await axios.patch(`http://localhost:3000/pacientes/${id}`, body, {
      headers,
    });

    if (updatedDatosMedicos !== null) {
      await axios.patch(
        `http://localhost:3000/datosMedicos/${datosMedicosId}`,
        updatedDatosMedicos,
        {
          headers,
        }
      );
    }
    if (updatedCondicionLaboral !== null) {
      await axios.patch(
        `http://localhost:3000/condicionesLaborales/${condicionLaboralId}`,
        updatedCondicionLaboral,
        {
          headers,
        }
      );
    }
    if (updatedSociodemograficos !== null) {
      await axios.patch(
        `http://localhost:3000/sociodemograficos/${sociodemograficosId}`,
        updatedSociodemograficos,
        {
          headers,
        }
      );
    }
    if (updatedEncargado !== null) {
      await axios.patch(
        `http://localhost:3000/encargados/${encargadoId}`,
        updatedEncargado,
        {
          headers,
        }
      );
    }
    if (updatedDinamicaFamiliar !== null) {
      await axios.patch(
        `http://localhost:3000/dinamicasFamiliares/${dinamicaFamiliarId}`,
        updatedDinamicaFamiliar,
        {
          headers,
        }
      );
    }
    if (updatedEscolaridad !== null) {
      await axios.patch(
        `http://localhost:3000/escolaridades/${escolaridadId}`,
        updatedEscolaridad,
        {
          headers,
        }
      );
    }
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
                            value={nombreCompleto}
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
                            value={cedula}
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
                            value={fechaNacimiento}
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
                            value={contacto}
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
                        <div class="form-group col-sm-6">
                          <label for="txtDireccion">Direccion</label>
                          <input
                            type="text"
                            class="form-control form-control-sm input-validar"
                            id="direccion"
                            name="direccion"
                            value={direccion}
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
                            value={distritoResidencia}
                            onChange={handleDistritoResidenciaChange}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtActivo">Activo</label>
                          <select
                            class="custom-select"
                            id="genero"
                            value={activo}
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
                        selectedCasa={casa}
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
                      {perfilEntradaId !== null}
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
