import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/routes';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
