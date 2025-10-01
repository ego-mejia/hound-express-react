// src/styles/theme.ts
export const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1DB954",
    background: "#f5f5f5",
    text: "#333",
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  spacing: (factor: number) => `${0.25 * factor}rem`, // función utilitaria
};

export type ThemeType = typeof theme;
