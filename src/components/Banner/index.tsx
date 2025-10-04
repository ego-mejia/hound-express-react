// Style
import { Main, Wrapper, TrackFormContainer, TrackInputWrapper } from "./style";

// Assets
import bannerImg from "../../assets/contendor-carga-mapa-tierra.png";

const Banner = () => {
  return (
    <>
      <Main
      // class="main"
      >
        <Wrapper
        //   class="wrapper"
        >
          <h1>
            Expertos en logística y comercio internacional en México y el mundo.
          </h1>
          <p>
            Usamos tecnología de última generación para que tengas el control de
            tu operación en tiempo real.
          </p>
          <TrackFormContainer
          // class="banner__form-container"
          >
            <h3>Rastree su Envío</h3>
            <TrackInputWrapper
            //   class="track-package"
            >
              <input type="text" placeholder="Ingresar número de rastreo" />
              <button>Rastrear</button>
            </TrackInputWrapper>
          </TrackFormContainer>
          <img
            //   class="banner--img"
            src={bannerImg}
            alt="Imagen de contenedor de carga"
          />
        </Wrapper>
      </Main>
    </>
  );
};

export default Banner;
