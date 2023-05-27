import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
    <div class="container">

<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Bienvenido</h1>
                            </div>
                            <form class="user">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" placeholder="Correo" asp-for="Correo"/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-user" placeholder="Contraseña" asp-for="Clave"/>
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox small">
                                        <input type="checkbox" class="custom-control-input" id="chkMantenerSesion" asp-for="MantenerSesion"/>
                                        <label class="custom-control-label" for="chkMantenerSesion">Mantener Sesión</label>
                                    </div>
                                </div>

                               
                                {/* <!-- @if (ViewData["Mensaje"] != null)
                                        {
                                            <div class="form-group">
                                                <div class="alert alert-danger" role="alert">
                                                    @ViewData["Mensaje"]
                                                </div>
                                            </div>
                                        }
                                         --> */}
                                 
                                 
                                
                                <a class="btn btn-primary btn-user btn-block" href="Registrer.js">Registrarse</a>
                                <a class="btn btn-primary btn-user btn-block" href='Inicio'>Iniciar</a>
                            </form>
                            
                            <div class="text-center">
                                <a class="small" href="forgot-password.html">¿Olvidó su contraseña?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
    </React.Fragment>
  )
}
