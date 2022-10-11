import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import {
  FiHome,
  FiUser,
  FiGrid,
  FiPhoneOutgoing,
} from "react-icons/fi";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* TOPBAR  */}
      <div className={navbar ? "beny_tm_topbar animate" : "beny_tm_topbar"}>
        <div className="in">
          <div className="topbar_inner">
            <div className="menu">
              <Scrollspy
                className="anchor_nav"
                items={[
                  "home",
                  "about",
                  "portfolio",
                  "contact",
                ]}
                currentClassName="current"
                offset={-88}
              >
                <li className="current">
                  <a href="#home">
                    <span className="first">Accueil</span>
                    <span className="second">Accueil</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span className="first">A propos</span>
                    <span className="second">A propos</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <span className="first">Portfolio</span>
                    <span className="second">Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span className="first">Contact</span>
                    <span className="second">Contact</span>
                  </a>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
      {/* /TOPBAR */}

      <div className="mobile-menu-wrapper">
        <Scrollspy
          className="mobile_menu-icon"
          items={["home", "about", "portfolio", "contact"]}
          currentClassName="current"
          offset={-65}
        >
          <li>
            <a href="#home">
              <FiHome />
              <span>Accueil</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FiUser />
              <span>A propos</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <FiGrid />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FiPhoneOutgoing />
              <span>Contact</span>
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* End mobile-menu */}
    </>
  );
};

export default Header;
