import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../layouts/sideMenu';
import Cookies from 'js-cookie';
import axios from 'axios';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Loading from '../layouts/loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ListaUsuariosInactivos() {
  const [userData, setUserData] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const response = await axios.get(
      'http://localhost:3000/usuarios/usuariosInactivos/',
      {
        headers,
      }
    );
    if (response.status !== 200) {
      const message = `An error has occured: ${response.statusText}`;
      window.alert(message);
      return;
    }

    if (response.status === 401) {
      navigate('/Login');
    }

    setUserData(response.data.data.users);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const activateUser = async (usuarioId) => {
    setLoading(true);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };

    const response = await axios.patch(
      `http://localhost:3000/usuarios/activarUsuario/${usuarioId}`,
      {
        headers,
      }
    );
    if (response.status === 204) {
      window.location.reload();
      setLoading(false);
    }
  };

  const createUser = async () => {
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
    const response = await axios.post('http://localhost:3000/usuarios/', body, {
      headers,
    });
    if (response.status === 201) {
      window.location.reload();
    }
  };

  const getUsuarios = () => {
    return userData.map((user) => (
      <tr key={user.usuarioId}>
        <td>{user.nombre} </td>
        <td>{user.primerApe + ' ' + user.segundoApe}</td>
        <td>{user.email}</td>
        <td>{user.rol.nombreRol}</td>
        <td>{user.activo ? '' : 'No'}</td>
        <td>
          <a
            href="EditarUsuarioLogUsuario"
            class="btn btn-success btn-sm"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => setSelectedUserId(user.usuarioId)}
          >
            <FontAwesomeIcon
              icon={faCheck}
              bounce
              style={{ color: '#f2f2f2' }}
            />
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
                    Usuarios Inactivos
                  </h6>
                </div>
                <div class="card-body">
                  <div class="row"></div>
                  <br />
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
                            <th>Esta Activo?</th>
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
                        Activar Usuario
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
                      <p>¿Seguro que desea reactivar el usuario?</p>
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
                        class="btn btn-success"
                        data-dismiss="modal"
                        onClick={() => activateUser(selectedUserId)}
                      >
                        &nbsp;Activar&nbsp;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {loading && <Loading />}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
