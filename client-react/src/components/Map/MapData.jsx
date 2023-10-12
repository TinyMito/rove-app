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
  const latitude = parseFloat(queryParams.get("lat")) || 43.65;
  const longitude = parseFloat(queryParams.get("lng")) || -79.40;
  const tripname = queryParams.get("tripname") || "Hello World!";

  let DefaultIcon = L.icon({
    iconUrl: require('assets/images/pin.png'),
    shadowUrl: undefined,
    iconSize:     [60, 60],
    shadowSize:   [0, 0], 
    iconAnchor:   [30, 60],
    shadowAnchor: [0, 0],
    popupAnchor:  [-25, -60]
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <div className="box"> 
      <div className="flex-row">
      <Navigation userImg={userData.userImg} />
        <div className="flex-column">
          <div styles="padding: 0; margin: 0;">
              <div className="centered-square-map">
                <Map
                  id="map"
                  center={[latitude, longitude]}
                  zoom={17}
                  style={{ width: "100%", height: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={20}
                  />
                  <Marker 
                    position={[latitude, longitude]}   
                    >
                    <Popup
                      icon={icon}
                      className="popup-schedule"
                      maxWidth={1000}
                      closeButton={false}
                      offset={[25, 0]}                   
                    >
                      <div className="popup-text">
                        {tripname}
                      </div>
                    </Popup>
                  </Marker>
                </Map>
              </div>
            </div>
        </div>
      </div>
    </div>  );
}
