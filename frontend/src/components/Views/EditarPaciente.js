import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import axios from 'axios';

export default function EditarPaciente() {
  const { id } = useParams();

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
  const [activo, setActivo] = useState('');

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

  useEffect(() => {
    fetchPaciente();
  }, []);

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
  }

  return (
    <div id="wrapper">
      <SideMenu />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div class="container-fluid">
            <div class="card shadow mb-4">
              <div class="card-header py-3 bg-second-primary">
                <h6 class="m-0 font-weight-bold text-white">Editar nino</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-12">
                    <form>
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
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Contraseña</label>
                          <input
                            type="email"
                            class="form-control form-control-sm input-validar"
                            id="Contraseña"
                            name="Contraseña"
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Contraseña</label>
                          <input
                            type="email"
                            class="form-control form-control-sm input-validar"
                            id="Contraseña"
                            name="Contraseña"
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Contraseña</label>
                          <input
                            type="email"
                            class="form-control form-control-sm input-validar"
                            id="Contraseña"
                            name="Contraseña"
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Contraseña</label>
                          <input
                            type="email"
                            class="form-control form-control-sm input-validar"
                            id="Contraseña"
                            name="Contraseña"
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Contraseña</label>
                          <input
                            type="email"
                            class="form-control form-control-sm input-validar"
                            id="Contraseña"
                            name="Contraseña"
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Contraseña</label>
                          <input
                            type="email"
                            class="form-control form-control-sm input-validar"
                            id="Contraseña"
                            name="Contraseña"
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Contraseña</label>
                          <input
                            type="email"
                            class="form-control form-control-sm input-validar"
                            id="Contraseña"
                            name="Contraseña"
                          />
                        </div>
                      </div>

                      <button
                        class="btn btn-success btn-sm"
                        type="button"
                        id="btnGuardarCambios"
                      >
                        Guardar Cambios
                      </button>
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
