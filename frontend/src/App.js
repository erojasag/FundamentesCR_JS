
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Inicio from './Pages/Inicio'
import UsuarioLog from './Pages/UsuarioLog'
import EditarUsuarioLog from './Pages/EditarUsuarioLog'
import DatosExpediente from './Pages/DatosExpediente'
import PersonaResponsable from './Pages/PersonaResponsable'
import EditarDatosExpediente from './Pages/EditarDatosExpediente'
import EditarParentezco from './Pages/EditarParentezco'
import Convivencia from './Pages/Convivencia'
import EditarConvivencia from './Pages/EditarConvivencia'
import DatosSocioEconomicos from './Pages/DatosSocioEconomicos'
import EditarDatosSE from './Pages/EditarDatosSE'
import FactorPsicosocial from './Pages/FactorPsicosocial'
import EditarFactor from './Pages/EditarFactor'
import CalificacionRiesgo from './Pages/CalificacionRiesgo';
import EditarCalificacionRiesgo from './Pages/EditarCalificacionRiesgo';
import EstadoExpendiente from './Pages/EstadoExpediente';
import EditarEstadoExp from './Pages/EditarEstadoExp';
import ReporteExpediente from './Pages/ReporteExpediente';
import Acciones from './Pages/Acciones';
import Error404 from './Pages/Error404';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="/UsuarioLog" element={<UsuarioLog/>}/>
          <Route path="/EditarUsuarioLog" element={<EditarUsuarioLog/>}/>
          <Route path="/DatosExpediente" element={<DatosExpediente/>}/>
          <Route path="/PersonaResponsable" element={<PersonaResponsable/>}/>
          <Route path="/EditarDatosExpediente" element={<EditarDatosExpediente/>}/>
          <Route path="/EditarParentezco" element={<EditarParentezco/>}/>
          <Route path="/Convivencia" element={<Convivencia/>}/>
          <Route path="/EditarConvivencia" element={<EditarConvivencia/>}/>
          <Route path="/DatosSocioEconomicos" element={<DatosSocioEconomicos/>}/>
          <Route path="/EditarDatosSE" element={<EditarDatosSE/>}/>
          <Route path="/FactorPsicosocial" element={<FactorPsicosocial/>}/>
          <Route path="/EditarFactor" element={<EditarFactor/>}/>
          <Route path="/CalificacionRiesgo" element={<CalificacionRiesgo/>}/>
          <Route path="/EditarCalificacionRiesgo" element={<EditarCalificacionRiesgo/>}/>
          <Route path="/EstadoExpediente" element={<EstadoExpendiente/>}/>
          <Route path="/EditarEstadoExp" element={<EditarEstadoExp/>}/>
          <Route path="/ReporteExpediente" element={<ReporteExpediente/>}/>
          <Route path="/Acciones" element={<Acciones/>}/>
          <Route path="/Error404" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
