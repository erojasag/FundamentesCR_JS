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
import { Pagination } from 'react-bootstrap';

export default function ListaCasas() {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [casasData, setCasasData] = useState([]);
  const [newCasa, setNewCasa] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedCasaId, setSelectedCasaId] = useState(null);
  const [isForbidden, setIsForbidden] = useState(false);
  const navigate = useNavigate();

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
        `${process.env.REACT_APP_BACKEND_API}casas/?q=true`,
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

  const createCasa = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };

      const body = {
        nombreCasa: newCasa.nombreCasa,
        canton: newCasa.canton,
        provincia: newCasa.provincia,
        direccion: newCasa.direccion,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}casas/`,
        body,
        {
          headers,
        }
      );
      if (response.status === 201) {
        setLoading(true);
        window.location.reload();
      }
    } catch (err) {
      if (err.response.data.err.message === 'jwt expired') {
        navigate('/');
      }
      if (err.response.status === 403) {
        setIsForbidden(true);
        return;
      }
    } finally {
      setLoading(false);
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

  const deactivateCasa = async (casaId) => {
    try {
      setLoading(true);
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };

      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_API}casas/${casaId}`,
        {
          headers,
        }
      );
      if (response.status === 204) {
        toast.success('Casa desactivada con éxito', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
        window.location.reload();
      }
    } catch (err) {
      if (err.response.data.err.message === 'jwt expired') {
        toast.error(
          'Su sesión ha expirado, porfavor inicie sesión nuevamente',
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
        navigate('/');
      }
      if (err.response.status === 403) {
        setIsForbidden(true);
        return;
      }
    } finally {
      fetchData();
    }
  };
  const getCasas = () => {
    return currentCasa.map((casa) => (
      <tr key={casa.casaId}>
        <td>{casa.nombreCasa} </td>
        <td>{casa.canton}</td>
        <td>{casa.provincia}</td>
        <td>{casa.direccion}</td>
        <td>
          <a href={`casas/${casa.casaId}`} className="btn btn-primary btn-sm">
            <i className="fas fa-pencil-alt"></i>
          </a>
          &nbsp; &nbsp;
          <a
            href="desactivarCasa"
            class="btn btn-danger btn-sm"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => setSelectedCasaId(casa.casaId)}
          >
            <i class="fas fa-trash-alt"></i>
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
                        Lista de Casas EscuchArte
                      </h6>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <button
                            class="btn btn-success"
                            data-toggle="modal"
                            data-target="#modalData"
                          >
                            <i class="fas fa-user-plus"></i> Nueva Casa
                          </button>
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
                              <tr key={4}>
                                <th>Nombre</th>
                                <th>Canton</th>
                                <th>Provincia</th>
                                <th>Direccion</th>
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
                            Desactivar Casa
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
                          <p>¿Seguro que desea desactivar esta casa?</p>
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
                            class="btn btn-danger"
                            data-dismiss="modal"
                            onClick={() => deactivateCasa(selectedCasaId)}
                          >
                            Desactivar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="modal fade"
                    id="modalData"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                    data-backdrop="static"
                  >
                    {loading && <Loading />}
                    <div class="modal-dialog modal-lg" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h6>Añadir Casa</h6>
                          <button
                            class="close"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <form>
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
                                      value={newCasa.nombreCasa}
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
                                      value={newCasa.canton}
                                      onChange={handleCantonChange}
                                    />
                                  </div>
                                  <div class="form-group col-sm-6">
                                    <label for="txtprovincia">Provincia</label>
                                    <select
                                      class="custom-select"
                                      id="provincia"
                                      name="provincia"
                                      value={newCasa.provincia}
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
                                      value={newCasa.direccion}
                                      onChange={handleDireccionChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button
                            class="btn btn-danger btn-sm"
                            type="button"
                            data-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            class="btn btn-success btn-sm"
                            type="button"
                            id="btnGuardar"
                            onClick={createCasa}
                          >
                            Guardar
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
        <ToastContainer />
      </div>
    </React.Fragment>
  );
}
