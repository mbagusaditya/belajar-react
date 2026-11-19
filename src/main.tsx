import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
// import PageLogin from './latihan/pages/PageLogin.tsx';
import PageRegister from './latihan/pages/PageRegister.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<PageLogin />*/}
    <PageRegister />
  </StrictMode>
);
