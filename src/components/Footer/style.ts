import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: red;

    background-color: $dark-blue;
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
    max-width: 151.62px;
    width: 100%;

    img{
        max-width: 151.62px;
        width: 100%;
    }
`;