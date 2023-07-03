import React, { useState } from 'react';
import Cookies from 'js-cookie';

export default function SideMenu() {
  const [isExpanded, setIsExpanded] = useState(true);

  const rol = Cookies.get('rol');

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <React.Fragment>
      <ul
        className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
          isExpanded ? '' : 'toggled'
        }`}
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="/Inicio"
        >
          <div class="sidebar-brand-icon">
            <img
              src="assets/img/Logo.png"
              alt=""
              style={{ width: '80px', height: '90px', float: 'left' }}
            />
          </div>
          <div class="sidebar-brand-text mx-0">Fundamentes</div>
        </a>

        <hr class="sidebar-divider my-0" />
        <li class="nav-item">
          <a class="nav-link" href="Inicio">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        {rol === 'Administrador' ? (
          <>
            <li class="nav-item">
              <div
                class="nav-link collapsed"
                data-toggle="collapse"
                data-target="#collapseAdministracion"
                aria-expanded="true"
                aria-controls="collapseAdministracion"
              >
                <i class="fas fa-fw fa-cog"></i>
                <span>Usuarios</span>
              </div>
              <div
                id="collapseAdministracion"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="ListaUsuarios">
                    Usuarios
                  </a>
                  <a class="collapse-item" href="usuariosInactivos">
                    Usuarios Inactivos
                  </a>
                </div>
              </div>
            </li>
          </>
        ) : null}

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseExpediente"
            aria-expanded="true"
            aria-controls="collapseExpediente"
          >
            <i class="fas fa-fw fa-clipboard-list"></i>
            <span>Pacientes</span>
          </a>
          <div
            id="collapseExpediente"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="/pacientes">
                Ver Pacientes
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseInventario"
            aria-expanded="true"
            aria-controls="collapseInventario"
          >
            <i class="fas fa-fw fa-clipboard-list"></i>
            <span>Expedientes</span>
          </a>
          <div
            id="collapseInventario"
            class="collapse"
            aria-labelledby="headingInventario"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="Expedientes">
                Ver Expedientes
              </a>
              <a class="collapse-item" href="Encargados">
                Encargados
              </a>
              <a class="collapse-item" href="Convivencia">
                Convivencia
              </a>
              <a class="collapse-item" href="DatosSocioEconomicos">
                Datos SocioEconomicos
              </a>
              <a class="collapse-item" href="FactorPsicosocial">
                Factor Psicosocial
              </a>
              <a class="collapse-item" href="CalificacionRiesgo">
                Calificación Riesgo
              </a>
              <a class="collapse-item" href="EstadoExpediente">
                Estado del Expediente
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseEntrada"
            aria-expanded="true"
            aria-controls="collapseEntrada"
          >
            <i class="fas fa-fw fa-clipboard-list"></i>
            <span>Perfil de Entrada</span>
          </a>
          <div
            id="collapseEntrada"
            class="collapse"
            aria-labelledby="headingEntrada"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="/PerfilEntrada">
                Perfil de Entrada
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseSalida"
            aria-expanded="true"
            aria-controls="collapseSalida"
          >
            <i class="fas fa-fw fa-clipboard-list"></i>
            <span>Perfil de Salida</span>
          </a>
          <div
            id="collapseSalida"
            class="collapse"
            aria-labelledby="headingSalida"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="/PerfilSalida">
                Perfil de Salida
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseEncuesta"
            aria-expanded="true"
            aria-controls="collapseEncuesta"
          >
            <i class="fas fa-fw fa-clipboard-list"></i>
            <span>Grado de Satisfacción</span>
          </a>
          <div
            id="collapseEncuesta"
            class="collapse"
            aria-labelledby="headingEncuesta"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="/Encuestas">
                Encuesta de Satisfacción
              </a>
              <a class="collapse-item" href="/EncuestaSatisfaccion">
                Agregar Encuesta
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseReportes"
            aria-expanded="true"
            aria-controls="collapseReportes"
          >
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Consulta de Estado</span>
          </a>
          <div
            id="collapseReportes"
            class="collapse"
            aria-labelledby="headingInventario"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="ReporteExpediente">
                Datos Expedientes
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseAcciones"
            aria-expanded="true"
            aria-controls="collapseAcciones"
          >
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Consulta de Bitácora</span>
          </a>
          <div
            id="collapseAcciones"
            class="collapse"
            aria-labelledby="headingAcciones"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="Acciones">
                Reporte de Acciones
              </a>
            </div>
          </div>
        </li>
        <hr class="sidebar-divider" />
        <div class="text-center d-none d-md-inline">
          <button
            class="rounded-circle border-0"
            id="sidebarToggle"
            onClick={handleToggle}
          ></button>
        </div>
      </ul>
    </React.Fragment>
  );
}
