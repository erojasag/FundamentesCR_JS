import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../layouts/sideMenu';
import Footer from '../layouts/footer';
import Navbar from '../layouts/navbar';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CambiarContrasena() {
  const [currentContrasena, setCurrentContrasena] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmContrasena, setConfirmContrasena] = useState('');
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
        `http://localhost:3000/usuarios/actualizarMiContrasena/`,
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
      }

      navigate('/Login');
    } catch (err) {
      console.log(err.response.status);
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
        setCurrentContrasena('');
        setContrasena('');
        setConfirmContrasena('');
      }
      if (err.response.status === 403) {
        toast.success(
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
        navigate('/Login');
      }
    }
  }

  return (
    <React.Fragment>
      <div id="page-top">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" className="d-flex flex-column">
            <Navbar />
            <div className="container">
              <div className="col-sm-6 justify-center">
                <form>
                  <div className="card shadow mb-5 mx-auto">
                    <div className="card-header py-3 bg-second-primary">
                      <h6 className="m-0 font-weight-bold text-white">
                        <i className="fas fa-key"></i> Cambiar Contraseña
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="form-row">
                        <div className="form-group col-sm-6">
                          <label htmlFor="txtClaveActual">
                            Contraseña Actual
                          </label>
                          <input
                            type="password"
                            className="form-control form-control-sm input-validar"
                            id="txtClaveActual"
                            name="Clave Actual"
                            value={currentContrasena}
                            onChange={handleCurrentContrasenaChange}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-sm-6">
                          <label htmlFor="txtClaveNueva">
                            Nueva Contraseña
                          </label>
                          <input
                            type="password"
                            className="form-control form-control-sm input-validar"
                            id="txtClaveNueva"
                            name="Clave Nueva"
                            value={contrasena}
                            onChange={handleContrasenaChange}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-sm-6">
                          <label htmlFor="txtConfirmarClave">
                            Confirmar Contraseña
                          </label>
                          <input
                            type="password"
                            className="form-control form-control-sm input-validar"
                            id="txtConfirmarClave"
                            name="Confirmar Clave"
                            value={confirmContrasena}
                            onChange={handleConfirmContrasenaChange}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-6 d-flex justify-content-between">
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
      </div>
    </React.Fragment>
  );
}
