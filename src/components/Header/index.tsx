import React from "react";

// Files
import lightLogo from "../../assets/logo--light.png"

// Style
import { Navbar } from "./style";



const Header = () => {
  return (
    <>
      <h1>Header</h1>
      {/* <Navbar > class="navbar" */}
      <Navbar>
        <a href="./index.html">
          <img
            src={lightLogo}
            class="navbar--logo"
            alt="Hound Express logo"
          />
        </a>
        <div class="navbar--right">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Registro</a>
            </li>
            <li>
              <a href="#">Estado General</a>
            </li>
            <li>
              <a href="#">Lista</a>
            </li>
            <li>
              <a href="#">Historial</a>
            </li>
          </ul>
          <div class="search">
            <button class="search__button" onclick="buscar()">
              <img src="assets/search-icon.svg" alt="Buscar" />
            </button>
            <input
              class="search__input"
              id="search"
              placeholder="Ingresar número de rastreo"
              type="text"
            />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
