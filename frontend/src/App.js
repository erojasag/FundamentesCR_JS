
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Inicio from './Pages/Inicio'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Inicio" element={<Inicio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
