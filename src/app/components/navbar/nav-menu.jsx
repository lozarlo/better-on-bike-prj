import React from "react";
import Icon from "@mdi/react";
import {
  mdiViewGalleryOutline,
  mdiInformationOutline,
  mdiMapMarkerOutline,
} from "@mdi/js";
import "../../../styles/main.css";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <ul className="navbar-list">
      <li className="list-element">
        <NavLink className="inner-element" to="/gallery">
          <Icon path={mdiViewGalleryOutline} title="gallery" size={1} />
          <span>Gallery</span>
        </NavLink>
      </li>
      <li className="list-element">
        <NavLink className="inner-element" to="/about">
          <Icon path={mdiInformationOutline} title={"Info"} size={1} />
          <span>Su di noi</span>
        </NavLink>
      </li>
      <li className="list-element">
        <NavLink className="inner-element" to="/location">
          <Icon path={mdiMapMarkerOutline} title={"Location"} size={1} />
          <span>Mappa</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default NavMenu;
