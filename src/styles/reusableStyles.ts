import styled from "styled-components";

/**
 * 🔹 Wrapper reutilizable
 * - Centra y limita el contenido
 * - Mantiene padding y spacing consistentes
 * - Adapta el layout según el tamaño de pantalla
 */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1400px;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  padding: 60px 20px;
  gap: 10px;

  /* 💻 Desktop */
  /* @media (min-width: ${({ theme }) => theme.breakpoints.laptopSm}) {
    padding: 80px 40px;
  } */

  /* 📱 Tablet */
  /* @media (max-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    padding: 50px 30px;
  } */

  /* 📱 Mobile */
  /* @media (max-width: ${({ theme }) => theme.breakpoints.mobileMd}) {
    padding: 40px 16px;
    gap: 8px;
  } */
`;
