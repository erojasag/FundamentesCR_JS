import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Footer from '../layouts/footer';
import ErrorPopUp from '../layouts/errorPopUp';
// import UsuariosDropdown from '../layouts/usuariosDropdown';
export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!email || !password) {
        setErrorMessage('Por favor ingrese un usuario y una contrasena');
        return;
      }
      const data = {
        email,
        password,
      };
      const response = await axios.post(
        'http://localhost:3000/usuarios/login',
        data
      );
      console.log(response);
      if (!response.status) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        navigate('/');
        return;
      }

      Cookies.set('jwt', response.data.token, { expires: 1 });
      Cookies.set('id', response.data.data.user.IdUser, { expires: 1 });
      Cookies.set('role', response.data.data.user.UserType.Description, {
        expires: 1,
      });
      setEmail('');
      setPassword('');
      navigate('/Inicio');
    } catch (err) {
      console.log(err);
      let errMessage = JSON.parse(err.request.response);
      errMessage = errMessage.message;
      if (errMessage === 'Correo o contraseña incorrectos') {
        console.log(errMessage);
        setErrorMessage(errMessage);
      }
      if (errMessage === 'El usuario no existe') {
        setErrorMessage(errMessage);
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
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  {/* <UsuariosDropdown /> */}
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
                            value={password}
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

                        <button className="btn btn-primary btn-user btn-block">
                          Iniciar
                        </button>
                        <a
                          className="btn btn-primary btn-user btn-block"
                          href="Registrarse"
                        >
                          Registrarse
                        </a>
                      </form>
                      {errorMessage && <ErrorPopUp message={errorMessage} />}
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
