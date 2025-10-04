// Style
import { Main, Wrapper } from "./style";

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
          <div
          // class="banner__form-container"
          >
            <h3>Rastree su Envío</h3>
            <div
            //   class="track-package"
            >
              <input type="text" placeholder="Ingresar número de rastreo" />
              <button>Rastrear</button>
            </div>
          </div>
          <img
            //   class="banner--img"
            src="./assets/contendor-carga-mapa-tierra.png"
            alt="Imagen de contenedor de carga"
          />
        </Wrapper>
      </Main>
    </>
  );
};

export default Banner;
