import React from 'react';
import '../App.css';
import SideMenu from '../utils/sideMenu';
import Navbar from '../utils/navbar';
import Footer from '../utils/footer';
import SearchBox from '../utils/searchBox';

export default function Encuestas() {
  return (
    <div id="wrapper">
      <SideMenu />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <SearchBox />
          <Navbar />

          <div class="container-fluid">
            <div class="container">
              <section class="row">
                <div class="col-md-12">
                  <h1 class="text-center">
                    Formulario de Encuesta de Satisfacción
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
              <section class="row">
                <section class="col-md-12">
                  <section class="row">
                    <div class="col-md-8">
                      <div class="form-group">
                        <label for="nombreCompleto">Nombre Completo:</label>
                        <input
                          type="text"
                          class="form-control"
                          id="nombreCompleto"
                          maxlength="128"
                          placeholder="Nombre Completo"
                          required
                        />
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
                          required
                        />
                      </div>
                    </div>
                  </section>
                  <section class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="idIdentificacion">Identificación:</label>
                        <input
                          type="number"
                          id="idIdentificacion"
                          class="form-control"
                          placeholder="Numero de Identificación"
                          maxlength="15"
                          minLength="9"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="telefono">Teléfono:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="telefono"
                        placeholder="Número Telefónico"
                        maxlength="12"
                        required
                      />
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

              <section class="row">
                <div class="col-md-12">
                  <section class="row">
                    <div class="col-md-8">
                      <p>
                        ¿Cómo calificaría su experiencia respecto a los
                        servicios que ha recibido a través de la fundación?
                      </p>
                    </div>
                  </section>

                  <div class="wrapper">
                    <div class="encuesta">
                      <form>
                        <div class="rating">
                          <input
                            type="radio"
                            id="rating5"
                            name="calificacion"
                          />
                          <label
                            for="rating5"
                            title="Muy Malo"
                            class="fa-regular fa-face-frown fa-3x"
                            style={{ color: 'red' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating4"
                            name="calificacion"
                          />
                          <label
                            for="rating4"
                            title="Malo"
                            class="fa-regular fa-face-frown-open fa-3x"
                            style={{ color: ' orange' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating3"
                            name="calificacion"
                          />
                          <label
                            for="rating3"
                            title="Regular"
                            class="fa-regular fa-face-meh fa-3x"
                            style={{ color: 'rgb(226, 226, 20)' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating2"
                            name="calificacion"
                          />
                          <label
                            for="rating2"
                            title="Bueno"
                            class="fa-sharp fa-regular fa-face-smile fa-3x"
                            style={{ color: 'limegreen' }}
                          ></label>
                          <input
                            type="radio"
                            id="rating1"
                            name="calificacion"
                          />
                          <label
                            for="rating1"
                            title="Muy Bueno"
                            class="fa-regular fa-face-laugh-beam fa-3x"
                            style={{ color: 'green' }}
                          ></label>
                        </div>
                      </form>
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
                        ¿Recomendaria a sus familiares y amigos esta fundación?
                      </p>
                    </div>
                    <div class="col-md-4">
                      <select class="form-control" id="pregunta14">
                        <option value="0">Seleccione una opción:</option>
                        <option>Sí</option>
                        <option>No</option>
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
                    ></textarea>
                  </div>
                </div>
              </section>
              <section class="row">
                <div class="col-md-12">
                  <button type="button" class="btn btn-info" id="saveForm">
                    Guardar Encuesta
                  </button>
                  &nbsp; &nbsp;
                  <button type="button" class="btn btn-danger" id="clearForm">
                    Limpiar formulario
                  </button>
                </div>
              </section>
            </div>

            <br />
            <br />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
