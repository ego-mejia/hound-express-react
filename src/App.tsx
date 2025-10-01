import { useState } from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Style
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />

        <Header></Header>
        {/* <Body>  </Body> */}
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
