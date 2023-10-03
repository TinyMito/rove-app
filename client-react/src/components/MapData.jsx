import React from "react";
import { MapContainer as Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapData.css";
import { useLocation } from "react-router-dom";

export default function MapData() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const latitude = parseFloat(queryParams.get("lat")) || 51.505;
  const longitude = parseFloat(queryParams.get("lng")) || -0.09;

  return (
    <div className="centered-square-map">
      <Map
        center={[latitude, longitude]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        <Marker position={[latitude, longitude]}>
          <Popup>Selected Place</Popup>
        </Marker>
      </Map>
    </div>
  );
}
