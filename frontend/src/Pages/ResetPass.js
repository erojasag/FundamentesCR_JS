import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../utils/footer';

export default function ResetPass() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        password,
        confirmPassword,
      };
      const route = `http://localhost:3000/users/resetPassword/${token}`;
      const response = await axios.patch(route, data);
      console.log(response);

      if (response.status !== 200) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        navigate('/');
        return;
      }

      setPassword('');
      setConfirmPassword('');
      navigate('/');
    } catch (err) {
      window.alert(`Record id: ${token} not found`);
      navigate('/');
      return;
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
                          <input
                            type="password"
                            className="form-control form-control-user"
                            name="Contraseña"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={handlePasswordChange}
                          />
                          <br />
                          <input
                            type="password"
                            className="form-control form-control-user"
                            name="ConfirmaContraseña"
                            placeholder="Confirme su contraseña"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                          />
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
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
