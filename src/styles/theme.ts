// src/styles/theme.ts
export const theme = {
    // COLORS
    colors: {
        // 🎨 Colores principales
        darkBlue: "#171138",
        lightBlue: "#7DB7D9",
        skyBlue: "#99ECF5",
        placeholderText: "#8A8C8E",
        borderGray: "#8A8C8E",
        mediumGray: "#5B5B5B",

        // 🎨 Paleta base
        primary: "#0070f3",
        secondary: "#1DB954",
        background: "#f5f5f5",
        text: "#333",

        // 🏓 Table
        table: {
        colColor: "#007BFF",
        statusPending: "#1D648C",
        statusProgress: "orange",
        statusDelivered: "green",
        button: "#28a745",
        buttonHover: "#218838",
        },
  },
  // 🎨 FONTS
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Poppins', sans-serif", // puedes usar otra para títulos
  },

    // 📱 Breakpoints
    breakpoints: {
        mobileSm: "480px",
        mobileMd: "767px",
        tabletSm: "768px",
        tabletLg: "1024px",
        laptopSm: "1280px",
        laptopLg: "1440px",
        desktopSm: "1920px",
  },

  spacing: (factor: number) => `${0.25 * factor}rem`, // función utilitaria
};

export type ThemeType = typeof theme;
