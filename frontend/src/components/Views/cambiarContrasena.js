import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../layouts/sideMenu';
import Footer from '../layouts/footer';
import Navbar from '../layouts/navbar';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function CambiarContrasena() {
  const [currentContrasena, setCurrentContrasena] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmContrasena, setConfirmContrasena] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirm, setShowNewPasswordConfirm] = useState(false);
  const navigate = useNavigate();

  const handleCurrentContrasenaChange = (event) => {
    setCurrentContrasena(event.currentTarget.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.currentTarget.value);
  };

  const handleConfirmContrasenaChange = (event) => {
    setConfirmContrasena(event.currentTarget.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowNewPasswordConfirm = () => {
    setShowNewPasswordConfirm(!showNewPasswordConfirm);
  };
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };

      if (!currentContrasena || !contrasena || !confirmContrasena) {
        toast.warn('Porfavor llene todos los campos', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      if (contrasena !== confirmContrasena) {
        toast.error('Las contrasenas no coinciden', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      const data = {
        currentContrasena,
        contrasena,
        confirmContrasena,
      };
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_API}usuarios/actualizarMiContrasena/`,
        data,
        { headers }
      );
      if (response.status === 200) {
        setCurrentContrasena('');
        setContrasena('');
        setConfirmContrasena('');

        toast.success('Contraseña cambiada con éxito', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        Cookies.set('jwt', response.data.token, { expires: 1 });
      }
    } catch (err) {
      if (err.response.status === 401) {
        toast.error('La contraseña actual es incorrecta', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      if (err.response.status === 403) {
        toast.error(
          'Su sesion a expirado,\n Porfavor inicie sesion de nuevo',
          {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        navigate('/');
      }
    }
  }

  return (
    <React.Fragment>
      <div id="wrapper">
        <SideMenu />
        <div id="content-wrapper" className="d-flex flex-column ">
          <Navbar />
          <div className="container">
            <div className="col-sm-6">
              <form>
                <div className="card shadow mb-5 mx-auto ">
                  <div className="card-header py-3 bg-second-primary ">
                    <h6 className="m-0 font-weight-bold text-white">
                      <i className="fas fa-key"></i> Cambiar Contraseña
                    </h6>
                  </div>
                  <div className="card-body ">
                    <div className="form-row justify-content-center">
                      <div className="form-group col-sm-6 ">
                        <div className="form-group position-relative">
                          <div className="input-with-icon">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              className="form-control form-control-user"
                              placeholder="Contraseña Actual"
                              value={currentContrasena}
                              onChange={handleCurrentContrasenaChange}
                            />
                            <button
                              type="button"
                              className="btn btn-link password-toggle"
                              onClick={toggleShowPassword}
                            >
                              <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className="password-icon"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-row justify-content-center">
                      <div className="form-group col-sm-6">
                        <div className="form-group position-relative">
                          <div className="input-with-icon">
                            <input
                              type={showNewPassword ? 'text' : 'password'}
                              className="form-control form-control-user"
                              placeholder="Nueva Contraseña"
                              value={contrasena}
                              onChange={handleContrasenaChange}
                            />
                            <button
                              type="button"
                              className="btn btn-link password-toggle"
                              onClick={toggleShowNewPassword}
                            >
                              <FontAwesomeIcon
                                icon={showNewPassword ? faEyeSlash : faEye}
                                className="password-icon"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-row justify-content-center">
                      <div className="form-group col-sm-6">
                        <div className="form-group position-relative">
                          <div className="input-with-icon">
                            <input
                              type={
                                showNewPasswordConfirm ? 'text' : 'password'
                              }
                              className="form-control form-control-user"
                              placeholder="Confirma Contraseña"
                              value={confirmContrasena}
                              onChange={handleConfirmContrasenaChange}
                            />
                            <button
                              type="button"
                              className="btn btn-link password-toggle"
                              onClick={toggleShowNewPasswordConfirm}
                            >
                              <FontAwesomeIcon
                                icon={
                                  showNewPasswordConfirm ? faEyeSlash : faEye
                                }
                                className="password-icon"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row justify-content-center">
                      <div className="col-sm-6 d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          id="btnCambiarClave"
                          onClick={handleSubmit}
                        >
                          Guardar Cambios
                        </button>
                        &nbsp;
                        <a
                          class="btn btn-danger btn-sm"
                          type="button"
                          id="btnVolver"
                          href="/perfil"
                        >
                          Cancelar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
