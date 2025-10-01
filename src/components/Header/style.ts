import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: red;
  position: fixed;
    z-index: 1000;
    top: 0;

    background-color: $dark-blue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    height: 100px;
`;

export const Logo = styled.img`
  max-width: 271.98px;
  width: 100%;
`;

export const NavbarLinks = styled.div`
        display: flex;
        max-width: 850px;
        width: 100%;
        align-items: center;
        justify-content: space-between;
`;
