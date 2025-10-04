// Style
import { FooterContainer, FooterWrapper, LogoLink } from "./style";

// Assets
import { logos, icons } from "../../assets";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoLink
        // class="footer-logo-link"
        // href="./index.html"
        >
          <img
            src={logos.lightLogo}
            // class="footer-logo"
            alt="Hound Express logo"
          />
        </LogoLink>
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
            <img class="social-icon" src={icons.facebook} alt="" />
            <img class="social-icon" src={icons.linkedin} alt="" />
            <img class="social-icon" src={icons.instagram} alt="" />
          </div>
          <div>
            <p>Aviso de Privacidad</p>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
