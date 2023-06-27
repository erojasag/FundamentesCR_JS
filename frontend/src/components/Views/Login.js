import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Footer from '../layouts/footer';
import ErrorPopUp from '../layouts/errorPopUp';
import Loading from '../layouts/loading';

export default function Login() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordChange = (event) => {
    setContrasena(event.currentTarget.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!email || !contrasena) {
        setErrorMessage('Por favor ingrese un usuario y una contrasena');
        return;
      }
      const data = {
        email,
        contrasena,
      };

      setLoading(true);
      const response = await axios.post(
        'http://localhost:3000/usuarios/login',
        data
      );
      Cookies.set('jwt', response.data.token, { expires: 1 });
      Cookies.set('id', response.data.data.user.usuarioId, { expires: 1 });
      Cookies.set('rol', response.data.data.user.rol.nombreRol, {
        expires: 1,
      });

      Cookies.set(
        'nombre',
        response.data.data.user.nombre + ' ' + response.data.data.user.primerApe
      );
      setEmail('');
      setContrasena('');
      navigate('/Inicio');
    } catch (err) {
      let errMessage = JSON.parse(err.request.response);
      errMessage = errMessage.message;
      if (errMessage === 'Correo o contraseña incorrectos') {
        setErrorMessage(errMessage);
      }
      if (errMessage === 'El usuario no existe') {
        window.location.reload();
        setErrorMessage(errMessage);
      }
      setErrorMessage(null);
      window.location.reload();
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 10000);
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
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Bienvenido</h1>
                      </div>

                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            placeholder="email"
                            value={email}
                            onChange={handleEmailChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            placeholder="Contraseña"
                            value={contrasena}
                            onChange={handlePasswordChange}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="chkMantenerSesion"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="chkMantenerSesion"
                            >
                              Mantener Sesión
                            </label>
                          </div>
                        </div>
                        {loading ? (<Loading />):(
                        <button className="btn btn-primary btn-user btn-block">Iniciar</button>
                        )}
                        {errorMessage && <ErrorPopUp message={errorMessage} />}
                      </form>
                      <div className="text-center">
                        <a className="small" href="OlvideMiContrasena">
                          ¿Olvidó su contraseña?
                        </a>
                      </div>
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
