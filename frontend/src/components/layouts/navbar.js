import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const nombre = Cookies.get('nombre');

  const handleLogout = () => {
    try {
      setLogout(true);
      toast.success('Sesión cerrada con éxito. \n Hasta Luego. 😉', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err);
    } finally {
      Cookies.remove('jwt');
      Cookies.remove('id');
      Cookies.remove('rol');
      Cookies.remove('nombre');
      navigate('/');
      setLogout(false);
    }
  };
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          class="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i class="fa fa-bars"></i>
        </button>

        <ul class="navbar-nav ml-auto">
          <div class="topbar-divider d-none d-sm-block"></div>

          <li class="nav-item dropdown no-arrow">
            <a
              class="nav-link dropdown-toggle"
              href="/"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                {nombre}
              </span>
              <img
                class="img-profile rounded-circle"
                src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=300"
                alt="profile pic"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a class="dropdown-item" href="perfil">
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Perfil
              </a>
              <div class="dropdown-divider"></div>
              <button
                class="dropdown-item"
                data-toggle="modal"
                data-target="#logoutModal"
                onClick={handleLogout}
              >
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Salir
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
