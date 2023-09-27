import { createRoot } from 'react-dom/client'; // React ^18
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Temporary
import { Global } from '@emotion/react';
import { baseCss } from './styles/baseStyles';
import './index.scss';
import Application from './components/Application';
import Schedule from './components/Schedule';
import Developer from './components/DevCss'; // Temporary
import Google from './components/Autocomplete';

const rootElement = document.getElementById('root'); // React ^18
const root = createRoot(rootElement); // React ^18
root.render(
  <BrowserRouter>
    <Global styles={ baseCss } />
    <Routes>
      <Route path="/" element={ <Application/> } />
      <Route path="/schedule" element={ <Schedule /> } />
      <Route path="/dev" element={ <Developer/> } /> // Temporary
      <Route path="/google" element={ <Google />} />
    </Routes>
  </BrowserRouter>
);