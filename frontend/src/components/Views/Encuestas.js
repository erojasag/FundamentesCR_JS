import React, { useState, useEffect } from 'react';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Encuestas() {
  const [encuestas, setEncuestas] = useState([]);
  const [selectedEncuesta, setSelectedEncuesta] = useState(null);

  const fetchDataEncuestas = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };

    const response = await axios.get(
      'https://fundamentes-dev-bf6998eb4614.herokuapp.com/encuestasSatisfaccion/',
      {
        headers,
      }
    );

    console.log(response.data.data.data);
    setEncuestas(response.data.data.data);
  };

  useEffect(() => {
    fetchDataEncuestas();
  }, []);

  const getEncuestas = () => {
    return encuestas.map((encuesta) => (
      <tr key={encuesta.encuestaSatisfaccionId}>
        <td>{encuesta.nombreCompleto}</td>
        <td>{encuesta.edad}</td>
        <td>{encuesta.cedula}</td>
        <td>{encuesta.calificacion}</td>
        <td>{encuesta.recomendacion ? 'Si' : 'No'}</td>
        <td>{encuesta.comentarios}</td>
        <td>
          <a
            href={`editarEncuesta/${encuesta.encuestaSatisfaccionId}`}
            className="btn btn-primary btn-sm"
          >
            <i className="fas fa-pencil-alt"></i>
          </a>
          &nbsp; &nbsp;
          <button
            href="eliminarPaciente"
            className="btn btn-danger btn-sm"
            data-toggle="modal"
            data-target="#usuariosModal"
            value={encuesta.encuestaSatisfaccionId}
            onClick={() => setSelectedEncuesta(encuesta.encuestaSatisfaccionId)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    ));
  };
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideMenu />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div class="container-fluid">
              <div class="card shadow mb-4">
                <div class="card-header py-3 bg-second-primary">
                  <h6 class="m-0 font-weight-bold text-white">
                    Lista de Encuestas de Satisfacción
                  </h6>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <a class="btn btn-success" href="agregarEncuesta">
                        <i class="fas fa-user-plus"></i> Agregar Encuesta
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-12">
                      <table
                        class="table table-bordered"
                        id="tbdata"
                        cellspacing="0"
                        style={{ width: '100%' }}
                      >
                        <thead>
                          <tr>
                            <th>Nombre Completo</th>
                            <th>Edad</th>
                            <th>Cedula</th>
                            <th>Calificacion</th>
                            <th>Recomendacion</th>
                            <th>Comentarios</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>{getEncuestas()}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="encuestaModal"
              tabindex="-1"
              aria-labelledby="encuestaModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title"
                      id="encuestaModalLabel"
                      data-dismiss="modal"
                    >
                      Eliminar
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>¿Seguro que desea eliminar el contenido?</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Eliminar
                    </button>
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
