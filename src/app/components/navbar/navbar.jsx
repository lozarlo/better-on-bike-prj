import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiHomeVariantOutline, mdiMenu, mdiWindowClose } from "@mdi/js";
import mainLogo from "/assets/icons/main-logo.png";
import "../../../styles/main.css";
import NavMenu from "./nav-menu";

function Navbar() {
  const [isWindowSize, setIsWindowSize] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuToggleIcon, setMenuToggleIcon] = useState(mdiMenu);
  const location = useLocation();
  const mainElement = document.querySelectorAll("main");

  useEffect(() => {
    mainElement.forEach((element) =>
      element.addEventListener("click", function(){
        if(isMenuOpen === true){
          setIsMenuOpen(false);
          setMenuToggleIcon(mdiMenu)
        }
      })
    );
  });

  useEffect(() => {
    setIsMenuOpen(false);
    setMenuToggleIcon(mdiMenu);
  }, [location]);

  useEffect(() => {
    function checkWindowSize() {
      const windowSize = window.innerWidth < 768;
      setIsWindowSize(windowSize);
      //FALSO
      if (!windowSize) {
        setMenuToggleIcon(mdiMenu);
        //SE DIVENTA VERO
        setIsMenuOpen(false);
      }
    }

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  function toggleMenu() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    changeMenuToggleIcon();
  }

  function changeMenuToggleIcon() {
    if (isMenuOpen === false) {
      setMenuToggleIcon(mdiWindowClose);
    } else setMenuToggleIcon(mdiMenu);
  }

  return (
    <header className="header-container">
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-content">
            <div className="navbar-left-content">
              <div className="nav-logo-container">
                <a className="inner-element" href="/">
                  <img
                    className="main-logo"
                    alt="Better on Bike logo"
                    src={mainLogo}
                    onError={(e) => {
                      // Handle image loading error
                      e.target.style.display = "none";
                    }}
                  ></img>
                </a>
              </div>
              <div className="list-element">
                <NavLink className="inner-element" to="/">
                  <Icon path={mdiHomeVariantOutline} title={"Home"} size={1} />
                  <span>Home</span>
                </NavLink>
              </div>
            </div>

            {isWindowSize ? (
              <div className="navbar-right-content">
                <button className="menu-button" onClick={toggleMenu}>
                  <Icon path={menuToggleIcon} title="Menu" size={1} />
                </button>
              </div>
            ) : null}

            {isMenuOpen || !isWindowSize ? <NavMenu /> : null}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
