import React from 'react';

import Footer from '../layouts/footer';
export default function Error404() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <div class="container-fluid">
              <div class="text-center">
                <main
                  className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
                  data-text="404"
                >
                  <div className="text-center">
                    <p
                      className="text-base font-semibold text-indigo-600 error mx-auto"
                      data-text="404"
                    >
                      404
                    </p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                      Pagina no encontrada
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      Disculpa, la pagina que estas buscando no existe.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <a
                        href="/Inicio"
                        className="btn btn-primary rounded-pill px-3.5 py-2.5 text-sm font-weight-bold shadow-sm"
                      >
                        Volver al inicio
                      </a>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
