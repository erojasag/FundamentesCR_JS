import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

import UsuarioLog from '../Pages/UsuarioLog';
import EditarUsuarioLog from '../Pages/EditarUsuarioLog';
import DatosExpediente from '../Pages/DatosExpediente';
import PersonaResponsable from '../Pages/PersonaResponsable';
import EditarDatosExpediente from '../Pages/EditarDatosExpediente';
import EditarParentezco from '../Pages/EditarParentezco';
import Convivencia from '../Pages/Convivencia';
import EditarConvivencia from '../Pages/EditarConvivencia';
import DatosSocioEconomicos from '../Pages/DatosSocioEconomicos';
import EditarDatosSE from '../Pages/EditarDatosSE';
import FactorPsicosocial from '../Pages/FactorPsicosocial';
import EditarFactor from '../Pages/EditarFactor';
import CalificacionRiesgo from '../Pages/CalificacionRiesgo';
import EditarCalificacionRiesgo from '../Pages/EditarCalificacionRiesgo';
import EstadoExpendiente from '../Pages/EstadoExpediente';
import EditarEstadoExp from '../Pages/EditarEstadoExp';
import ReporteExpediente from '../Pages/ReporteExpediente';
import Acciones from '../Pages/Acciones';
import Error404 from '../Pages/Error404';
import Resgistrarse from '../Pages/Registrarse';
import Pacientes from '../Pages/Pacientes';
import EditarPaciente from '../Pages/EditarPaciente';
import PerfilEntrada from '../Pages/PerfilEntrada';
import EditarPerfilEntrada from '../Pages/EditarPerfilEntrada';
import PerfilSalida from '../Pages/PerfilSalida';
import EditarPerfilSalida from '../Pages/EditarPerfilSalida';
import Encuestas from '../Pages/Encuestas';
import EncuestaSatisfaccion from '../Pages/EncuestaSatisfaccion';
import ResetPass from '../Pages/ResetPass';
import Index from '../Pages/DatosExpediente';
import Perfil from '../Pages/Perfil';
import CambiarContrasena from '../Pages/cambiarContrasena';
import ForgotPass from '../Pages/ForgotPass';
function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Inicio" element={<Index />} />
      <Route path="/Registrarse" element={<Resgistrarse />} />
      <Route path="/OlvideMiContrasena" element={<ForgotPass />} />
      <Route path="/Pacientes" element={<Pacientes />} />
      <Route path="/Pacientes/EditarPaciente" element={<EditarPaciente />} />
      <Route path="/PerfilEntrada" element={<PerfilEntrada />} />
      <Route path="/EditarPerfilEntrada" element={<EditarPerfilEntrada />} />
      <Route path="/PerfilSalida" element={<PerfilSalida />} />
      <Route path="/EditarPerfilSalida" element={<EditarPerfilSalida />} />
      <Route path="/Encuestas/" element={<Encuestas />} />
      <Route
        path="/Encuestas/EncuestaSatisfaccion"
        element={<EncuestaSatisfaccion />}
      />
      <Route path="/UsuarioLog" element={<UsuarioLog />} />
      <Route path="/EditarUsuarioLog" element={<EditarUsuarioLog />} />
      <Route
        path="/Expedientes/DatosExpediente"
        element={<DatosExpediente />}
      />
      <Route path="/PersonaResponsable" element={<PersonaResponsable />} />
      <Route
        path="/Expedientes/EditarDatosExpediente"
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
      <Route path="/Users/ResetPassword/:token" element={<ResetPass />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/CambiarMiContrasena" element={<CambiarContrasena />} />
    </Routes>
  );
}

export default Router;
