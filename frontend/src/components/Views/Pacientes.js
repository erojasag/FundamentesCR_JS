import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import SideMenu from '../layouts/sideMenu';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';

export default function Pacientes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      const response = await axios.get('http://localhost:3000/pacientes', {
        headers,
      });
      console.log(response.data.data.data);
      setData(response.data.data.data);
    };
    fetchData();
  }, []);

  const getPacientes = () => {
    return data.map((item) => (
      <tr>
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
          <a href="EditarPasciente" class="btn btn-primary btn-sm">
            <i class="fas fa-pencil-alt"></i>
          </a>
          <a
            href="EditarPasciente"
            class="btn btn-danger btn-sm"
            data-toggle="modal"
            data-target="#usuariosModal"
          >
            <i class="fas fa-trash-alt"></i>
          </a>
        </td>
      </tr>
    ));
  };
  return (
    <div id="wrapper">
      <SideMenu />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />

          <div class="container-fluid">
            <div class="card shadow mb-4">
              <div class="card-header py-3 bg-second-primary">
                <h6 class="m-0 font-weight-bold text-white">
                  Lista de Pacientes
                </h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <a href="/AgregarPaciente" class="btn btn-success">
                      <i class="fas fa-user-plus"></i> Nuevo Usuario
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
              class="modal fade"
              id="usuariosModal"
              tabindex="-1"
              aria-labelledby="usuariosModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title"
                      id="usuariosModalLabel"
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
                    <button type="button" class="close" data-dismiss="modal">
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
