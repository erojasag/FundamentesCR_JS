import React from 'react';
import SideMenu from '../layouts/sideMenu';
import Footer from '../layouts/footer';
import Navbar from '../layouts/navbar';
export default function Acciones() {
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
                    Lista de Acciones
                  </h6>
                </div>
                <div class="card-body">
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
                            <th>Id</th>
                            <th>Nombre del Usuario</th>
                            <th>Acción</th>
                            <th>Tabla Afectada</th>
                            <th>Fecha</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Tiger Nixon</td>
                            <td>Inserción</td>
                            <td>Perfil de Entrada</td>
                            <td>01/01/2023</td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>2</td>
                            <td>Tiger Nixon</td>
                            <td>Inserción</td>
                            <td>Perfil de Entrada</td>
                            <td>01/01/2023</td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>3</td>
                            <td>Tiger Nixon</td>
                            <td>Inserción</td>
                            <td>Perfil de Entrada</td>
                            <td>01/01/2023</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
