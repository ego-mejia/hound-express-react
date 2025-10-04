import styled from "styled-components";
import { wrapperMixin } from "../../styles/mixins";

export const FooterContainer = styled.footer`
    background-color: red;
`;

export const FooterWrapper = styled.div`
    /* ${wrapperMixin}; */
    background-color: yellow;

    display: flex;
    flex-direction: row; /* Alinea los elementos en una fila */
    justify-content: space-between; /* Separa los elementos */
    align-items: center; /* Alinea verticalmente */
    flex-wrap: wrap; /* Permite que los elementos se acomoden en pantallas pequeñas */
`;