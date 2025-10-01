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

  a{
        text-decoration: none;
        color: white;
    }
    
    p {
      color: white;
      font-size: 20px;
    }

`;

export const Logo = styled.img`
  max-width: 271.98px;
  width: 100%;
`;

export const NavbarLinks = styled.ul`
      display: flex;
      justify-content: space-between;
      max-width: 530px;
      width: 100%;
      list-style: none;
      display: flex;
      
      li {
        display: inline;
        
        a {
            color: white;
            text-decoration: none;
            font-weight: normal;
            font-size: 18px;
        }
      }

`;
export const RightContainer = styled.div`
        display: flex;
        max-width: 850px;
        width: 100%;
        align-items: center;
        justify-content: space-between;
`;
