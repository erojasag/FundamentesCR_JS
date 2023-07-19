import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error401 from './Error401';

export default function Perfil() {
  const [jwtExpired, setJwtExpired] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nombre: '',
    primerApe: '',
    segundoApe: '',
    email: '',
    rol: {
      nombreRol: '',
    },
  });

  const handleNombreChange = (event) => {
    const updatedUserData = {
      ...userData,
      nombre: event.currentTarget.value,
    };
    setUserData(updatedUserData);
  };

  const handlePrimerApeChange = (event) => {
    const updatedUserData = {
      ...userData,
      primerApe: event.currentTarget.value,
    };
    setUserData(updatedUserData);
  };

  const handleSegundoApeChange = (event) => {
    const updatedUserData = {
      ...userData,
      segundoApe: event.currentTarget.value,
    };
    setUserData(updatedUserData);
  };

  const handleEmailChange = (event) => {
    const updatedUserData = {
      ...userData,
      email: event.currentTarget.value,
    };
    setUserData(updatedUserData);
  };

  const getUserData = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}usuarios/${Cookies.get('id')}`,
        {
          headers,
        }
      );

      setUserData(response.data.data.data);
    } catch (err) {
      if (err.response.data.message === 'jwt expired') {
        setJwtExpired(true);
        return;
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (jwtExpired) {
    return <Error401 />;
  }

  const handleGuardarCambios = async (event) => {
    try {
      event.preventDefault();
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };

      if (
        !userData.nombre ||
        !userData.primerApe ||
        !userData.segundoApe ||
        !userData.email
      ) {
        toast.error('Por favor ingrese todos los datos', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }

      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_API}usuarios/actualizarMiPerfil`,
        userData,
        { headers }
      );

      console.log(response);

      if (response.status === 200) {
        Cookies.set('nombre', userData.nombre + ' ' + userData.primerApe);
        toast.success('Datos Actualizados con éxito', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.reload();
      }
    } catch (err) {
      console.log(err);

      if (err.response.status === 401) {
        toast.error('Error al actualizar los datos', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      if (err.response.data.err.message === 'jwt expired') {
        navigate('/');
      }
    }
  };

  return (
    <React.Fragment>
      <div id="page-top">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <ToastContainer />
              <form>
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-sm-6">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3 bg-second-primary">
                          <h6 className="m-0 font-weight-bold text-white">
                            <i className="fas fa-user"></i> Editar mi perfil
                          </h6>
                        </div>
                        <div className="card-body text-center">
                          <div className="form-row">
                            <div className="form-group col-sm-10 mx-auto">
                              <img
                                id="imgFoto"
                                src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=300"
                                className="rounded mx-auto d-block"
                                style={{ width: '200px', height: '200px' }}
                                alt="Profile"
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-sm-10 mx-auto">
                              <label htmlFor="txtNombre">Nombre</label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                value={userData.nombre}
                                onChange={handleNombreChange}
                                id="txtNombre"
                                style={{ textAlign: 'center' }}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-sm-10 mx-auto">
                              <label htmlFor="txtPrimerApellido">
                                Primer Apellido
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                value={userData.primerApe}
                                onChange={handlePrimerApeChange}
                                id="txtPrimerApellido"
                                style={{ textAlign: 'center' }}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-sm-10 mx-auto">
                              <label htmlFor="txtSegundoApellido">
                                Segundo Apellido
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                value={userData.segundoApe}
                                onChange={handleSegundoApeChange}
                                id="txtSegundoApellido"
                                style={{ textAlign: 'center' }}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-sm-10 mx-auto">
                              <label htmlFor="txtCorreo">Correo</label>
                              <input
                                type="email"
                                className="form-control form-control-sm"
                                id="txtCorreo"
                                value={userData.email}
                                onChange={handleEmailChange}
                                style={{ textAlign: 'center' }}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-sm-10 mx-auto">
                              <label htmlFor="txtRol">Rol</label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                disabled
                                id="txtRol"
                                value={userData.rol.nombreRol}
                                style={{ textAlign: 'center' }}
                              />
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-10 mx-auto">
                              <button
                                type="button"
                                className="btn btn-success btn-sm btn-block"
                                id="btnGuardarCambios"
                                onClick={handleGuardarCambios}
                              >
                                Guardar Cambios
                              </button>
                              <br />
                              <a
                                type="button"
                                className="btn btn-warning btn-sm btn-block"
                                href="/cambiarMiContrasena"
                              >
                                Cambiar Contraseña
                              </a>
                              <br />
                              <a
                                type="button"
                                className="btn btn-danger btn-sm btn-block"
                                href="/inicio"
                              >
                                Cancelar
                              </a>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
