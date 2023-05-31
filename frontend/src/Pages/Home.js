import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [Correo, setCorreo] = useState('');
  const [Contrasena, setContrasena] = useState('');

  const handleCorreoChange = (event) => {
    setCorreo(event.currentTarget.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.currentTarget.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        Correo,
        Contrasena,
      };
      const response = await axios.post(
        'http://localhost:3000/users/login',
        data
      );
      console.log(response);
      setCorreo('');
      setContrasena('');
    } catch (err) {
      console.log(err);
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
                            placeholder="Correo"
                            value={Correo}
                            onChange={handleCorreoChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            placeholder="Contraseña"
                            value={Contrasena}
                            onChange={handleContrasenaChange}
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
                        <a
                          className="btn btn-primary btn-user btn-block"
                          href="Registrarse"
                        >
                          Registrarse
                        </a>
                        <button className="btn btn-primary btn-user btn-block">
                          <Link to="/Inicio"></Link>
                          Iniciar
                        </button>
                      </form>

                      <div className="text-center">
                        <a className="small" href="forgotPass">
                          ¿Olvidó su contraseña?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
