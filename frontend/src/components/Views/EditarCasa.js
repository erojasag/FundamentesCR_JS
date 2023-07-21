import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Error403 from './Error403';

export default function EditarPaciente() {
  const { id } = useParams();
  const [casaData, setCasaData] = useState([]);
  const [isForbidden, setIsForbidden] = useState(false);

  const navigate = useNavigate();
  const handleNombreCasaChange = (event) => {
    setCasaData({
      ...casaData,
      nombreCasa: event.currentTarget.value,
    });
  };

  const handleCantonChange = (event) => {
    setCasaData({
      ...casaData,
      canton: event.currentTarget.value,
    });
  };

  const handleProvinciaChange = (event) => {
    setCasaData({
      ...casaData,
      provincia: event.currentTarget.value,
    });
  };

  const handleDireccionChange = (event) => {
    setCasaData({
      ...casaData,
      direccion: event.currentTarget.value,
    });
  };

  async function fetchCasa() {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}casas/${id}`,
        {
          headers,
        }
      );

      if (Cookies.get('rol') !== 'Administrador') {
        setIsForbidden(true);
      }
      const data = response.data.data.data;
      setCasaData(data);
    } catch (err) {}
  }

  useEffect(() => {
    fetchCasa();
  }, []);

  const handleGuardarCambios = async (event) => {
    event.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };

    const body = {
      nombreCasa: casaData.nombreCasa,
      canton: casaData.canton,
      provincia: casaData.provincia,
      direccion: casaData.direccion,
    };
    await axios.patch(
      `${process.env.REACT_APP_BACKEND_API}casas/${casaData.casaId}`,
      body,
      {
        headers,
      }
    );
    navigate('/listaCasas');
  };

  return (
    <div id="wrapper">
      <SideMenu />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          {isForbidden ? (
            <Error403 />
          ) : (
            <>
              <div class="container-fluid">
                <div class="card shadow mb-4">
                  <div class="card-header py-3 bg-second-primary">
                    <h6 class="m-0 font-weight-bold text-white">
                      Editar Casa EscuchArte
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-12">
                        <form onSubmit={handleGuardarCambios}>
                          <div class="row">
                            <input type="hidden" value="0" id="txtId" />
                            <div class="row">
                              <div class="col-sm-8">
                                <div class="form-row">
                                  <div class="form-group col-sm-6">
                                    <label for="txtnombreCasa">Nombre</label>
                                    <input
                                      type="text"
                                      class="form-control form-control-sm input-validar"
                                      id="nombreCasa"
                                      name="nombreCasa"
                                      value={casaData.nombreCasa}
                                      onChange={handleNombreCasaChange}
                                    />
                                  </div>
                                  <div class="form-group col-sm-6">
                                    <label for="txtcanton">Canton</label>
                                    <input
                                      type="text"
                                      class="form-control form-control-sm input-validar"
                                      id="canton"
                                      name="canton"
                                      value={casaData.canton}
                                      onChange={handleCantonChange}
                                    />
                                  </div>
                                  <div class="form-group col-sm-6">
                                    <label for="txtprovincia">Provincia</label>
                                    <select
                                      class="custom-select"
                                      id="provincia"
                                      name="provincia"
                                      value={casaData.provincia}
                                      onChange={handleProvinciaChange}
                                    >
                                      <option selected>
                                        Seleccione una provincia
                                      </option>
                                      <option value="San Jose">San Jose</option>
                                      <option value="Cartago">Cartago</option>
                                      <option value="Heredia">Heredia</option>
                                      <option value="Alajuela">Alajuela</option>
                                      <option value="Limon">Limon</option>
                                      <option value="Guanacaste">
                                        Guanacaste
                                      </option>
                                      <option value="Puntarenas">
                                        Puntarenas
                                      </option>
                                    </select>
                                  </div>

                                  <div class="form-group col-sm-6">
                                    <label for="txtDireccion">Direccion</label>
                                    <input
                                      type="text"
                                      class="form-control form-control-sm input-validar"
                                      id="direccion"
                                      name="direccion"
                                      value={casaData.direccion}
                                      onChange={handleDireccionChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <button
                            class="btn btn-success btn-sm"
                            type="button"
                            id="btnGuardarCambios"
                            onClick={handleGuardarCambios}
                          >
                            Guardar Cambios
                          </button>
                          &nbsp; &nbsp;
                          <a
                            class="btn btn-danger btn-sm"
                            type="button"
                            id="btnGuardarCambios"
                            href="/listaCasas"
                          >
                            Cancelar
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
