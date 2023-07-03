import { Route, Routes } from 'react-router-dom';
import Login from '../components/Views/Login';
import Activacion from '../components/Views/activacion';
import ListaUsuarios from '../components/Views/ListaUsuarios';
import EditarUsuarioLog from '../components/Views/EditarUsuarioLog';
import DatosExpediente from '../components/Views/DatosExpediente';
import PersonaResponsable from '../components/Views/PersonaResponsable';
import EditarDatosExpediente from '../components/Views/EditarDatosExpediente';
import EditarParentezco from '../components/Views/EditarParentezco';
import Convivencia from '../components/Views/Convivencia';
import EditarConvivencia from '../components/Views/EditarConvivencia';
import DatosSocioEconomicos from '../components/Views/DatosSocioEconomicos';
import EditarDatosSE from '../components/Views/EditarDatosSE';
import FactorPsicosocial from '../components/Views/FactorPsicosocial';
import EditarFactor from '../components/Views/EditarFactor';
import CalificacionRiesgo from '../components/Views/CalificacionRiesgo';
import EditarCalificacionRiesgo from '../components/Views/EditarCalificacionRiesgo';
import EstadoExpendiente from '../components/Views/EstadoExpediente';
import EditarEstadoExp from '../components/Views/EditarEstadoExp';
import ReporteExpediente from '../components/Views/ReporteExpediente';
import Acciones from '../components/Views/Acciones';
import Error404 from '../components/Views/Error404';
import Registrarse from '../components/Views/Registrarse';
import Pacientes from '../components/Views/Pacientes';
import EditarPaciente from '../components/Views/EditarPaciente';
import PerfilEntrada from '../components/Views/PerfilEntrada';
import EditarPerfilEntrada from '../components/Views/EditarPerfilEntrada';
import PerfilSalida from '../components/Views/PerfilSalida';
import EditarPerfilSalida from '../components/Views/EditarPerfilSalida';
import Encuestas from '../components/Views/Encuestas';
import EncuestaSatisfaccion from '../components/Views/EncuestaSatisfaccion';
import ResetPass from '../components/Views/ResetPass';
import Index from '../components/Views/Inicio';
import Perfil from '../components/Views/Perfil';
import CambiarContrasena from '../components/Views/cambiarContrasena';
import ForgotPass from '../components/Views/ForgotPass';
import ListaUsuariosInactivos from '../components/Views/ListaUsuariosInactivos';
import Error403 from '../components/Views/Error403';

function Router() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="pacientes/" element={<Pacientes />} />
      <Route path="pacientes/:id" element={<EditarPaciente />} />

      <Route path="/inicio" element={<Index />} />
      <Route path="/registrarse" element={<Registrarse />} />
      <Route path="/olvideMiContrasena" element={<ForgotPass />} />
      <Route path="/activarCuenta/:token" element={<Activacion />} />
      <Route path="/perfilEntrada" element={<PerfilEntrada />} />
      <Route path="/editarPerfilEntrada" element={<EditarPerfilEntrada />} />
      <Route path="/perfilSalida" element={<PerfilSalida />} />
      <Route path="/editarPerfilSalida" element={<EditarPerfilSalida />} />
      <Route path="/encuestas/" element={<Encuestas />} />
      <Route path="/encuestaSatisfaccion" element={<EncuestaSatisfaccion />} />
      <Route path="/listaUsuarios" element={<ListaUsuarios />} />
      <Route path="/usuariosInactivos" element={<ListaUsuariosInactivos />} />
      <Route path="/editarUsuario/:id" element={<EditarUsuarioLog />} />
      <Route path="/expedientes" element={<DatosExpediente />} />
      <Route path="/encargados" element={<PersonaResponsable />} />
      <Route
        path="/expedientes/editarExpediente"
        element={<EditarDatosExpediente />}
      />
      <Route path="/editarParentezco" element={<EditarParentezco />} />
      <Route path="/convivencia" element={<Convivencia />} />
      <Route path="/editarConvivencia" element={<EditarConvivencia />} />
      <Route path="/datosSocioEconomicos" element={<DatosSocioEconomicos />} />
      <Route path="/editarDatosSE" element={<EditarDatosSE />} />
      <Route path="/factorPsicosocial" element={<FactorPsicosocial />} />
      <Route path="/editarFactor" element={<EditarFactor />} />
      <Route path="/calificacionRiesgo" element={<CalificacionRiesgo />} />
      <Route
        path="/editarCalificacionRiesgo"
        element={<EditarCalificacionRiesgo />}
      />
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
