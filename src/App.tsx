import { useState, useEffect } from "react";

// Pages
import Home from "./pages/Home";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Style
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const [guides, setGuides] = useState([]);

  const [history, setHistory] = useState([]);

  useEffect(() => {
    console.log("El estado de guías ha cambiado:", guides);
  }, [guides]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
