import { createRoot } from 'react-dom/client'; // React ^18
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Temporary
import { Global } from '@emotion/react';
import { baseCss } from './styles/baseStyles';
import './index.scss';

import Application from './components/Application';
import { Schedule } from './components/Schedule/Schedule';
import Developer from './components/DevCss'; // Temporary
import Google from './components/Autocomplete';
import Suggestion from './components/Card';
import Detail from './components/Detail';
import Duration from './components/Duration';
import User from './components/User';

const rootElement = document.getElementById('root'); // React ^18
const root = createRoot(rootElement); // React ^18
root.render(
  <BrowserRouter>
    <Global styles={baseCss} />
    <Routes>
      <Route path="/" element={<Application />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/dev" element={<Developer />} />
      <Route path="/google" element={<Google />} />
      <Route path="/card" element={<Suggestion />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/duration" element={<Duration />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  </BrowserRouter>
);