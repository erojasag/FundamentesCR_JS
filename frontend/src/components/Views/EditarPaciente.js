import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import axios from 'axios';

export default function EditarPaciente() {
  const { id } = useParams();
  const [data, setData] = useState([]);

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
    setData(data);
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
                            value={data.nombreCompleto}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCedula">Cedula</label>
                          <input
                            type="number"
                            class="form-control form-control-sm input-validar"
                            id="cedula"
                            name="cedula"
                            value={data.cedula}
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
                            value={data.fechaNacimiento}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Telefono</label>
                          <input
                            type="email"
                            class="form-control form-control-sm input-validar"
                            id="Correo"
                            name="Correo"
                            value={data.contacto}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Edad</label>
                          <input
                            type="number"
                            class="form-control form-control-sm input-validar"
                            id="edad"
                            name="edad"
                            value={data.edad}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Nacionalidad</label>
                          <input
                            type="text"
                            class="form-control form-control-sm input-validar"
                            id="nacionalidad"
                            name="nacionalidad"
                            value={data.nacionalidad}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Genero</label>
                          <select class="custom-select" id="genero">
                            <option defaultValue="0">{data.genero}</option>
                            <option value="1">Femenino</option>
                            <option value="2">Masculino</option>
                            <option value="3">No-binario</option>
                            <option value="4">Prefiere no especificar</option>
                          </select>
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Direccion</label>
                          <input
                            type="text"
                            class="form-control form-control-sm input-validar"
                            id="direccion"
                            name="direccion"
                            value={data.direccion}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Distrito</label>
                          <input
                            type="text"
                            class="form-control form-control-sm input-validar"
                            id="distrito"
                            name="distrito"
                            value={data.distritoResidencia}
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label for="txtCorreo">Activo</label>
                          <select class="custom-select" id="genero">
                            <option>{data.activo ? 'Si' : 'No'}</option>
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
