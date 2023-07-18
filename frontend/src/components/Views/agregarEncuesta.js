import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import '@fortawesome/fontawesome-free/css/all.min.css';

export default function AgregarEncuesta() {
  const navigate = useNavigate();
  const [data, setData] = useState([{}]);
  const [dataEncuesta, setDataEncuesta] = useState({
    pacienteId: '',
    nombreCompleto: '',
    edad: '',
    cedula: '',
    calificacion: '',
    recomendacion: '',
    comentarios: '',
  });

  const fetchPacientes = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const response = await axios.get(`https://fundamentes-dev-7bd493ab77ac.herokuapp.com/pacientes/`, {
      headers,
    });
    const pacientes = response.data.data.data;
    pacientes.map((paciente) => {
      setData(pacientes);
    });
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  const handleNombreChange = (event) => {
    const selectedNombreCompleto = event.currentTarget.value;
    const selectedPaciente = data.find(
      (paciente) => paciente.nombreCompleto === selectedNombreCompleto
    );

    setDataEncuesta((prevDataEncuesta) => ({
      ...prevDataEncuesta,
      pacienteId: selectedPaciente.pacienteId,
      nombreCompleto: selectedNombreCompleto,
      edad: selectedPaciente.edad,
      cedula: selectedPaciente.cedula,
    }));
  };

  const handleCalificacionChange = (event) => {
    const { value } = event.currentTarget;
    setDataEncuesta((prevDataEncuesta) => ({
      ...prevDataEncuesta,
      calificacion: parseInt(value),
    }));
  };
  const handleExperienciaChange = (event) => {
    const { value } = event.currentTarget;
    setDataEncuesta((prevDataEncuesta) => ({
      ...prevDataEncuesta,
      experiencia: value,
    }));
  };

  const handleRecomendacionChange = (event) => {
    const { value } = event.currentTarget;
    setDataEncuesta((prevDataEncuesta) => ({
      ...prevDataEncuesta,
      recomendacion: value,
    }));
  };

  const handleComentariosChange = (event) => {
    const { value } = event.currentTarget;
    setDataEncuesta((prevDataEncuesta) => ({
      ...prevDataEncuesta,
      comentarios: value,
    }));
  };

  const handleSubmit = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const response = await axios.post(
      `https://fundamentes-dev-7bd493ab77ac.herokuapp.com/encuestasSatisfaccion/`,
      dataEncuesta,
      {
        headers,
      }
    );
    console.log(response.data.data.data.encuestaSatisfaccionId);

    if (response.status === 201) {
      const responsePaciente = await axios.patch(
        `https://fundamentes-dev-7bd493ab77ac.herokuapp.com/pacientes/${dataEncuesta.pacienteId}`,
        {
          encuestaSatisfaccionId:
            response.data.data.data.encuestaSatisfaccionId,
        },
        {
          headers,
        }
      );
      console.log(responsePaciente);
      if (responsePaciente.status === 201) {
        toast.success('Encuesta guardada con éxito');
        setTimeout(() => {
          navigate('/encuestas');
        }, 2000);
      }
    }
  };

  const handleFormClean = () => {
    setDataEncuesta({
      nombreCompleto: '',
      edad: '',
      cedula: '',
      calificacion: '',
      recomendacion: '',
      comentarios: '',
    });
  };

  return (
    <div id="wrapper">
      <SideMenu />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div class="container-fluid">
            <div class="container">
              <section class="row">
                <div class="col-md-12">
                  <h1 class="text-center">
                    Encuesta de Satisfacción
                  </h1>
                  <p class="text-center">Fundación Fundamentes</p>
                </div>
              </section>
              <br />
              <section class="row">
                <section class="col-md-12">
                  <h3>Datos básicos</h3>
                  <p></p>
                </section>
              </section>
              <form onSubmit={handleSubmit}>
                <section class="row">
                  <section class="col-md-12">
                    <section class="row">
                      <div class="col-md-8">
                        <div class="form-group">
                          <label for="nombreCompleto">Nombre Completo:</label>
                          <div class="form-group col-sm-6">
                            <select
                              class="custom-select"
                              id="paciente"
                              name="paciente"
                              value={dataEncuesta.nombreCompleto}
                              onChange={handleNombreChange}
                            >
                              {!dataEncuesta.nombreCompleto && (
                                <option value="null">-No especifica-</option>
                              )}
                              {data.map((paciente) => (
                                <option
                                  value={paciente.nombreCompleto}
                                  onChange={handleNombreChange}
                                  key={paciente.pacienteId}
                                >
                                  {paciente.nombreCompleto}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form_group">
                          <label for="edadEncuestado">Edad:</label>
                          <input
                            type="number"
                            class="form-control"
                            id="edadEncuestado"
                            placeholder="Edad"
                            maxlength="3"
                            disabled
                            value={dataEncuesta.edad}
                          />
                        </div>
                      </div>
                    </section>
                    <section class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="idIdentificacion">Cedula:</label>
                          <input
                            type="number"
                            id="idIdentificacion"
                            class="form-control"
                            placeholder="Numero de Identificación"
                            maxlength="15"
                            minLength="9"
                            disabled
                            value={dataEncuesta.cedula}
                          />
                        </div>
                      </div>
                    </section>
                  </section>
                </section>
                <hr />
                <br />

                <section class="row">
                  <div class="col-md-12">
                    <h3>Satisfacción</h3>
                    <p></p>
                  </div>
                </section>

                <section className="row">
      <div className="col-md-12">
        <section className="row">
          <div className="col-md-8">
            <p>
              ¿Cómo calificaría su experiencia respecto a los servicios que ha recibido a través de la fundación?
            </p>
          </div>
        </section>

        <div className="wrapper">
          <div className="encuesta">
            <div className="rating">
              <input
                type="radio"
                id="rating5"
                name="calificacion"
                value={1}
                onChange={handleCalificacionChange}
              />
              <label
                htmlFor="rating5"
                title="Muy Malo"
                className="fa-regular fa-face-frown fa-3x"
                style={{ color: 'red' }}
              ></label>
              <input
                type="radio"
                id="rating4"
                name="calificacion"
                value={2}
                onChange={handleCalificacionChange}
              />
              <label
                htmlFor="rating4"
                title="Malo"
                className="fa-regular fa-face-frown-open fa-3x"
                style={{ color: 'orange' }}
              ></label>
              <input
                type="radio"
                id="rating3"
                name="calificacion"
                value={3}
                onChange={handleCalificacionChange}
              />
              <label
                htmlFor="rating3"
                title="Regular"
                className="fa-regular fa-face-meh fa-3x"
                style={{ color: 'rgb(226, 226, 20)' }}
              ></label>
              <input
                type="radio"
                id="rating2"
                name="calificacion"
                value={4}
                onChange={handleCalificacionChange}
              />
              <label
                htmlFor="rating2"
                title="Bueno"
                className="fa-sharp fa-regular fa-face-smile fa-3x"
                style={{ color: 'limegreen' }}
              ></label>
              <input
                type="radio"
                id="rating1"
                name="calificacion"
                value={5}
                onChange={handleCalificacionChange}
              />
              <label
                htmlFor="rating1"
                title="Muy Bueno"
                className="fa-regular fa-face-laugh-beam fa-3x"
                style={{ color: 'green' }}
              ></label>
            </div>
          </div>
        </div>
      </div>
    </section>

    <br />

    <section className="row">
      <div className="col-md-12">
        <section className="row">
          <div className="col-md-8">
            <p>
              ¿Cómo calificaría su experiencia respecto a los talleres educativos y creativos que ha recibido a través de la fundación?
            </p>
          </div>
        </section>

        <div className="wrapper">
          <div className="encuesta">
            <div className="rating">
              <input
                type="radio"
                id="rating10"
                name="experiencia"
                value={1}
                onChange={handleExperienciaChange}
              />
              <label
                htmlFor="rating10"
                title="Muy Malo"
                className="fa-regular fa-face-frown fa-3x"
                style={{ color: 'red' }}
              ></label>
              <input
                type="radio"
                id="rating9"
                name="experiencia"
                value={2}
                onChange={handleExperienciaChange}
              />
              <label
                htmlFor="rating9"
                title="Malo"
                className="fa-regular fa-face-frown-open fa-3x"
                style={{ color: 'orange' }}
              ></label>
              <input
                type="radio"
                id="rating8"
                name="experiencia"
                value={3}
                onChange={handleExperienciaChange}
              />
              <label
                htmlFor="rating8"
                title="Regular"
                className="fa-regular fa-face-meh fa-3x"
                style={{ color: 'rgb(226, 226, 20)' }}
              ></label>
              <input
                type="radio"
                id="rating7"
                name="experiencia"
                value={4}
                onChange={handleExperienciaChange}
              />
              <label
                htmlFor="rating7"
                title="Bueno"
                className="fa-sharp fa-regular fa-face-smile fa-3x"
                style={{ color: 'limegreen' }}
              ></label>
              <input
                type="radio"
                id="rating6"
                name="experiencia"
                value={5}
                onChange={handleExperienciaChange}
              />
              <label
                htmlFor="rating6"
                title="Muy Bueno"
                className="fa-regular fa-face-laugh-beam fa-3x"
                style={{ color: 'green' }}
              ></label>
            </div>
          </div>
        </div>
      </div>
    </section>

                <br />

                <section class="row">
                  <div class="col-md-12">
                    <section class="row">
                      <div class="col-md-8">
                        <p>
                          ¿Recomendaria a sus familiares y amigos esta
                          fundación?
                        </p>
                      </div>
                      <div class="col-md-4">
                        <select
                          class="form-control"
                          id="pregunta14"
                          onChange={handleRecomendacionChange}
                          value={dataEncuesta.recomendacion}
                        >
                          <option value="null">Seleccione una opción:</option>
                          <option value="true">Sí</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                    </section>
                  </div>
                </section>
                <br />
                <hr />

                <section class="row">
                  <div class="col-md-12">
                    <h3>Comentarios</h3>
                    <p></p>
                  </div>
                </section>
                <section class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="comment">Agregue sus opiniones:</label>
                      <textarea
                        class="form-control"
                        rows="6"
                        id="comentarios"
                        onChange={handleComentariosChange}
                        value={dataEncuesta.comentarios}
                      ></textarea>
                    </div>
                  </div>
                </section>
              </form>
              <section class="row">
                <div class="col-md-12">
                  <button
                    type="button"
                    class="btn btn-info"
                    id="saveForm"
                    onClick={handleSubmit}
                  >
                    Guardar Encuesta
                  </button>
                  &nbsp; &nbsp;
                  <button
                    type="button"
                    class="btn btn-danger"
                    id="clearForm"
                    onClick={handleFormClean}
                  >
                    Limpiar formulario
                  </button>
                  &nbsp; &nbsp;
                  <a
                    class="btn btn-danger btn-sm"
                    type="button"
                    id="btnGuardarCambios"
                    href="/encuestas"
                    style={{
                      width: '90px',
                      height: '40px',
                      borderRadius: '5px',
                      fontSize: '18px',
                    }}
                  >
                    Volver
                  </a>
                </div>
              </section>
            </div>

            <br />
            <br />
          </div>
        </div>
        <ToastContainer />
        <Footer />
      </div>
    </div>
  );
}
