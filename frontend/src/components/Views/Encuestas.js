import React, { useState, useEffect } from 'react';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import axios from 'axios';

import Cookies from 'js-cookie';
import { Pagination } from 'react-bootstrap';
import Error403 from './Error403';

export default function Encuestas() {
  const [encuestas, setEncuestas] = useState([]);
  const [selectedEncuesta, setSelectedEncuesta] = useState(null);

  const [isForbidden, setIsForbidden] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentEncuesta = encuestas.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const fetchDataEncuestas = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}encuestasSatisfaccion/`,
        {
          headers,
        }
      );

      setEncuestas(response.data.data.data);
    } catch (err) {
      if (err.response.status === 403) {
        setIsForbidden(true);
        return;
      }
    }
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
        <td>{encuesta.calificacionTallerEducativo}</td>
        <td>{encuesta.calificacionTallerCreativo}</td>
        <td>{encuesta.calificacionTallerClinico}</td>
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
            {isForbidden ? (
              <Error403 />
            ) : (
              <>
                <div class="container-fluid">
                  <div class="card shadow mb-4 m-overflow">
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
                        <div class="col-sm-12 wrap-text">
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
                                <th>Cédula</th>
                                <th>Calificación</th>
                                <th>Calificación T. Educativo</th>
                                <th>Calificación T. Creativo</th>
                                <th>Calificación T. Clínico</th>
                                <th>Recomendación</th>
                                <th>Comentarios</th>
                                <th>Acciones</th>
                              </tr>
                            </thead>
                            <tbody>{getEncuestas()}</tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <Pagination className="custom-pagination">
                        {Array.from({
                          length: Math.ceil(encuestas.length / usersPerPage),
                        }).map((_, index) => (
                          <Pagination.Item
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className="first-letter:capitalize"
                          >
                            {index + 1}
                          </Pagination.Item>
                        ))}
                      </Pagination>
                    </div>
                  </div>
                </div>

                <div
                  class="modal fade"
                  id="encuestaModal"
                  tabindex="-1"
                  aria-labelledby="encuestaModalLabel"
                  aria-hidden="true"
                ></div>
              </>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
