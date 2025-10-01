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
    font-family: 'Open Sans', sans-serif;
  }

  h3{
    font-size: 24px;
    color: $dark-blue;

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
  }

  ul, ol {
    list-style: none;
  }

`;
