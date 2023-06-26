import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Cookies from 'js-cookie';
import axios from 'axios';
export default function EditarUsuarioLog() {
  const { id } = useParams();
  console.log(id);
  const [userData, setUserData] = useState([
    {
      nombre: '',
      primerApe: '',
      segundoApe: '',
      email: '',
      contrasena: '',
      confirmContrasena: '',
      rolId: '',
    },
  ]);

  useEffect(() => {
    const getUserData = async () => {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      console.log(id);
      const response = await axios.get(`http://localhost:3000/usuarios/${id}`, {
        headers,
      });
      setUserData(response.data.data.data);
    };
    getUserData();
  }, [id]);

  const handleNameChange = (event) => {
    setUserData({
      ...userData,
      nombre: event.currentTarget.value,
    });
  };
  const handleFirstLastNameChange = (event) => {
    setUserData({
      ...userData,
      primerApe: event.currentTarget.value,
    });
  };
  const handleSecondLastNameChange = (event) => {
    setUserData({
      ...userData,
      segundoApe: event.currentTarget.value,
    });
  };
  const handleEmailChange = (event) => {
    setUserData({
      ...userData,
      email: event.currentTarget.value,
    });
  };
  const handlePasswordChange = (event) => {
    setUserData({
      ...userData,
      contrasena: event.currentTarget.value,
    });
  };
  const handleConfirmPasswordChange = (event) => {
    setUserData({
      ...userData,
      confirmContrasena: event.currentTarget.value,
    });
  };
  const handleRoleChange = (event) => {
    setUserData({
      ...userData,
      rol: event.currentTarget.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nombre: userData.nombre,
      primerApe: userData.primerApe,
      segundoApe: userData.segundoApe,
      email: userData.email,
      contrasena: userData.contrasena,
      confirmContrasena: userData.confirmContrasena,
      rolId: userData.rolId,
    };
  };
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideMenu />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div class="container-fluid">
              <div class="card shadow mb-4">
                <div class="card-header py-3 bg-second-primary">
                  <h6 class="m-0 font-weight-bold text-white">
                    Editar usuario
                  </h6>
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
                              value={userData.nombre}
                              onChange={handleNameChange}
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtPrimerApellido">
                              Primer Apellido
                            </label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="primerApellido"
                              name="primerApellido"
                              value={userData.primerApe}
                              onChange={handleFirstLastNameChange}
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtSegundoApellido">
                              Segundo Apellido
                            </label>
                            <input
                              type="text"
                              class="form-control form-control-sm input-validar"
                              id="segundoApellido"
                              name="segundoApellido"
                              value={userData.segundoApe}
                              onChange={handleSecondLastNameChange}
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtCedula">Cédula</label>
                            <input
                              type="number"
                              class="form-control form-control-sm input-validar"
                              id="Cedula"
                              name="Cedula"
                              value={userData.cedula}
                              onChange={handleEmailChange}
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtCorreo">Correo</label>
                            <input
                              type="email"
                              class="form-control form-control-sm input-validar"
                              id="Correo"
                              name="Correo"
                              value={userData.email}
                              onChange={handleEmailChange}
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtContrasena">Contraseña</label>
                            <input
                              type="password"
                              class="form-control form-control-sm input-validar"
                              id="Contraseña"
                              name="Contraseña"
                              value={userData.contrasena}
                              onChange={handlePasswordChange}
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtConfirmContrasena">
                              Confirma la Contraseña
                            </label>
                            <input
                              type="password"
                              class="form-control form-control-sm input-validar"
                              id="confirmContrasena"
                              name="confirmContrasena"
                              value={userData.confirmContrasena}
                              onChange={handleConfirmPasswordChange}
                            />
                          </div>
                          <div class="form-group col-sm-6">
                            <label for="txtCorreo">Tipo Usuario</label>
                            <select
                              class="custom-select"
                              id="cboTipoDocumentoVenta"
                            >
                              <option value="Administrado">
                                Administrador
                              </option>
                              <option value="Psicologo">Psicologo</option>
                            </select>
                          </div>
                        </div>
                        <button
                          class="btn btn-success btn-sm"
                          type="button"
                          id="btnGuardarCambios"
                        >
                          Guardar Cambios
                        </button>
                        &nbsp; &nbsp;
                        <a
                          class="btn btn-danger btn-sm"
                          type="button"
                          id="btnGuardarCambios"
                          href="/ListaUsuarios"
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
    </React.Fragment>
  );
}
