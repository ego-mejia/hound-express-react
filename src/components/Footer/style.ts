import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors.darkBlue};
    background-color: red;
    color: white;
    padding: 40px 80px;

    p{
        font-size: 14px;
        margin: 0;
    }
`;

export const FooterWrapper = styled.div`
    background-color: yellow;

    display: flex;
    flex-direction: row; /* Alinea los elementos en una fila */
    justify-content: space-between; /* Separa los elementos */
    align-items: center; /* Alinea verticalmente */
    flex-wrap: wrap; /* Permite que los elementos se acomoden en pantallas pequeñas */


`;

export const LogoLink = styled.a`
    background-color: magenta;
    
    max-width: 151.62px;
    width: 100%;
    cursor: pointer;
    display: flex;
    img{
        max-width: 151.62px;
        width: 100%;
    }
`;

export const FooterTextContainer = styled.div`
    background-color: green;
    display: flex;
    flex-direction: row; //!row??
    gap: 10px;
    flex-wrap: wrap;

  /* Ajuste para responsive si quieres */
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;