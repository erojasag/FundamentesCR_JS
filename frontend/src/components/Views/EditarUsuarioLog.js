import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Cookies from 'js-cookie';
import axios from 'axios';

import Loading from '../layouts/loading';
import { ToastContainer, toast } from 'react-toastify';
import Error403 from './Error403';
export default function EditarUsuarioLog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isForbidden, setIsForbidden] = useState(false);
  const [userData, setUserData] = useState({
    nombre: '',
    primerApe: '',
    segundoApe: '',
    email: '',
    contrasena: '',
    confirmContrasena: '',
    rol: {
      nombreRol: '',
    },
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        setLoading(true);
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('jwt')}`,
        };

        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}usuarios/${id}`,
          {
            headers,
          }
        );
        setUserData(response.data.data.data);
        setLoading(false);
      } catch (err) {
        if (err.response.status === 403) {
          setIsForbidden(true);
        }
      }
    };
    getUserData();
  }, []);

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

  const handleRolChange = (event) => {
    setUserData({
      ...userData,
      rol: {
        // Add the rol object if it doesn't exist
        ...userData.rol,
        nombreRol: event.currentTarget.value,
      },
    });
  };
  const sendCambios = async (event) => {
    event.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };

    const response = await axios.patch(
      `${process.env.REACT_APP_BACKEND_API}usuarios/${id}`,
      userData,
      {
        headers,
      }
    );

    if (response.status === 204) {
      toast.success('Usuario editado correctamente', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/usuarios');
      }, 2000);
    }
  };
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideMenu />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            {Cookies.get('rol') === 'Administrador' ? (
              <>
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
                          <form onSubmit={sendCambios}>
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
                                <label for="txtCorreo">Tipo Usuario</label>
                                <select
                                  class="custom-select"
                                  id="cboTipoDocumentoVenta"
                                  value={userData.rol.nombreRol}
                                  onChange={handleRolChange}
                                >
                                  <option value="null">Seleccione</option>
                                  <option value="Administrador">
                                    Administrador
                                  </option>
                                  <option value="Psicologo">Psicologo</option>
                                </select>
                              </div>
                            </div>
                            <button
                              class="btn btn-success btn-sm"
                              type="button"
                              onClick={sendCambios}
                            >
                              Guardar Cambios
                            </button>
                            &nbsp; &nbsp;
                            <a
                              class="btn btn-danger btn-sm"
                              type="button"
                              id="btnVolver"
                              href="/usuarios"
                            >
                              Cancelar
                            </a>
                          </form>
                          {loading && <Loading />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Error403 />
            )}
          </div>
          <ToastContainer />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
