import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../layouts/sideMenu';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Loading from '../layouts/loading';
import Error403 from './Error403';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from 'react-bootstrap';

export default function ListaCasasInactivas() {
  const [casasData, setCasasData] = useState([]);
  const [newCasa, setNewCasa] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedCasaId, setSelectedCasaId] = useState(null);
  const [isForbidden, setIsForbidden] = useState(false);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentCasa = casasData.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const fetchData = async () => {
    try {
      setLoading(true);
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}casas/?q=false`,
        {
          headers,
        }
      );

      if (response.status !== 200) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      if (response.status === 401) {
        navigate('/Login');
      }

      if (response.status === 403) {
        setIsForbidden(true);
        return;
      }
      if (Cookies.get('rol') === 'Psicologo') {
        setIsForbidden(true);
      }
      setCasasData(response.data.data.casas);
      setLoading(false);
    } catch (err) {
      if (err.response.data.err.message === 'jwt expired') {
        navigate('/');
      }
      if (err.response.status === 403) {
        setIsForbidden(true);
        return;
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const activateCasa = async (casaId) => {
    try {
      setLoading(true);
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}casas/activarCasa/${casaId}`,
        {
          headers,
        }
      );
      if (response.status === 204) {
        setLoading(false);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleNombreCasaChange = (event) => {
    setNewCasa({
      ...newCasa,
      nombreCasa: event.currentTarget.value,
    });
  };

  const handleCantonChange = (event) => {
    setNewCasa({
      ...newCasa,
      canton: event.currentTarget.value,
    });
  };

  const handleProvinciaChange = (event) => {
    setNewCasa({
      ...newCasa,
      provincia: event.currentTarget.value,
    });
  };

  const handleDireccionChange = (event) => {
    setNewCasa({
      ...newCasa,
      direccion: event.currentTarget.value,
    });
  };

  const getCasas = () => {
    return casasData.map((casa) => (
      <tr key={casa.casaId}>
        <td>{casa.nombreCasa} </td>
        <td>{casa.canton}</td>
        <td>{casa.provincia}</td>
        <td>{casa.direccion}</td>
        <td>{casa.activo ? '' : 'No'}</td>
        <td>
          <a
            href="EditarUsuarioLogUsuario"
            class="btn btn-success btn-sm"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => setSelectedCasaId(casa.casaId)}
          >
            <FontAwesomeIcon
              icon={faCheck}
              bounce
              style={{ color: '#f2f2f2' }}
            />
          </a>
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
                        Casas Inactivas
                      </h6>
                    </div>
                    <div class="card-body">
                      <div class="row"></div>
                      <br />
                      <div class="row">
                        <div class="col-sm-12">
                          <table
                            class="table table-bordered"
                            id="tbdata"
                            cellspacing="0"
                            style={{ width: '100%' }}
                          >
                            <thead>
                              <tr key={4}>
                                <th>Nombre</th>
                                <th>Canton</th>
                                <th>Provincia</th>
                                <th>Direccion</th>
                                <th>Activo</th>
                                <th>Accion</th>
                              </tr>
                            </thead>
                            <tbody>{getCasas()}</tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <Pagination className="custom-pagination">
                        {Array.from({
                          length: Math.ceil(casasData.length / usersPerPage),
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
                  {loading && <Loading />}
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Activar Usuario
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
                          <p>¿Seguro que desea reactivar el usuario?</p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-dismiss="modal"
                          >
                            Cancelar
                          </button>
                          <button
                            type="button"
                            class="btn btn-success"
                            data-dismiss="modal"
                            onClick={() => activateCasa(selectedCasaId)}
                          >
                            &nbsp;Activar&nbsp;
                          </button>
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
    </React.Fragment>
  );
}
