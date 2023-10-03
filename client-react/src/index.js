import { createRoot } from 'react-dom/client'; // React ^18
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Temporary
import { Global } from '@emotion/react';
import { baseCss } from './styles/baseStyles';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Application from './components/Application';
import { Schedule } from './components/Schedule/Schedule';
import Developer from './components/DevCss'; // Temporary
import Google from './components/Autocomplete';
import Suggestion from './components/Card';
import Place from './components/Place/Place';
import Duration from './components/Duration';
import User from './components/User/User';

const rootElement = document.getElementById('root'); // React ^18
const root = createRoot(rootElement); // React ^18
root.render(
  <BrowserRouter>
    <Global styles={baseCss} />
    <Routes>
      <Route path="/" element={<Application />} />
      <Route path="/schedule/:id" element={<Schedule />} />
      <Route path="/dev" element={<Developer />} />
      <Route path="/google" element={<Google />} />
      <Route path="/card/:location/:id" element={<Suggestion />} />
      <Route path="/duration" element={<Duration />} />
      <Route path="/place/:id" element={<Place />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  </BrowserRouter>
);