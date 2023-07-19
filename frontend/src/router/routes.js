import { Route, Routes } from 'react-router-dom';
import Login from '../components/Views/Login';
import Activacion from '../components/Views/activacion';
import ListaUsuarios from '../components/Views/ListaUsuarios';
import EditarUsuarioLog from '../components/Views/EditarUsuarioLog';
import PersonaResponsable from '../components/Views/PersonaResponsable';
import EditarDatosExpediente from '../components/Views/EditarDatosExpediente';
import EditarParentezco from '../components/Views/EditarParentezco';
import EditarDatosSE from '../components/Views/EditarDatosSE';
import FactorPsicosocial from '../components/Views/FactorPsicosocial';
import EditarFactor from '../components/Views/EditarFactor';
import EstadoExpendiente from '../components/Views/EstadoExpediente';
import EditarEstadoExp from '../components/Views/EditarEstadoExp';
import ReporteExpediente from '../components/Views/ReporteExpediente';
import Acciones from '../components/Views/Acciones';
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

function Router() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/pacientes/" element={<Pacientes />} />
      <Route path="/:id" element={<EditarPaciente />} />
      <Route path="/inicio" element={<Index />} />
      <Route path="/registrarse" element={<Registrarse />} />
      <Route path="/olvideMiContrasena" element={<ForgotPass />} />
      <Route path="/activarCuenta/:token" element={<Activacion />} />
      <Route path="/encuestas/" element={<Encuestas />} />
      <Route path="/agregarEncuesta" element={<AgregarEncuesta />} />
      <Route path="/usuarios/" element={<ListaUsuarios />} />
      <Route path="/usuarios/:id" element={<EditarUsuarioLog />} />
      <Route path="/usuariosInactivos" element={<ListaUsuariosInactivos />} />
      <Route path="/listaCasas" element={<ListaCasas />} />
      <Route path="/listaCasasInactivas" element={<ListaCasasInactivas />} />
      <Route path="/casas/:id" element={<EditarCasa />} />
      <Route path="/encargados" element={<PersonaResponsable />} />
      <Route
        path="/expedientes/editarExpediente"
        element={<EditarDatosExpediente />}
      />
      <Route path="/editarParentezco" element={<EditarParentezco />} />
      <Route path="/editarDatosSE" element={<EditarDatosSE />} />
      <Route path="/factorPsicosocial" element={<FactorPsicosocial />} />
      <Route path="/editarFactor" element={<EditarFactor />} />
      <Route
        path="/expedientes/estadoExpediente"
        element={<EstadoExpendiente />}
      />
      <Route path="/editarEstadoExp" element={<EditarEstadoExp />} />
      <Route path="/reporteExpediente" element={<ReporteExpediente />} />
      <Route path="/acciones" element={<Acciones />} />
      <Route path="/error404" element={<Error404 />} />
      <Route path="/error403" element={<Error403 />} />
      <Route
        path="/usuarios/reiniciarContrasena/:token"
        element={<ResetPass />}
      />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/cambiarMiContrasena" element={<CambiarContrasena />} />
    </Routes>
  );
}

export default Router;
