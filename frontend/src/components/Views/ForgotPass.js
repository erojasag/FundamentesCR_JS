import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../layouts/footer';
import { ToastContainer, toast } from 'react-toastify';

export default function ForgotPass() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        email,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}usuarios/olvidarContrasena`,
        data
      );

      if (response.status !== 200) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        navigate('/');
        return;
      }

      toast.success('Se ha enviado un correo con su nueva contraseña');
      setEmail('');
      navigate('/');
    } catch (err) {
      if (
        err.response.data.message === 'No hay un usuario asociado a este correo'
      ) {
        toast.error('El correo ingresado no existe');
        return;
      }
      toast.error('El correo ingresado no existe');
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
                          ¿Olvidó su contraseña?
                        </h1>
                        <p className="mb-4">
                          Ingrese su correo de sesión y le enviaremos una nueva
                          contraseña
                        </p>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            name="Correo"
                            placeholder="Ingrese su correo"
                            value={email}
                            onChange={handleEmailChange}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Reestablecer Contraseña
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="/">
                          Iniciar Sesión
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
