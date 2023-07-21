import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../App.css';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import '@fortawesome/fontawesome-free/css/all.min.css';

export default function EditarEncuesta() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [dataEncuesta, setDataEncuesta] = useState({});

  const fetchPacientes = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}encuestasSatisfaccion/${id}`,
        {
          headers,
        }
      );
      const encuesta = response.data.data.encuestaSatisfaccion;
      setDataEncuesta(encuesta);
    } catch (err) {
      if (err.response.data.message === 'jwt expired') {
        toast.warn('Sesion Expirada por favor inicie sesion nuevamente');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  const handleNombreChange = (event) => {
    setDataEncuesta({
      ...dataEncuesta,
      nombreCompleto: event.currentTarget.value,
    });
  };

  const handleCalificacionChange = (event) => {
    const { value } = event.currentTarget;
    setDataEncuesta((prevDataEncuesta) => ({
      ...prevDataEncuesta,
      calificacion: parseInt(value),
    }));
  };
  const handleCalificacionTallerEducativo = (event) => {
    const { value } = event.currentTarget;
    setDataEncuesta((prevDataEncuesta) => ({
      ...prevDataEncuesta,
      calificacionTallerEducativo: parseInt(value),
    }));
  };

  const handleCalificacionTallerCreativo = (event) => {
    const { value } = event.currentTarget;
    setDataEncuesta((prevDataEncuesta) => ({
      ...prevDataEncuesta,
      calificacionTallerCreativo: parseInt(value),
    }));
  };

  const handleCalificacionTallerClinico = (event) => {
    const { value } = event.currentTarget;
    setDataEncuesta((prevDataEncuesta) => ({
      ...prevDataEncuesta,
      calificacionTallerClinico: parseInt(value),
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
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_API}encuestasSatisfaccion/${id}`,
        dataEncuesta,
        {
          headers,
        }
      );

      if (response.status === 201) {
        toast.success('Encuesta editada con éxito');
        setTimeout(() => {
          navigate('/encuestas');
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      if (err.response.data.err.errors[0].type === 'notNull Violation') {
        toast.warn('Por favor llene todos los campos');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
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
                  <h1 class="text-center">Encuesta de Satisfacción</h1>
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
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="nombreCompleto">Nombre Completo:</label>
                          <input
                            type="text"
                            class="form-control input-validar"
                            id="txtNombreCompleto"
                            name="nombreCompleto"
                            disabled
                            value={dataEncuesta.nombreCompleto}
                            onChange={handleNombreChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
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
                      <div class="col-md-2">
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
                    <h3>Puntajes</h3>
                    <p></p>
                  </div>
                </section>

                <section className="row">
                  <div className="col-md-12">
                    <section className="row">
                      <div className="col-md-8">
                        <p>
                          ¿Cómo calificaría su experiencia respecto a los
                          servicios que ha recibido a través de la fundación?
                        </p>
                      </div>
                    </section>

                    <div className="wrapper">
                      <div className="encuesta">
                        <div className="rating">
                          <input
                            type="radio"
                            id="rating1"
                            name="calificacion"
                            value={1}
                            checked={dataEncuesta.calificacion === 1}
                            onChange={handleCalificacionChange}
                          />
                          <label
                            htmlFor="rating1"
                            title="Muy Malo"
                            className="fa-regular fa-face-frown fa-3x"
                            style={{ color: 'red' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating2"
                            name="calificacion"
                            value={2}
                            checked={dataEncuesta.calificacion === 2}
                            onChange={handleCalificacionChange}
                          />
                          <label
                            htmlFor="rating2"
                            title="Malo"
                            className="fa-regular fa-face-frown-open fa-3x"
                            style={{ color: 'orange' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating3"
                            name="calificacion"
                            value={3}
                            checked={dataEncuesta.calificacion === 3}
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
                            id="rating4"
                            name="calificacion"
                            value={4}
                            checked={dataEncuesta.calificacion === 4}
                            onChange={handleCalificacionChange}
                          />
                          <label
                            htmlFor="rating4"
                            title="Bueno"
                            className="fa-sharp fa-regular fa-face-smile fa-3x"
                            style={{ color: 'limegreen' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating5"
                            name="calificacion"
                            value={5}
                            checked={dataEncuesta.calificacion === 5}
                            onChange={handleCalificacionChange}
                          />
                          <label
                            htmlFor="rating5"
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
                          ¿Cómo calificaría su experiencia respecto a los
                          talleres educativos que ha recibido a través de la
                          fundación?
                        </p>
                      </div>
                    </section>

                    <div className="wrapper">
                      <div className="encuesta">
                        <div className="rating">
                          <input
                            type="radio"
                            id="rating6"
                            name="calificacionTallerEducativo"
                            value={1}
                            checked={
                              dataEncuesta.calificacionTallerEducativo === 1
                            }
                            onChange={handleCalificacionTallerEducativo}
                          />
                          <label
                            htmlFor="rating6"
                            title="Muy Malo"
                            className="fa-regular fa-face-frown fa-3x"
                            style={{ color: 'red' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating7"
                            name="calificacionTallerEducativo"
                            value={2}
                            checked={
                              dataEncuesta.calificacionTallerEducativo === 2
                            }
                            onChange={handleCalificacionTallerEducativo}
                          />
                          <label
                            htmlFor="rating7"
                            title="Malo"
                            className="fa-regular fa-face-frown-open fa-3x"
                            style={{ color: 'orange' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating8"
                            name="calificacionTallerEducativo"
                            value={3}
                            checked={
                              dataEncuesta.calificacionTallerEducativo === 3
                            }
                            onChange={handleCalificacionTallerEducativo}
                          />
                          <label
                            htmlFor="rating8"
                            title="Regular"
                            className="fa-regular fa-face-meh fa-3x"
                            style={{ color: 'rgb(226, 226, 20)' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating9"
                            name="calificacionTallerEducativo"
                            value={4}
                            checked={
                              dataEncuesta.calificacionTallerEducativo === 4
                            }
                            onChange={handleCalificacionTallerEducativo}
                          />
                          <label
                            htmlFor="rating9"
                            title="Bueno"
                            className="fa-sharp fa-regular fa-face-smile fa-3x"
                            style={{ color: 'limegreen' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating10"
                            name="calificacionTallerEducativo"
                            value={5}
                            checked={
                              dataEncuesta.calificacionTallerEducativo === 5
                            }
                            onChange={handleCalificacionTallerEducativo}
                          />
                          <label
                            htmlFor="rating10"
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
                          ¿Cómo calificaría su experiencia respecto a los
                          talleres creativos que ha recibido a través de la
                          fundación?
                        </p>
                      </div>
                    </section>

                    <div className="wrapper">
                      <div className="encuesta">
                        <div className="rating">
                          <input
                            type="radio"
                            id="rating11"
                            name="calificacionTallerCreativo"
                            value={1}
                            checked={
                              dataEncuesta.calificacionTallerCreativo === 1
                            }
                            onChange={handleCalificacionTallerCreativo}
                          />
                          <label
                            htmlFor="rating11"
                            title="Muy Malo"
                            className="fa-regular fa-face-frown fa-3x"
                            style={{ color: 'red' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating12"
                            name="calificacionTallerCreativo"
                            value={2}
                            checked={
                              dataEncuesta.calificacionTallerCreativo === 2
                            }
                            onChange={handleCalificacionTallerCreativo}
                          />
                          <label
                            htmlFor="rating12"
                            title="Malo"
                            className="fa-regular fa-face-frown-open fa-3x"
                            style={{ color: 'orange' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating13"
                            name="calificacionTallerCreativo"
                            value={3}
                            checked={
                              dataEncuesta.calificacionTallerCreativo === 3
                            }
                            onChange={handleCalificacionTallerCreativo}
                          />
                          <label
                            htmlFor="rating13"
                            title="Regular"
                            className="fa-regular fa-face-meh fa-3x"
                            style={{ color: 'rgb(226, 226, 20)' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating14"
                            name="calificacionTallerCreativo"
                            value={4}
                            checked={
                              dataEncuesta.calificacionTallerCreativo === 4
                            }
                            onChange={handleCalificacionTallerCreativo}
                          />
                          <label
                            htmlFor="rating14"
                            title="Bueno"
                            className="fa-sharp fa-regular fa-face-smile fa-3x"
                            style={{ color: 'limegreen' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating15"
                            name="calificacionTallerCreativo"
                            value={5}
                            checked={
                              dataEncuesta.calificacionTallerCreativo === 5
                            }
                            onChange={handleCalificacionTallerCreativo}
                          />
                          <label
                            htmlFor="rating15"
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
                          ¿Cómo calificaría su experiencia respecto a los
                          talleres clinicos que ha recibido a través de la
                          fundación?
                        </p>
                      </div>
                    </section>

                    <div className="wrapper">
                      <div className="encuesta">
                        <div className="rating">
                          <input
                            type="radio"
                            id="rating16"
                            name="calificacionTallerClinico"
                            value={1}
                            checked={
                              dataEncuesta.calificacionTallerClinico === 1
                            }
                            onChange={handleCalificacionTallerClinico}
                          />
                          <label
                            htmlFor="rating16"
                            title="Muy Malo"
                            className="fa-regular fa-face-frown fa-3x"
                            style={{ color: 'red' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating17"
                            name="calificacionTallerClinico"
                            value={2}
                            checked={
                              dataEncuesta.calificacionTallerClinico === 2
                            }
                            onChange={handleCalificacionTallerClinico}
                          />
                          <label
                            htmlFor="rating17"
                            title="Malo"
                            className="fa-regular fa-face-frown-open fa-3x"
                            style={{ color: 'orange' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating18"
                            name="calificacionTallerClinico"
                            value={3}
                            checked={
                              dataEncuesta.calificacionTallerClinico === 3
                            }
                            onChange={handleCalificacionTallerClinico}
                          />
                          <label
                            htmlFor="rating18"
                            title="Regular"
                            className="fa-regular fa-face-meh fa-3x"
                            style={{ color: 'rgb(226, 226, 20)' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating19"
                            name="calificacionTallerClinico"
                            value={4}
                            checked={
                              dataEncuesta.calificacionTallerClinico === 4
                            }
                            onChange={handleCalificacionTallerClinico}
                          />
                          <label
                            htmlFor="rating19"
                            title="Bueno"
                            className="fa-sharp fa-regular fa-face-smile fa-3x"
                            style={{ color: 'limegreen' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating20"
                            name="calificacionTallerClinico"
                            value={5}
                            checked={
                              dataEncuesta.calificacionTallerClinico === 5
                            }
                            onChange={handleCalificacionTallerClinico}
                          />
                          <label
                            htmlFor="rating20"
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
