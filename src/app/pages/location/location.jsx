import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

/* FIX PER MARKER */
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});
/* FIX PER MARKER */

function Location() {
  const positionCoordinates = [41.761888, 12.615805];
  return (
    <main className="location-main-container">
      <MapContainer
        center={positionCoordinates}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionCoordinates}>
          <Popup>
            <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/oTusYKtQXYYusd4T8">
              Via nettunense 64 - 00047 - Marino (RM)
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
}
export default Location;
