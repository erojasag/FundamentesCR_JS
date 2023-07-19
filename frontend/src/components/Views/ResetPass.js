import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../layouts/footer';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cookies from 'js-cookie';

export default function ResetPass() {
  const { token } = useParams();
  const [contrasena, setPassword] = useState('');
  const [confirmContrasena, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        contrasena,
        confirmContrasena,
      };
      const route = `${process.env.REACT_APP_BACKEND_API}usuarios/reiniciarContrasena/${token}`;
      const response = await axios.patch(route, data);

      if (response.status !== 200) {
        const message = `An error has occured: ${response.statusText}`;
        return;
      }

      setPassword('');
      setConfirmPassword('');
      if (response.status === 200) {
        Cookies.set('jwt', response.data.token, { expires: 1 });
        Cookies.set('id', response.data.data.user.usuarioId, { expires: 1 });
        Cookies.set('rol', response.data.data.user.rol.nombreRol, {
          expires: 1,
        });

        Cookies.set(
          'nombre',
          response.data.data.user.nombre +
            ' ' +
            response.data.data.user.primerApe
        );

        setConfirmPassword('');
        setPassword('');
        navigate('/Inicio');
      }

      navigate('/inicio');
    } catch (err) {
      console.log(err.response.data.message);
      if (err.response.data.message) {
        toast.error(
          'Las contrasenas no son iguales. Por favor intente de nuevo.'
        );
        return;
      }
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-2">
                          Resetea tu contraseña
                        </h1>
                        <p className="mb-4">
                          Ingrese su contraseña y su confirmacion de contraseña
                        </p>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <div className="input-with-icon">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              className="form-control form-control-user"
                              placeholder="Contraseña"
                              value={contrasena}
                              onChange={handlePasswordChange}
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
                          <br />
                          <div className="input-with-icon">
                            <input
                              type={showPassword2 ? 'text' : 'password'}
                              className="form-control form-control-user"
                              placeholder="
                              Confirma tu Contraseña"
                              value={confirmContrasena}
                              onChange={handleConfirmPasswordChange}
                            />
                            <button
                              type="button"
                              className="btn btn-link password-toggle"
                              onClick={toggleShowPassword2}
                            >
                              <FontAwesomeIcon
                                icon={showPassword2 ? faEyeSlash : faEye}
                                className="password-icon"
                              />
                            </button>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Ingresar
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer />
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
