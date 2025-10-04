// import React from "react";

// Files
import lightLogo from "../../assets/logo--light.png";
import searchIcon from "../../assets/search-icon.svg";

// Style
import {
  Navbar,
  Logo,
  NavbarLinks,
  RightContainer,
  SearchInput,
} from "./style";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <Navbar>
        <a href="./index.html">
          <Logo src={lightLogo} alt="Hound Express logo" />
        </a>
        <RightContainer>
          <NavbarLinks>
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
          </NavbarLinks>

          <SearchInput>
            <button onclick="buscar()">
              <img src={searchIcon} alt="Buscar" />
            </button>
            <input
              id="search"
              placeholder="Ingresar número de rastreo"
              type="text"
            />
          </SearchInput>
        </RightContainer>
      </Navbar>
    </>
  );
};

export default Header;
