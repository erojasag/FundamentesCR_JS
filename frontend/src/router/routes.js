import { Route, Routes } from 'react-router-dom';
import Login from '../components/Views/Login';

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
import Resgistrarse from '../components/Views/Registrarse';
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

function Router() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/Inicio" element={<Index />} />
      <Route path="/Registrarse" element={<Resgistrarse />} />
      <Route path="/OlvideMiContrasena" element={<ForgotPass />} />
      <Route path="/Pacientes" element={<Pacientes />} />
      <Route
        path="/Pacientes/EditarPaciente/:id"
        element={<EditarPaciente />}
      />
      <Route path="/PerfilEntrada" element={<PerfilEntrada />} />
      <Route path="/EditarPerfilEntrada" element={<EditarPerfilEntrada />} />
      <Route path="/PerfilSalida" element={<PerfilSalida />} />
      <Route path="/EditarPerfilSalida" element={<EditarPerfilSalida />} />
      <Route path="/Encuestas/" element={<Encuestas />} />
      <Route path="/EncuestaSatisfaccion" element={<EncuestaSatisfaccion />} />
      <Route path="/ListaUsuarios" element={<ListaUsuarios />} />
      <Route path="/EditarUsuario" element={<EditarUsuarioLog />} />
      <Route path="/Expedientes" element={<DatosExpediente />} />
      <Route path="/Encargados" element={<PersonaResponsable />} />
      <Route
        path="/Expedientes/EditarExpediente"
        element={<EditarDatosExpediente />}
      />
      <Route path="/EditarParentezco" element={<EditarParentezco />} />
      <Route path="/Convivencia" element={<Convivencia />} />
      <Route path="/EditarConvivencia" element={<EditarConvivencia />} />
      <Route path="/DatosSocioEconomicos" element={<DatosSocioEconomicos />} />
      <Route path="/EditarDatosSE" element={<EditarDatosSE />} />
      <Route path="/FactorPsicosocial" element={<FactorPsicosocial />} />
      <Route path="/EditarFactor" element={<EditarFactor />} />
      <Route path="/CalificacionRiesgo" element={<CalificacionRiesgo />} />
      <Route
        path="/EditarCalificacionRiesgo"
        element={<EditarCalificacionRiesgo />}
      />
      <Route
        path="/Expedientes/EstadoExpediente"
        element={<EstadoExpendiente />}
      />
      <Route path="/EditarEstadoExp" element={<EditarEstadoExp />} />
      <Route path="/ReporteExpediente" element={<ReporteExpediente />} />
      <Route path="/Acciones" element={<Acciones />} />
      <Route path="/Error404" element={<Error404 />} />
      <Route
        path="/usuarios/reiniciarContrasena/:token"
        element={<ResetPass />}
      />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/CambiarMiContrasena" element={<CambiarContrasena />} />
    </Routes>
  );
}

export default Router;
