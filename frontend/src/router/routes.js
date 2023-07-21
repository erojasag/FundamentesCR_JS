import { Route, Routes } from 'react-router-dom';
import Login from '../components/Views/Login';
import Activacion from '../components/Views/activacion';
import ListaUsuarios from '../components/Views/ListaUsuarios';
import EditarUsuarioLog from '../components/Views/EditarUsuarioLog';
import Error404 from '../components/Views/Error404';
import Registrarse from '../components/Views/Registrarse';
import Pacientes from '../components/Views/Pacientes';
import EditarPaciente from '../components/Views/EditarPaciente';
import Encuestas from '../components/Views/Encuestas';
import AgregarEncuesta from '../components/Views/agregarEncuesta';
import ResetPass from '../components/Views/ResetPass';
import Index from '../components/Views/Inicio';
import Perfil from '../components/Views/Perfil';
import CambiarContrasena from '../components/Views/cambiarContrasena';
import ForgotPass from '../components/Views/ForgotPass';
import ListaUsuariosInactivos from '../components/Views/ListaUsuariosInactivos';
import ListaCasas from '../components/Views/ListaCasas';
import EditarCasa from '../components/Views/EditarCasa';
import Error403 from '../components/Views/Error403';
import ListaCasasInactivas from '../components/Views/ListaCasasInactivas';
import EditarEncuesta from '../components/Views/editarEncuesta';

function Router() {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route exact path="/pacientes/" element={<Pacientes />} />
      <Route exact path="pacientes/:id" element={<EditarPaciente />} />
      <Route exact path="/inicio" element={<Index />} />
      <Route exact path="/registrarse" element={<Registrarse />} />
      <Route exact path="/olvideMiContrasena" element={<ForgotPass />} />
      <Route exact path="/activarCuenta/:token" element={<Activacion />} />
      <Route exact path="/encuestas/" element={<Encuestas />} />
      <Route exact path="/agregarEncuesta" element={<AgregarEncuesta />} />
      <Route exact path="/editarEncuesta/:id" element={<EditarEncuesta />} />
      <Route exact path="/usuarios/" element={<ListaUsuarios />} />
      <Route exact path="/usuarios/:id" element={<EditarUsuarioLog />} />
      <Route
        exact
        path="/usuariosInactivos"
        element={<ListaUsuariosInactivos />}
      />
      <Route exact path="/listaCasas" element={<ListaCasas />} />
      <Route
        exact
        path="/listaCasasInactivas"
        element={<ListaCasasInactivas />}
      />
      <Route exact path="/casas/:id" element={<EditarCasa />} />
      <Route exact path="/error403" element={<Error403 />} />
      <Route
        exact
        path="/usuarios/reiniciarContrasena/:token"
        element={<ResetPass />}
      />
      <Route exact path="/perfil" element={<Perfil />} />
      <Route
        exact
        path="/cambiarMiContrasena"
        element={<CambiarContrasena />}
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Router;
