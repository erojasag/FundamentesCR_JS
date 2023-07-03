import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../layouts/footer';
import Cookies from 'js-cookie';

export default function Activacion() {
  const { token } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleContrasenaChange = (event) => {
    setData({
      ...data,
      contrasena: event.currentTarget.value,
    });
  };

  const handleConfirmContrasenaChange = (event) => {
    setData({
      ...data,
      confirmContrasena: event.currentTarget.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = {
        contrasena: data.contrasena,
        confirmContrasena: data.confirmContrasena,
      };
      const response = await axios.patch(
        `http://localhost:3000/usuarios/activarUsuario/${token}`,
        body
      );

      if (response.status !== 200) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      Cookies.set('jwt', response.data.token);
      Cookies.set('id', response.data.data.user.usuarioId, { expires: 1 });
      Cookies.set('rol', response.data.data.user.rol.nombreRol, {
        expires: 1,
      });
      Cookies.set(
        'nombre',
        response.data.data.user.nombre + ' ' + response.data.data.user.primerApe
      );
      navigate('/Inicio');
    } catch (error) {
      console.log(error);
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
                          Activa tu cuenta
                        </h1>
                        <p className="mb-4">Ingresa tu nueva contraseña</p>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            name="password"
                            placeholder="Contraseña"
                            value={data.contrasena}
                            onChange={handleContrasenaChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            name="password"
                            placeholder="Confirme su contraseña"
                            value={data.confirmContrasena}
                            onChange={handleConfirmContrasenaChange}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                          onClick={handleSubmit}
                        >
                          Activar cuenta
                        </button>
                      </form>
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
