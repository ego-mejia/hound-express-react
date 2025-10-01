import { useState } from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Style
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header></Header>
        {/* <Body>  </Body> */}
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
