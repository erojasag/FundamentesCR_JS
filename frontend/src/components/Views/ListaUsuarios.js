import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SideMenu from '../layouts/sideMenu';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Loading from '../layouts/loading';
import Error403 from './Error403';

export default function ListaUsuarios() {
  const [userData, setUserData] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isForbidden, setIsForbidden] = useState(false);
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setNewUser({
      ...newUser,
      nombre: event.currentTarget.value,
    });
  };
  const handleFirstLastNameChange = (event) => {
    setNewUser({
      ...newUser,
      primerApe: event.currentTarget.value,
    });
  };
  const handleSecondLastNameChange = (event) => {
    setNewUser({
      ...newUser,
      segundoApe: event.currentTarget.value,
    });
  };
  const handleEmailChange = (event) => {
    setNewUser({
      ...newUser,
      email: event.currentTarget.value,
    });
  };

  const handleRolChange = (event) => {
    setNewUser({
      ...newUser,
      rol: {
        // Add the rol object if it doesn't exist
        ...newUser.rol,
        nombreRol: event.currentTarget.value,
      },
    });
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      const response = await axios.get('http://localhost:3000/usuarios/', {
        headers,
      });
      if (response.status !== 200) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      if (response.status === 401) {
        navigate('/Login');
      }

      if (response.status === 403) {
        setIsForbidden(true);
        return;
      }

      setUserData(response.data.data.users);
      setLoading(false);
    } catch (err) {
      console.log();
      if (err.response.data.err.message === 'jwt expired') {
        navigate('/');
      }
      if (err.response.status === 403) {
        setIsForbidden(true);
        return;
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deactivateUser = async (usuarioId) => {
    try {
      setLoading(true);
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
      console.log(response);
      if (response.status === 204) {
        toast.success('Usuario desactivado con éxito');
        setLoading(false);
      }
    } catch (err) {
      if (err.response.data.err.message === 'jwt expired') {
        toast.error('Su sesión ha expirado, porfavor inicie sesión nuevamente');
        navigate('/');
      }
      if (err.response.status === 403) {
        setIsForbidden(true);
        return;
      }
    } finally {
      fetchData();
    }
  };

  const createUser = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };

      const body = {
        nombre: newUser.nombre,
        primerApe: newUser.primerApe,
        segundoApe: newUser.segundoApe,
        email: newUser.email,
        rol: {
          nombreRol: newUser.rol.nombreRol,
        },
        contrasena: '',
        confirmContrasena: '',
      };
      const response = await axios.post(
        'http://localhost:3000/usuarios/',
        body,
        {
          headers,
        }
      );
      if (response.status === 201) {
        setLoading(true);
        window.location.reload();
      }
    } catch (err) {
      if (err.response.data.err.message === 'jwt expired') {
        navigate('/');
      }
      if (err.response.status === 403) {
        setIsForbidden(true);
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  const getUsuarios = () => {
    return userData.map((user) => (
      <tr key={user.usuarioId}>
        <td>{user.nombre} </td>
        <td>{user.primerApe + ' ' + user.segundoApe}</td>
        <td>{user.email}</td>
        <td>{user.rol.nombreRol}</td>
        <td>
          <a
            href={`usuarios/${user.usuarioId}`}
            className="btn btn-primary btn-sm"
          >
            <i className="fas fa-pencil-alt"></i>
          </a>
          &nbsp; &nbsp;
          <a
            href="desactivarPaciente"
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
            {isForbidden ? (
              <Error403 />
            ) : (
              <>
                <div class="container-fluid">
                  <div class="card shadow mb-4 m-overflow">
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
                  {loading && <Loading />}
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
                            Desactivar Usuario
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
                            Cancelar
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            data-dismiss="modal"
                            onClick={() => deactivateUser(selectedUserId)}
                          >
                            Desactivar
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
                    {loading && <Loading />}
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
                                      value={userData.nombre}
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
                                      value={userData.primerApe}
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
                                      value={userData.segundoApe}
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
                                      value={userData.email}
                                      onChange={handleEmailChange}
                                    />
                                  </div>
                                  <div class="form-group col-sm-6">
                                    <label for="txtRol">Tipo Usuario</label>
                                    <select
                                      class="custom-select"
                                      id="rolId"
                                      name="rolId"
                                      value={userData.rolId}
                                      onChange={handleRolChange}
                                    >
                                      <option value="">
                                        -No seleccionado-
                                      </option>
                                      <option value="Psicologo">
                                        Psicologo
                                      </option>
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
              </>
            )}
          </div>
          <Footer />
        </div>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
}
