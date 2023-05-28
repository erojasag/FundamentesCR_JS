import React from 'react'

export default function ForgotPass() {
  return (
    <React.Fragment>
<div class="container">

<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">

                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-2">¿Olvidó su contraseña?</h1>
                                <p class="mb-4">Ingrese su correo de sesión y le enviaremos una nueva contraseña</p>
                            </div>
                            <form class="user">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" name="Correo" placeholder="Ingrese su correo"/>
                                </div>
                                <button type="submit" class="btn btn-primary btn-user btn-block">
                                    Reestablecer Contraseña
                                </button>
                            </form>
                            <hr/>
                            <div class="text-center">
                                <a class="small" href="/">Iniciar Sesión</a>
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