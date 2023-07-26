import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Casa from '../layouts/casa';
import DatosMedicos from '../layouts/datosMedicos';
import Loading from '../layouts/loading';
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
  const [updatedPerfilEntrada, setUpdatedPerfilEntrada] = useState({});

  //datos perfilSalida
  const [perfilSalida, setPerfilSalida] = useState('');
  const [updatedPerfilSalida, setUpdatedPerfilSalida] = useState({});

  const [loading, setLoading] = useState(false);

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
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}pacientes/${id}`,
        {
          headers,
        }
      );
      const data = response.data.data.data;
      setPacienteData(data);
      setDatosMedicos(data.datosMedicos);
      setCondicionLaboral(data.condicionLaboral);
      setSociodemograficos(data.sociodemograficos);
      setEncargado(data.encargado);
      setDinamicaFamiliar(data.dinamicaFamiliar);
      setEscolaridad(data.escolaridad);

      if (data.perfilEntradaId !== null) {
        const responsePerfilEntrada = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}entrevistasEntrada/${data.perfilEntradaId}`,
          {
            headers,
          }
        );

        const dataPerfilEntrada = responsePerfilEntrada.data.data.data;
        setPerfilEntrada(dataPerfilEntrada);
        setAgregaPerfilEntrada(true);
      } else {
        setPerfilEntrada(null);
      }
      if (data.perfilSalidaId !== null) {
        const responsePerfilSalida = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}entrevistasSalida/${data.perfilSalidaId}`,
          {
            headers,
          }
        );
        const dataPerfilSalida = responsePerfilSalida.data.data.data;
        setPerfilSalida(dataPerfilSalida);
        setAgregaPerfilSalida(true);
      } else {
        setPerfilSalida(null);
      }
    } catch (err) {
      return;
    }
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
    try {
      event.preventDefault();
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      if (updatedDatosMedicos !== null) {
        if (pacienteData.datosMedicosId === null) {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_API}datosMedicos/`,
            updatedDatosMedicos,
            {
              headers,
            }
          );
          pacienteData.datosMedicosId = response.data.data.data.datosMedicosId;
        }

        await axios.patch(
          `${process.env.REACT_APP_BACKEND_API}datosMedicos/${pacienteData.datosMedicosId}`,
          updatedDatosMedicos,
          {
            headers,
          }
        );
      }
      if (updatedCondicionLaboral !== null) {
        if (pacienteData.condicionLaboralId === null) {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_API}condicionesLaborales/`,
            updatedCondicionLaboral,
            {
              headers,
            }
          );
          pacienteData.condicionLaboralId =
            response.data.data.data.condicionLaboralId;
        }

        await axios.patch(
          `${process.env.REACT_APP_BACKEND_API}condicionesLaborales/${pacienteData.condicionLaboralId}`,
          updatedCondicionLaboral,
          {
            headers,
          }
        );
      }
      if (updatedSociodemograficos !== null) {
        if (pacienteData.sociodemograficosId === null) {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_API}sociodemograficos/`,
            updatedSociodemograficos,
            {
              headers,
            }
          );
          pacienteData.sociodemograficosId =
            response.data.data.data.sociodemograficosId;
        }

        await axios.patch(
          `${process.env.REACT_APP_BACKEND_API}sociodemograficos/${pacienteData.sociodemograficosId}`,
          updatedSociodemograficos,
          {
            headers,
          }
        );
      }
      if (updatedEncargado !== null) {
        if (pacienteData.encargadoId === null) {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_API}encargados/`,
            updatedEncargado,
            {
              headers,
            }
          );
          pacienteData.encargadoId = response.data.data.data.encargadoId;
        }

        await axios.patch(
          `${process.env.REACT_APP_BACKEND_API}encargados/${pacienteData.encargadoId}`,
          updatedEncargado,
          {
            headers,
          }
        );
      }
      if (updatedDinamicaFamiliar !== null) {
        if (pacienteData.dinamicaFamiliarId === null) {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_API}dinamicasFamiliares/`,
            updatedDinamicaFamiliar,
            {
              headers,
            }
          );
          pacienteData.dinamicaFamiliarId =
            response.data.data.data.dinamicaFamiliarId;
        }

        await axios.patch(
          `${process.env.REACT_APP_BACKEND_API}dinamicasFamiliares/${pacienteData.dinamicaFamiliarId}`,
          updatedDinamicaFamiliar,
          {
            headers,
          }
        );
      }
      if (updatedEscolaridad !== null) {
        if (pacienteData.escolaridadId === null) {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_API}escolaridades/`,
            updatedEscolaridad,
            {
              headers,
            }
          );
          pacienteData.escolaridadId = response.data.data.data.escolaridadId;
        }
        await axios.patch(
          `${process.env.REACT_APP_BACKEND_API}escolaridades/${pacienteData.escolaridadId}`,
          updatedEscolaridad,
          {
            headers,
          }
        );
      }

      if (pacienteData.perfilEntradaId !== null) {
        if (
          Object.values(updatedPerfilEntrada.aspectoComunitario).length !== 0
        ) {
          await axios.patch(
            `${process.env.REACT_APP_BACKEND_API}aspectosComunitarios/${pacienteData.perfilEntrada.aspectoComunitarioId}`,
            updatedPerfilEntrada.aspectoComunitario,
            {
              headers,
            }
          );
        }

        if (Object.values(updatedPerfilEntrada.aspectoClinico).length !== 0) {
          await axios.patch(
            `${process.env.REACT_APP_BACKEND_API}aspectosClinicos/${pacienteData.perfilEntrada.aspectoClinicoId}`,
            updatedPerfilEntrada.aspectoClinico,
            {
              headers,
            }
          );
        }
        if (
          Object.values(updatedPerfilEntrada.aspectoPsicoeducativo).length !== 0
        ) {
          await axios.patch(
            `${process.env.REACT_APP_BACKEND_API}aspectosPsicoEducativos/${pacienteData.perfilEntrada.aspectoPsicoeducativoId}`,
            updatedPerfilEntrada.aspectoPsicoeducativo,
            {
              headers,
            }
          );
        }
        if (
          Object.values(updatedPerfilEntrada.aspectoDesarrolloTalleres)
            .length !== 0
        ) {
          await axios.patch(
            `${process.env.REACT_APP_BACKEND_API}aspectosDesarrolloTaller/${pacienteData.perfilEntrada.aspectoDesarrolloTallerId}`,
            updatedPerfilEntrada.aspectoDesarrolloTalleres,
            {
              headers,
            }
          );
        }
      }

      // if (Object.keys(updatedPerfilEntrada).length !== 0) {
      //   if(Object.keys(updatedPerfilEntrada.aspectoComunitario).length !== 0){
      //     const responseAspectosClinicos = await axios.post(
      //       `${process.env.REACT_APP_BACKEND_API}aspectosClinicos/`,
      //       updatedPerfilEntrada.aspectoClinico,
      //       { headers }
      //     );
      //   const responseAspectosComunitarios = await axios.post(
      //     `${process.env.REACT_APP_BACKEND_API}aspectosComunitarios/`,
      //     updatedPerfilEntrada.aspectoComunitario,
      //     { headers }
      //   );
      //   const responseAspectosPsicoeducativos = await axios.post(
      //     `${process.env.REACT_APP_BACKEND_API}aspectosPsicoEducativos/`,
      //     updatedPerfilEntrada.aspectoPsicoeducativo,
      //     { headers }
      //   );
      //   const responseAspectosDesarrolloTalleres = await axios.post(
      //     `${process.env.REACT_APP_BACKEND_API}aspectosDesarrolloTaller/`,
      //     updatedPerfilEntrada.aspectoDesarrolloTalleres,
      //     { headers }
      //   );
      //   const responsePerfilEntrada = await axios.post(
      //     `${process.env.REACT_APP_BACKEND_API}entrevistasEntrada/`,
      //     {
      //       doctorId: Cookies.get('id'),
      //       aspectoComunitarioId:
      //         responseAspectosComunitarios.data.data.data.aspectoComunitarioId,
      //       aspectoClinicoId:
      //         responseAspectosClinicos.data.data.data.aspectoClinicoId,
      //       aspectoPsicoeducativoId:
      //         responseAspectosPsicoeducativos.data.data.data
      //           .aspectoPsicoEducativoId,
      //       aspectoDesarrolloTallerId:
      //         responseAspectosDesarrolloTalleres.data.data.data
      //           .aspectoDesarrolloTallerId,
      //     },
      //     { headers }
      //   );
      //   if (responsePerfilEntrada.status === 201) {
      //     pacienteData.perfilEntradaId =
      //       responsePerfilEntrada.data.data.data.perfilEntradaId;
      //   }
      // }

      if (pacienteData.perfilSalidaId !== null) {
        if (
          Object.values(updatedPerfilSalida.aspectoComunitario).length !== 0
        ) {
          await axios.patch(
            `${process.env.REACT_APP_BACKEND_API}aspectosComunitarios/${pacienteData.perfilSalida.aspectoComunitarioId}`,
            updatedPerfilSalida.aspectoComunitario,
            {
              headers,
            }
          );
        }
        if (Object.values(updatedPerfilSalida.aspectoClinico).length !== 0) {
          await axios.patch(
            `${process.env.REACT_APP_BACKEND_API}aspectosClinicos/${pacienteData.perfilSalida.aspectoClinicoId}`,
            updatedPerfilSalida.aspectoClinico,
            {
              headers,
            }
          );
        }
        if (
          Object.values(updatedPerfilSalida.aspectoPsicoeducativo).length !== 0
        ) {
          await axios.patch(
            `${process.env.REACT_APP_BACKEND_API}aspectosPsicoEducativos/${pacienteData.perfilSalida.aspectoPsicoeducativoId}`,
            updatedPerfilSalida.aspectoPsicoeducativo,
            {
              headers,
            }
          );
        }
        if (
          Object.values(updatedPerfilSalida.aspectoDesarrolloTalleres)
            .length !== 0
        ) {
          await axios.patch(
            `${process.env.REACT_APP_BACKEND_API}aspectosDesarrolloTaller/${pacienteData.perfilSalida.aspectoDesarrolloTallerId}`,
            updatedPerfilSalida.aspectoDesarrolloTalleres,
            {
              headers,
            }
          );
        }
      }

      if (Object.keys(updatedPerfilSalida).length !== 0) {
        const responseAspectosClinicos = await axios.post(
          `${process.env.REACT_APP_BACKEND_API}aspectosClinicos/`,
          updatedPerfilSalida.aspectoClinico,
          { headers }
        );
        const responseAspectosComunitarios = await axios.post(
          `${process.env.REACT_APP_BACKEND_API}aspectosComunitarios/`,
          updatedPerfilSalida.aspectoComunitario,
          { headers }
        );
        const responseAspectosPsicoeducativos = await axios.post(
          `${process.env.REACT_APP_BACKEND_API}aspectosPsicoEducativos/`,
          updatedPerfilSalida.aspectoPsicoeducativo,
          { headers }
        );
        const responseAspectosDesarrolloTalleres = await axios.post(
          `${process.env.REACT_APP_BACKEND_API}aspectosDesarrolloTaller/`,
          updatedPerfilSalida.aspectoDesarrolloTalleres,
          { headers }
        );
        const responsePerfilSalida = await axios.post(
          `${process.env.REACT_APP_BACKEND_API}entrevistasSalida/`,
          {
            doctorId: Cookies.get('id'),
            aspectoComunitarioId:
              responseAspectosComunitarios.data.data.data.aspectoComunitarioId,
            aspectoClinicoId:
              responseAspectosClinicos.data.data.data.aspectoClinicoId,
            aspectoPsicoeducativoId:
              responseAspectosPsicoeducativos.data.data.data
                .aspectoPsicoEducativoId,
            aspectoDesarrolloTallerId:
              responseAspectosDesarrolloTalleres.data.data.data
                .aspectoDesarrolloTallerId,
          },
          { headers }
        );
        if (responsePerfilSalida.status === 201) {
          pacienteData.perfilSalidaId =
            responsePerfilSalida.data.data.data.perfilSalidaId;
        }
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
      const responsePaciente = await axios.patch(
        `${process.env.REACT_APP_BACKEND_API}pacientes/${pacienteData.pacienteId}`,
        body,
        {
          headers,
        }
      );

      if (responsePaciente.status === 201) {
        setLoading(true);
        toast.success('Paciente actualizado con exito');
        setTimeout(() => {
          navigate('/pacientes');
        }, 2000);
      }
    } catch (err) {
      if (err.response.status === 500) {
        toast.error(
          'Error al actualizar el paciente,\n verifique que todos los campos esten correctos'
        );
      }
    }
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
                        <>
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
                        </>
                      ) : (
                        <>
                          <PerfilEntrada
                            perfilEntrada={perfilEntrada}
                            setUpdatedPerfilEntrada={setUpdatedPerfilEntrada}
                          />
                          {pacienteData.perfilEntradaId === null ? (
                            <button
                              class="btn btn-danger btn-sm"
                              type="button"
                              id="btnGuardarCambios"
                              onClick={() => setAgregaPerfilEntrada(false)}
                            >
                              Cancelar
                            </button>
                          ) : null}
                        </>
                      )}
                      <hr />
                      {!agregaPerfilSalida ? (
                        <>
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
                        </>
                      ) : (
                        <>
                          <PerfilSalida
                            perfilSalida={perfilSalida}
                            setUpdatedPerfilSalida={setUpdatedPerfilSalida}
                          />

                          {pacienteData.perfilSalidaId === null ? (
                            <button
                              class="btn btn-danger btn-sm"
                              type="button"
                              id="btnGuardarCambios"
                              onClick={() => setAgregaPerfilSalida(false)}
                            >
                              Cancelar
                            </button>
                          ) : null}
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
            {loading && <Loading />}
          </div>
          <ToastContainer />
        </div>
        <Footer />
      </div>
    </div>
  );
}
