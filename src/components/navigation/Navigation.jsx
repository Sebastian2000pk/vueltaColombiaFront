import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import Logo from "../../images/unal-logo.png";

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className={navbar ? "nav-menu open" : "nav-menu"}>
        <div className="navbar-button" onClick={() => setNavbar(!navbar)}>
          <div
            className={
              navbar ? "button-hamburguer activate" : "button-hamburguer"
            }>
            <span className="top-bun"></span>
            <span className="suffing"></span>
            <span className="botton-bun"></span>
          </div>
        </div>
        <div className="container-logo">
          <img src={Logo} alt="unal logo" />
        </div>
        <ul className="nav-menu--list">
          <li className="navbar-item" onClick={() => setNavbar(!navbar)}>
            <Link to="#" className="navbar-link">
              Posiciones
            </Link>
          </li>
          <li className="navbar-item" onClick={() => setNavbar(!navbar)}>
            <Link to="/ciclists" className="navbar-link">
              Ciclistas
            </Link>
          </li>
          <li className="navbar-item" onClick={() => setNavbar(!navbar)}>
            <Link to="/teams" className="navbar-link">
              Equipos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
