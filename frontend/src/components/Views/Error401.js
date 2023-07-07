import React from 'react';
import Footer from '../layouts/footer';

export default function Error401() {
  return (
    <React.Fragment>
      <div
        id="wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content" className="flex-grow">
            <div className="container-fluid">
              <div className="text-center">
                <main
                  className="bg-white px-6 py-24 sm:py-32 lg:px-8"
                  data-text="401"
                >
                  <div className="text-center">
                    <p
                      className="text-base font-semibold text-indigo-600 error mx-auto"
                      data-text="401"
                    >
                      401
                    </p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                      Tu sesión ha expirado. Por favor, inicia sesión de nuevo.
                    </h1>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <a
                        href="/"
                        className="btn btn-primary rounded-pill px-3.5 py-2.5 text-sm font-weight-bold shadow-sm"
                      >
                        Login
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
