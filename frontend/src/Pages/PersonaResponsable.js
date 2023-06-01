import React from 'react';
import SideMenu from '../utils/sideMenu';
import Navbar from '../utils/navbar';
import Footer from '../utils/footer';
export default function PersonaResponsable() {
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
                  <h6 class="m-0 font-weight-bold text-white">Parentezcos</h6>
                </div>
                <div class="card-body">
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
                            <th>Nombre</th>
                            <th>Parentezco</th>
                            <th>Nacionalidad</th>
                            <th>Cedula</th>
                            <th>Telefono</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Descripcion 1</td>
                            <td>Descripcion 1</td>
                            <td>Descripcion 1</td>
                            <td>8888</td>
                            <td>
                              <a
                                href="EditarParentezco"
                                class="btn btn-primary btn-sm"
                              >
                                <i class="fas fa-pencil-alt"></i>
                              </a>
                              &nbsp; &nbsp;
                              <button class="btn btn-danger btn-sm">
                                <i class="fas fa-trash-alt"></i>
                              </button>
                            </td>
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
