import React, { useState } from 'react';
import axios from 'axios';

function Registrarse() {
  const [Nombre, setNombre] = useState('');
  const [Apellido1, setApellido1] = useState('');
  const [Apellido2, setApellido2] = useState('');
  const [Cedula, setCedula] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Contrasena, setContrasena] = useState('');
  const [ConfirmaContrasena, setConfirmaContrasena] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.currentTarget.value);
  };
  const handleApellido1Change = (event) => {
    setApellido1(event.currentTarget.value);
  };
  const handleApellido2Change = (event) => {
    setApellido2(event.currentTarget.value);
  };
  const handleCedulaChange = (event) => {
    setCedula(event.currentTarget.value);
  };
  const handleCorreoChange = (event) => {
    setCorreo(event.currentTarget.value);
  };
  const handleContrasenaChange = (event) => {
    setContrasena(event.currentTarget.value);
  };
  const handleConfirmaContrasenaChange = (event) => {
    setConfirmaContrasena(event.currentTarget.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        Nombre,
        Apellido1,
        Apellido2,
        Cedula,
        Correo,
        Contrasena,
        ConfirmaContrasena,
      };
      await axios.post('http://localhost:3000/users/signup', data);

      setNombre('');
      setApellido1('');
      setApellido2('');
      setCedula('');
      setCorreo('');
      setContrasena('');
      setConfirmaContrasena('');
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
                            value={Nombre}
                            onChange={handleNombreChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            placeholder="Primer Apellido"
                            value={Apellido1}
                            onChange={handleApellido1Change}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            placeholder="Segundo Apellido"
                            value={Apellido2}
                            onChange={handleApellido2Change}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control form-control-user"
                            placeholder="Cedula"
                            value={Cedula}
                            onChange={handleCedulaChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="Correo"
                            class="form-control form-control-user"
                            placeholder="Correo"
                            value={Correo}
                            onChange={handleCorreoChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            placeholder="Contraseña"
                            value={Contrasena}
                            onChange={handleContrasenaChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            placeholder=" Confirmar Contraseña"
                            value={ConfirmaContrasena}
                            onChange={handleConfirmaContrasenaChange}
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
                          Ingresar
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Registrarse;
