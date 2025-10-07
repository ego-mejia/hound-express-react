import styled from "styled-components";

// Mixin
import { bgDebug } from "../../styles/mixins";


export const GeneralSection = styled.section`
    padding: 0 80px;
    @media (max-width: 1280px) {
      padding: 0 20px;
    }
}

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
  ${bgDebug('transparent','cyan')};
  max-width: 290px;
  width: 100%;
  display: flex;
  height: 156px;
  position: relative;
  margin-right: 38px;
  border-radius: 15px;
  /* Reemplaza la variable Sass por tu variable de theme */
  border: 1px solid ${({ theme }) => theme.colors.borderGray}; 

  @media (max-width: 768px) {
    height: 120px;
    margin-right: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    min-height: 80px;
    max-height: 100px;
    justify-content: space-between;
  }

  `;

export const Value = styled.p` /* Asumo que es un <p> o <div>, no importa */
  position: relative;
  font-size: clamp(28px, 4vw, 40px);
  /* Reemplaza la variable Sass por tu variable de theme */
  color: ${({ theme }) => theme.colors.darkBlue}; 
  top: 35px;
  left: 18px;
  font-weight: bold;

  @media (max-width: 768px) {
    top: 15px;
    // font-size: 22px;
    // left: 10px;
  }
    @media (max-width: 480px) {
    top: 5px;
    font-size: 22px;
    left: 10px;
  }
`;

export const Title = styled.h2` /* Asumo que es un <h2> o <p> */
  position: absolute;
  font-size: clamp(12px, 2.5vw, 18px);
  font-weight: bold;
  /* Reemplaza la variable Sass por tu variable de theme */
  color: ${({ theme }) => theme.colors.mediumGray};
  left: 18px;
  bottom: 28px;
  
  @media (max-width: 768px) {
    bottom: 20px;
  }
    @media (max-width: 480px) {
    position: relative;
    font-size: clamp(12px, 2.5vw, 14px);
    left: 10px;
    bottom: 10px;
  }
`;

