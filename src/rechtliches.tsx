import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Rechtliches from './pages/Rechtliches.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rechtliches />
  </StrictMode>,
);
