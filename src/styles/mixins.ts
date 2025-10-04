import { css } from "styled-components";
import type { ThemeType } from "./theme";
/**
 * 🎨 Mixin Wrapper Reutilizable
 * Contenedor base para secciones o layouts
 * - Limita ancho
 * - Centra contenido
 * - Aplica padding y gap consistentes
 * - Es responsive
 */
export const wrapperMixin = css`
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

/**
 * 🔹 bgDebug
 * Aplica un background dinámico según la variable `theme.debug`
 * @param normalColor Color normal del background
 * @param debugColor Color de debug cuando theme.debug = true
 */
// mixins.ts
export const bgDebug = (
  colorKey: keyof ThemeType["colors"],
  debugColor: string
) => css`
  background-color: ${({ theme }) =>
    theme.debug ? debugColor : theme.colors[colorKey]};
`;
