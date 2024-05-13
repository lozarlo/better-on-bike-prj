import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Icon from "@mdi/react";
import {
  mdiEmailArrowRight,
  mdiPhoneForward,
  mdiCellphoneBasic,
  mdiMapMarker,
} from "@mdi/js";

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

function About() {
  const positionCoordinates = [41.761888, 12.615805];
  return (
    <main className="about-main-container">
      <section className="mid-section">
        <div className="section-content-wrapper">
          <div className="section-col">
            <h2 className="section-title">I nostri contatti</h2>
            <div className="contact-info">
              <div className="contact-info-item">
                <Icon path={mdiEmailArrowRight} size={1} />
                <a href="mailto:betteronbike@gmail.com">betteronbike@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <Icon path={mdiCellphoneBasic} size={1} />
                <a href="tel:+39/3382996483">+39 3382996483</a>
              </div>

              <div className="contact-info-item">
                <Icon path={mdiPhoneForward} size={1} />
                <a href="tel:0693546196">0693546196</a>
              </div>

              <div className="contact-info-item">
                <Icon path={mdiMapMarker} size={1} />
                <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/oTusYKtQXYYusd4T8">
                  Via nettunense 64 - 00047 - Marino (RM)
                </a>
              </div>
            </div>
          </div>
          <div className="section-map-wrapper">
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
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
