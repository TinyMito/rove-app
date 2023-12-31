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

import NotFoundPage from './components/404';
import Application from './components/Application';
import { Schedule } from './components/Schedule/Schedule';
import Google from './components/Survey/Autocomplete';
import Suggestion from './components/Survey/Card';
import Place from './components/Place/Place';
import Duration from './components/Survey/Duration';
import User from './components/User/User';
import Dev from './components/Dev/Dev';
import Modal from './components/Survey/Modal'
import MapData from 'components/Map/MapData';
import Access from 'components/User/Access';
import About from 'components/About/About';
import Team from 'components/Team/Team';
import MapMaster from 'components/Map/MapMaster'

const rootElement = document.getElementById('root'); // React ^18
const root = createRoot(rootElement); // React ^18

root.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollFix />
      <Global styles={baseCss} />
      <DataProvider>
        <Routes>
          <Route path="/*" element={<NotFoundPage />} />
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
          <Route path="/map" element={<MapData />} />
          <Route path="/map/:id" element={<MapMaster />} />
          <Route path="/access" element={<Access />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <footer style={{display: 'block', width: 'auto', textAlign: 'center', padding: '50px', color: '#555', fontSize: '1.2em'}}>
          © 2023 Rove, A Lighthouse Labs' final project by Kevin Ip, EunSoo Kim, Raymond Lin and Ahmed Alhajahmed.
        </footer>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);