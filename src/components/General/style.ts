import styled from "styled-components";

// Mixin
import { bgDebug } from "../../styles/mixins";


export const GeneralSection = styled.section`
    /* padding: 0 80px; */

`;
export const GeneralWrapper = styled.div`
    ${bgDebug('transparent','greenyellow')};
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    width: 100%;
    padding-top: 60px;
    margin: 0 auto;
    `;

export const CardsContainer = styled.div`
    ${bgDebug('transparent','fuchsia')};
    display: flex;
    justify-content: left;
        
`;

export const Card = styled.div`
  max-width: 290px;
  width: 100%;
  display: flex;
  height: 156px;
  position: relative;
  background-color: white;
  margin-right: 38px;
  border-radius: 15px;
  /* Reemplaza la variable Sass por tu variable de theme */
  border: 1px solid ${({ theme }) => theme.colors.borderGray}; 
`;

export const Value = styled.p` /* Asumo que es un <p> o <div>, no importa */
  position: relative;
  font-size: clamp(28px, 4vw, 40px);
  /* Reemplaza la variable Sass por tu variable de theme */
  color: ${({ theme }) => theme.colors.darkBlue}; 
  top: 35px;
  left: 18px;
  font-weight: bold;
`;

export const Title = styled.h2` /* Asumo que es un <h2> o <p> */
  position: absolute;
  font-size: clamp(12px, 2.5vw, 18px);
  font-weight: bold;
  /* Reemplaza la variable Sass por tu variable de theme */
  color: ${({ theme }) => theme.colors.mediumGray};
  left: 18px;
  bottom: 28px;
`;