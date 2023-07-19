import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Error401 from '../Views/Error401';

export default function Stats() {
  const [totalCasas, setTotalCasas] = useState(0);
  const [totalPacientes, setTotalPacientes] = useState(0);
  const [totalEncuestas, setTotalEncuestas] = useState(0);
  const [totalSalidas, setTotalSalidas] = useState(0);

  async function fetchData() {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      const totalCasas = await axios.get('https://fundamentes-dev-bf6998eb4614.herokuapp.com/casas', {
        headers,
      });
      const totalPacientes = await axios.get(
        'https://fundamentes-dev-bf6998eb4614.herokuapp.com/pacientes',
        { headers }
      );
      const totalEncuestas = await axios.get(
        'https://fundamentes-dev-bf6998eb4614.herokuapp.com/encuestasSatisfaccion',
        { headers }
      );
      const totalSalidas = await axios.get(
        'https://fundamentes-dev-bf6998eb4614.herokuapp.com/entrevistasSalida/',
        {
          headers,
        }
      );
      setTotalCasas(totalCasas.data.results);
      setTotalPacientes(totalPacientes.data.results);
      setTotalEncuestas(totalEncuestas.data.results);
      setTotalSalidas(totalSalidas.data.results);
    } catch (err) {
      if (err.response.status === 401) {
        return <Error401 />;
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <div class="row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Total de Casas escucharte
                    </div>
                    <div
                      class="h5 mb-0 font-weight-bold text-gray-800"
                      id="totalVenta"
                      value={totalCasas}
                    >
                      {totalCasas}
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-house fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Total de Pacientes
                    </div>
                    <div
                      class="h5 mb-0 font-weight-bold text-gray-800"
                      id="totalIngresos"
                    >
                      {totalPacientes}
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-hospital-user fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Total de Encuestas de Satisfaccion
                    </div>
                    <div
                      class="h5 mb-0 font-weight-bold text-gray-800"
                      id="totalProductos"
                    >
                      {totalEncuestas}
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-square-poll-vertical fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Total de Salidas
                    </div>
                    <div
                      class="h5 mb-0 font-weight-bold text-gray-800"
                      id="totalCategorias"
                    >
                      {totalSalidas}
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-person-walking-dashed-line-arrow-right fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
