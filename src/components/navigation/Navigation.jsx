import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import Logo from '../../images/unal-logo.png';

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="navbar-button">
          []
        </Link>
      </div>
      <nav className={navbar ? "nav-menu open" : "nav-menu"}>
        <div className="container-logo">
          <img  src={Logo} alt="unal logo"/>
        </div>
        <ul className="nav-menu--list">
          <li className="navbar-item">
            <Link to="#" className="navbar-link">
              Posiciones
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/ciclists" className="navbar-link">
              Ciclistas
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/ciclists" className="navbar-link">
              Equipos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
