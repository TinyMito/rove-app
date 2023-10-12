import { MapContainer as Map, useMap, LayersControl, FeatureGroup, TileLayer, Marker, Popup } from "react-leaflet";

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

export default function MapSchedule({ trips, center}) {

  const { userData, setUserData } = globalData();
  const location = useLocation();
 
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
                    const tripname = trip.name

                    return (
                      <Marker 
                        key={tripname}
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
                            {tripname}
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
