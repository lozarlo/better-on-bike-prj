import React from "react";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram } from "@mdi/js";
import mainLogo from "/assets/icons/main-logo.png";

function Footer() {
  return (
    <footer className="footer-container">
      <section className="footer-wrapper">
        <div className="footer-logo-container">

            <img className="main-logo" src={mainLogo}></img>

        </div>
        <div className="social-links-wrapper">
          <p>Segui Better on Bike</p>
          <ul className="social-links-list">
            <li className="social-link">
              <a className="inner-element" href="https://www.facebook.com/profile.php?id=100089859213987">
                <Icon path={mdiFacebook} title={"Facebook"} size={1.2} />
              </a>
            </li>
            <li className="social-link">
              <a className="inner-element" href="https://www.instagram.com/better_on_bike/">
                <Icon path={mdiInstagram} title={"Instagram"} size={1.2} />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="sub-footer">
        <p>© 2024 Better on Bike Srls - P. IVA: 16992361002</p>
        <p>Lorenzo Guido Zarlenga</p>
      </div>
    </footer>
  );
}

export default Footer;
