// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

import React from "react";
import { MapContainer as Map, TileLayer, Marker, Popup } from "react-leaflet";
// import from leaflet
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import "../../styles/MapData.css";
import { useLocation } from "react-router-dom";

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function MapData() {
  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const latitude = parseFloat(queryParams.get("lat")) || 51.505;
  const longitude = parseFloat(queryParams.get("lng")) || -0.09;

  let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <div className="box"> 
      <div className="flex-row">
        <Navigation loggedIn={userData.loggedIn} userId={userData.id} userImg={userData.userImg} />
        <div className="flex-column">
          <div styles="padding: 0; margin: 0;">
              <div className="centered-square-map">
                <Map
                  id="map"
                  center={[latitude, longitude]}
                  zoom={13}
                  style={{ width: "100%", height: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={19}
                  />
                  <Marker 
                    position={[latitude, longitude]}   
                    >
                    <Popup
                    icon={icon}                   
                    >Selected Place</Popup>
                  </Marker>
                </Map>
              </div>
            </div>
        </div>
      </div>
    </div>  );
}
