import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PageDashboard from './latihan/pages/PageDashboard.jsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageDashboard />
  </StrictMode>
);
