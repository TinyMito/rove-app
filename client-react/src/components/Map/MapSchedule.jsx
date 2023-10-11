import { useState, useEffect, useMemo } from 'react';
import { MapContainer as Map, LayersControl, FeatureGroup, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from 'react-router-dom';
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

import { useMap } from './useMap';

export default function MapSchedule() {

  const { userData, setUserData } = globalData();
  const { id } = useParams();
  const { trips } = useMap({ id });

  const [center, setCenter] = useState([47.6067006, -122.3325009]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const centers = useMemo(() => {
    return trips.map((trip) => 
      [trip.latitude, trip.longitude]
    )
  }, [trips]);

  useEffect(() => { 
    setCenter(centers[0]);
  }, [centers[0]]);

  return (
    <div className="box"> 
      <div className="flex-row">
        <Navigation loggedIn={userData.loggedIn} userId={userData.id} userImg={userData.userImg} />
        <div className="flex-column">
          <div styles="padding: 0; margin: 0;">
              <div className="centered-square-map">
                <Map
                  id="map"
                  center={center}
                  zoom={15}
                  style={{ width: "100%", height: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={19}
                  />
                  {trips.map((trip) => {
                    const latitude = parseFloat(trip.latitude)
                    const longitude = parseFloat(trip.longitude)
                    const tripName = trip.name

                    return (
                      <Marker 
                        key={tripName}
                        position={[latitude, longitude]}   
                        >
                        <Popup
                          icon={icon}
                          className="popup-schedule"                            maxWidth={1000} 
                          closeButton={false}   
                          offset={[25, 0]}
                        >
                          <div 
                            className="popup-text"                         
                          >
                            {tripName}
                          </div>
                        </Popup>
                      </Marker>
                    )
                   })
                  }
                </Map>
              </div>
            </div>
        </div>
      </div>
    </div>  );
}
