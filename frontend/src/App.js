import { BrowserRouter } from 'react-router-dom';
import Router from './router/routes';

export default function App() {
  return (
    <div>
      <BrowserRouter basename='/frontend/src/components'>
        <Router />
      </BrowserRouter>
    </div>
  );
}
