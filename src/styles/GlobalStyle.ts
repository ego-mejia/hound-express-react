import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* 🔄 Reset CSS básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    width: 100%;
    }

  body {
      font-family: ${({ theme }) => theme.fonts.body};
      color: ${({ theme }) => theme.colors.text};
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${({ theme }) => theme.fonts.heading};
      color: ${({ theme }) => theme.colors.darkBlue};
    }

    h3 {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.darkBlue};
    }

    input::placeholder{
        color: ${({ theme }) => theme.colors.placeholderText};
    }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 18px;
    font-weight: bold;
    color: white;
    padding: 0px 22px;
    height: 100%;
    border: none;
  }

  ul, ol {
    list-style: none;
  }

`;
