import styled from "styled-components";

// Mixins
import { wrapperMixin, bgDebug } from "../../styles/mixins";

export const Main = styled.section`
    ${bgDebug('transparent','magenta')};


    display: flex;
    flex-direction: column;
    margin-top: 50px;
    position: relative;
    /* padding-top: 50px; */
    align-items: center;
    height: 600px;
    background: url('data:image/svg+xml;utf8,<svg width="1440" height="718" viewBox="0 0 1440 718" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="1440" height="718" fill="url(%23paint0_linear_13_1310)"/><defs><linearGradient id="paint0_linear_13_1310" x1="0" y1="0" x2="1735.55" y2="246.119" gradientUnits="userSpaceOnUse"><stop stop-color="%237DB7D9"/><stop offset="1" stop-color="%2399ECF5" stop-opacity="0.23"/></linearGradient></defs></svg>') no-repeat center/cover;
    background-size: cover; /* Hace que el fondo cubra toda la sección */
    background-position: center; /* Centra la imagen */
    background-repeat: no-repeat; /* Evita repeticiones */
    padding: 0 80px;

    
`;

export const Wrapper = styled.div`
    ${wrapperMixin};
    ${bgDebug('transparent','red')};

    h1{
        max-width: 980px;
        font-weight:800;
        /* font-size: 71.8px; */
        line-height: 100%;
        
        font-size: clamp(40px, 4vw, 71.8px);
    }
    p{
        max-width: 650px;
        font-weight:normal;
        line-height: 140%;
    
        font-size: clamp(18px, 2vw, 24px);
    }

    img{
        z-index: 9;
        max-width: 708.42px;
        position:absolute;
        width: 60vw;
        bottom: -74.24px;
        transform: rotate(-7deg);
        right: -80px;
    }
`;

export const TrackFormContainer = styled.div`
    margin-top: 35px;
    position: relative;
    z-index: 10;
    max-width: 513px;
    width: 100%;
    /* background-color: fuchsia; */
    input{
        width: 100%;
        height: 50px;
        background-color: white;
        /* font-size: 18px; */
        font-size: clamp(14px, 3vw, 18px);
        color: $medium-gray;
        padding-left: 16px;
        border-style: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        outline: none;
    }
    
    h3{
        font-size: 24px;
        
    }
    button{
        position: absolute;
        right: 0;
        cursor: pointer;
        font-size: clamp(14px, 3vw, 18px);
    }
`;

export const TrackInputWrapper = styled.div`
    position: relative;

`;