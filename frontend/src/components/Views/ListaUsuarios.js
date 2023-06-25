import React, { useState, useEffect } from 'react';
import SideMenu from '../layouts/sideMenu';
import Cookies from 'js-cookie';
import axios from 'axios';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';

export default function ListaUsuarios() {
  const [data, setData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [nombre, setName] = useState('');
  const [primerApe, setFirstLastName] = useState('');
  const [segundoApe, setSecondLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setPassword] = useState('');
  const [confirmContrasena, setConfirmPassword] = useState('');
  const [rolId, setRol] = useState('Psicologo');

  const handleNameChange = (event) => {
    setName(event.currentTarget.value);
  };
  const handleFirstLastNameChange = (event) => {
    setFirstLastName(event.currentTarget.value);
  };
  const handleSecondLastNameChange = (event) => {
    setSecondLastName(event.currentTarget.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const handleRolChange = (event) => {
    setRol(event.currentTarget.value);
  };

  const fetchData = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const response = await axios.get('http://localhost:3000/usuarios', {
      headers,
    });
    setData(response.data.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deactivateUser = async (usuarioId) => {
    console.log(usuarioId);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };

    const response = await axios.delete(
      `http://localhost:3000/usuarios/${usuarioId}`,
      {
        headers,
      }
    );
    if (response.status === 204) {
      window.location.reload();
    }
  };

  const createUser = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };

    const body = {
      nombre,
      primerApe,
      segundoApe,
      email,
      contrasena,
      confirmContrasena,
      rolId,
    };

    const response = await axios.post('http://localhost:3000/usuarios/', body, {
      headers,
    });
    if (response.status === 201) {
      window.location.reload();
    }
  };

  const getUsuarios = () => {
    return data.map((user) => (
      <tr key={3}>
        <td>{user.nombre} </td>
        <td>{user.primerApe + ' ' + user.segundoApe}</td>
        <td>{user.email}</td>
        <td>{user.rol.nombreRol}</td>
        <td>
          <a
            href={`EditarUsuario/${user.usuarioId}`}
            class="btn btn-primary btn-sm"
            value={user.usuarioId}
          >
            <i class="fas fa-pencil-alt"></i>
          </a>
          &nbsp; &nbsp;
          <a
            href="EditarUsuarioLogUsuario"
            class="btn btn-danger btn-sm"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => setSelectedUserId(user.usuarioId)}
          >
            <i class="fas fa-trash-alt"></i>
          </a>
        </td>
      </tr>
    ));
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
                    Lista de Usuarios
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
                        <i class="fas fa-user-plus"></i> Nuevo Usuario
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
                          <tr key={4}>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Correo</th>
                            <th>Tipo de Usuario</th>
                            <th>Accion</th>
                          </tr>
                        </thead>
                        <tbody>{getUsuarios()}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
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
                      <p>¿Seguro que desea desactivar el usuario?</p>
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
                      <h6>Añadir Usuario</h6>
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
                                  value={nombre}
                                  onChange={handleNameChange}
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtPrimerApe">
                                  Primer Apellido
                                </label>
                                <input
                                  type="text"
                                  class="form-control form-control-sm input-validar"
                                  id="primerApe"
                                  name="primerApe"
                                  value={primerApe}
                                  onChange={handleFirstLastNameChange}
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtSegundoApe">
                                  Segundo Apellido
                                </label>
                                <input
                                  type="text"
                                  class="form-control form-control-sm input-validar"
                                  id="segundoApe"
                                  name="segundoApe"
                                  value={segundoApe}
                                  onChange={handleSecondLastNameChange}
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtCorreo">Correo</label>
                                <input
                                  type="email"
                                  class="form-control form-control-sm input-validar"
                                  id="email"
                                  name="email"
                                  value={email}
                                  onChange={handleEmailChange}
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtContraseña">Contraseña</label>
                                <input
                                  type="password"
                                  class="form-control form-control-sm input-validar"
                                  id="contrasena"
                                  name="contrasena"
                                  value={contrasena}
                                  onChange={handlePasswordChange}
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtConfirmarContraseña">
                                  Confirmar Contraseña
                                </label>
                                <input
                                  type="password"
                                  class="form-control form-control-sm input-validar"
                                  id="confirmContrasena"
                                  name="confirmContrasena"
                                  value={confirmContrasena}
                                  onChange={handleConfirmPasswordChange}
                                />
                              </div>
                              <div class="form-group col-sm-6">
                                <label for="txtRol">Tipo Usuario</label>
                                <select
                                  class="custom-select"
                                  id="rolId"
                                  name="rolId"
                                  value={rolId}
                                  onChange={handleRolChange}
                                >
                                  <option value="Psicologo">Psicologo</option>
                                  <option value="Administrador">
                                    Administrador
                                  </option>
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
                        onClick={createUser}
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
    </React.Fragment>
  );
}
