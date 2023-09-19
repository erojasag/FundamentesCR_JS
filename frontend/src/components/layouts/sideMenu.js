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
          href="/inicio"
        >
          <div class="sidebar-brand-icon">
            <img
              src="/assets/img/Logo.png"
              alt=""
              style={{ width: '80px', height: '90px', float: 'left' }}
            />
          </div>
          <div class="sidebar-brand-text mx-0">Fundamentes</div>
        </a>

        <hr class="sidebar-divider my-0" />
        <li class="nav-item">
          <a class="nav-link" href="/inicio">
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
                <i class="fas fa-fw fa-user"></i>
                <span>Usuarios</span>
              </div>
              <div
                id="collapseAdministracion"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="/usuarios">
                    Usuarios
                  </a>
                  <a class="collapse-item" href="/usuariosInactivos">
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
            data-target="#collapsePacientes"
            aria-expanded="true"
            aria-controls="collapsePacientes"
          >
            <i class="fas fa-fw fa-hospital-user"></i>
            <span>Beneficiarios</span>
          </a>
          <div
            id="collapsePacientes"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="/pacientes">
                Ver Beneficiarios
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
            <i class="fas fa-fw fa-square-poll-vertical"></i>
            <span>Encuestas</span>
          </a>
          <div
            id="collapseEncuesta"
            class="collapse"
            aria-labelledby="headingEncuesta"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="/encuestas">
                Ver Encuestas
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
            <i class="fa-solid fa-clipboard"></i>
            <span>Reportes</span>
          </a>
          <div
            id="collapseReportes"
            class="collapse"
            aria-labelledby="headingReportes"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="/reportes">
                Descargar Reportes
              </a>
            </div>
          </div>
        </li>
        {rol === 'Administrador' ? (
          <>
            <li class="nav-item">
              <div
                class="nav-link collapsed"
                data-toggle="collapse"
                data-target="#collapseCasas"
                aria-expanded="true"
                aria-controls="collapseCasas"
              >
                <i class="fas fa-fw fa-house"></i>
                <span>Casas</span>
              </div>
              <div
                id="collapseCasas"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="/listaCasas">
                    Ver Casas
                  </a>
                  <a class="collapse-item" href="/listaCasasInactivas">
                    Ver Casas Inactivas
                  </a>
                </div>
              </div>
            </li>
          </>
        ) : null}
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
