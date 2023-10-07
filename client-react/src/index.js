import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // React ^18
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Global } from '@emotion/react';
import { baseCss } from './styles/baseStyles';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ScrollFix from "./ScrollFix";

import { DataProvider } from './GlobalData'; // Add GlobalData

import Application from './components/Application';
import { Schedule } from './components/Schedule/Schedule';
import Google from './components/Autocomplete';
import Suggestion from './components/Card';
import Place from './components/Place/Place';
import Duration from './components/Duration';
import User from './components/User/User';
import Dev from './components/Dev';

const rootElement = document.getElementById('root'); // React ^18
const root = createRoot(rootElement); // React ^18

root.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollFix />
      <Global styles={baseCss} />
      <DataProvider>
          <Routes>
            
            <Route path="/" element={<Application />} />
            <Route path="/schedule/:id" element={<Schedule />} />
            <Route path="/google" element={<Google />} />
            <Route path="/card/:location/:id" element={<Suggestion />} />
            <Route path="/duration" element={<Duration />} />
            <Route path="/place/:id" element={<Place />} />
            <Route path="/user" element={<User />} />
            <Route path="/dev" element={<Dev />} />
            
          </Routes>
        </DataProvider>
    </BrowserRouter>
  </StrictMode>
);