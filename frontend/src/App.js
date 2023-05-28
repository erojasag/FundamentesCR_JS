
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Inicio from './Pages/Inicio'
import Resgistrarse from './Pages/Registrarse'
import ForgotPass from './Pages/ForgotPass'
import Pascientes from './Pages/Pascientes'
import EditarPasciente from './Pages/EditarPasciente';
import PerfilEntrada from './Pages/PerfilEntrada';
import EditarPerfilEntrada from './Pages/EditarPerfilEntrada';
import PerfilSalida from './Pages/PerfilSalida';
import EditarPerfilSalida from './Pages/EditarPerfilSalida';
import EncuestaSatisfaccion from './Pages/EncuestaSatisfaccion';
import Encuestas from './Pages/Encuestas';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="/Registrarse" element={<Resgistrarse/>}/>
          <Route path="/ForgotPass" element={<ForgotPass/>}/>
          <Route path="/Pascientes" element={<Pascientes/>}/>
          <Route path="/EditarPasciente" element={<EditarPasciente/>}/>
          <Route path="/PerfilEntrada" element={<PerfilEntrada/>}/>
          <Route path="/EditarPerfilEntrada" element={<EditarPerfilEntrada/>}/>
          <Route path="/PerfilSalida" element={<PerfilSalida/>}/>
          <Route path="/EditarPerfilSalida" element={<EditarPerfilSalida/>}/>
          <Route path="/EncuestaSatisfaccion" element={<EncuestaSatisfaccion/>}/>
          <Route path="/Encuestas" element={<Encuestas/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
