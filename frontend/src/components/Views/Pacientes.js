import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import SideMenu from '../layouts/sideMenu';

import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';

export default function Pacientes() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const response = await axios.get('http://localhost:3000/pacientes', {
      headers,
    });
    const data = response.data.data.data;
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getPacientes = () => {
    return data.map((item) => (
      <tr key={2}>
        <td>{item.nombreCompleto}</td>
        <td>{item.cedula}</td>
        <td>{item.direccion}</td>
        <td>{item.distritoResidencia}</td>
        <td>{item.contacto}</td>
        <td>{item.edad}</td>
        <td>{item.fechaNacimiento}</td>
        <td>Si</td>
        <td>{item.genero}</td>
        <td>{item.nacionalidad}</td>
        <td>
          <a
            href={`/Pacientes/EditarPaciente/${item.pacienteId}`}
            className="btn btn-primary btn-sm"
          >
            <i className="fas fa-pencil-alt"></i>
          </a>
          <a
            href="eliminarPaciente"
            className="btn btn-danger btn-sm"
            data-toggle="modal"
            data-target="#usuariosModal"
          >
            <i className="fas fa-trash-alt"></i>
          </a>
        </td>
      </tr>
    ));
  };
  return (
    <div id="wrapper">
      <SideMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />

          <div className="container-fluid">
            <div className="card shadow mb-4">
              <div className="card-header py-3 bg-second-primary">
                <h6 className="m-0 font-weight-bold text-white">
                  Lista de Pacientes
                </h6>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <a href="/AgregarPaciente" className="btn btn-success">
                      <i className="fas fa-user-plus"></i> Nuevo Usuario
                    </a>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      className="table table-bordered"
                      id="tbdata"
                      cellSpacing="0"
                      style={{ width: '100%' }}
                    >
                      <thead>
                        <tr key={1}>
                          <th>Nombre Completo</th>
                          <th>Cédula</th>
                          <th>Dirección</th>
                          <th>Distrito</th>
                          <th>Teléfono</th>
                          <th>Edad Actual</th>
                          <th>Fecha de Nacimiento</th>
                          <th>Migrante</th>
                          <th>Genero</th>
                          <th>Nacionalidad</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>{getPacientes()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="usuariosModal"
              tabIndex="-1"
              aria-labelledby="usuariosModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="usuariosModalLabel"
                      data-dismiss="modal"
                    >
                      Eliminar
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>¿Seguro que desea eliminar el contenido?</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
