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
import Duration from './components/Survey/Duration';
import User from './components/User/User';
import Dev from './components/Dev';
import Modal from './components/Modal'
import RegistrationForm from 'components/User/RegistrationForm';
import LoginForm from 'components/User/LoginForm';
import MapData from 'components/MapData';


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
          <Route path="/survey" element={<Duration />} />
          <Route path="/place/:id" element={<Place />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/user" element={<User />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/map" element={<MapData />} />

        </Routes>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);