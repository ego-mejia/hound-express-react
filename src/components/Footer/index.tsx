import { FooterContainer } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <div class="wrapper">
        <a class="footer-logo-link" href="./index.html">
          <img
            src="./assets/logo--light.png"
            class="footer-logo"
            alt="Hound Express logo"
          />
        </a>
        <div class="text-container">
          <div>
            <p>
              Copyright © 2025 Hound Express. Todos los derechos reservados.
            </p>
          </div>
          <div>
            <p>Contacto: +52(55) 4000 1920</p>
          </div>
          <div class="social-icons--container">
            <img class="social-icon" src="./assets/facebook-icon.svg" alt="" />
            <img class="social-icon" src="./assets/linkedin-icon.svg" alt="" />
            <img class="social-icon" src="./assets/instagram-icon.svg" alt="" />
          </div>
          <div>
            <p>Aviso de Privacidad</p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
