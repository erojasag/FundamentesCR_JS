import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../layouts/footer';
import Cookies from 'js-cookie';

export default function Registrarse() {
  const [name, setName] = useState('');
  const [firstLastName, setFirstLastName] = useState('');
  const [secondLastName, setSecondLastName] = useState('');
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.currentTarget.value);
  };
  const handleFirstLastNameChange = (event) => {
    setFirstLastName(event.currentTarget.value);
  };
  const handleSecondLastNameChange = (event) => {
    setSecondLastName(event.currentTarget.value);
  };
  const handleCedulaChange = (event) => {
    setCedula(event.currentTarget.value);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        name,
        firstLastName,
        secondLastName,
        cedula,
        email,
        password,
        confirmPassword,
      };
      const response = await axios.post(
        'http://localhost:3000/users/signup',
        data
      );
      if (response.status !== 201) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      Cookies.set('jwt', response.data.token, { expires: 1 });
      Cookies.set('id', response.data.data.user.IdUser, { expires: 1 });
      Cookies.set('role', response.data.data.user.UserType.Description, {
        expires: 1,
      });
      setName('');
      setFirstLastName('');
      setSecondLastName('');
      setCedula('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/Inicio');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Bienvenido</h1>
                      </div>
                      <form class="user" onSubmit={handleSubmit}>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            placeholder="Nombre"
                            value={name}
                            onChange={handleNameChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            placeholder="Primer Apellido"
                            value={firstLastName}
                            onChange={handleFirstLastNameChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            placeholder="Segundo Apellido"
                            value={secondLastName}
                            onChange={handleSecondLastNameChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control form-control-user"
                            placeholder="Cedula"
                            value={cedula}
                            onChange={handleCedulaChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="Correo"
                            class="form-control form-control-user"
                            placeholder="Correo"
                            value={email}
                            onChange={handleEmailChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            placeholder="Contraseña"
                            value={password}
                            onChange={handlePasswordChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            placeholder=" Confirmar Contraseña"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                          />
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="chkMantenerSesion"
                            />
                            <label
                              class="custom-control-label"
                              for="chkMantenerSesion"
                            >
                              Mantener Sesión
                            </label>
                          </div>
                        </div>

                        <button
                          type="submit"
                          class="btn btn-primary btn-user btn-block"
                        >
                          Registrarse
                        </button>

                        <a class="btn btn-primary btn-user btn-block" href="/">
                          Cancelar
                        </a>
                      </form>
                      <hr />
                      <div class="text-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
