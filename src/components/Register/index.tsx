// import React from "react";

const Register = () => {
  return (
    <>
      {/* <!-- Start of Register section --> */}
      <section class="register">
        <div class="wrapper">
          <h3>Registro de Guias</h3>

          <form class="register__form" action="">
            <div class="form-container">
              {/* <!-- Start of left side form --> */}
              <div class="form--left">
                <div class="form--element">
                  <h4>Número de guía</h4>
                  <input type="text" placeholder="1234567890" />
                </div>
                <div class="form--element">
                  <h4>Destinatario</h4>
                  <input type="text" placeholder="José Lopez" />
                </div>

                <div class="form--element">
                  <h4>Origen</h4>
                  <input type="text" placeholder="País" />
                  <input type="text" placeholder="Dirección" />
                  <input type="text" placeholder="Zip" />
                </div>
              </div>
              {/* <!-- end of left side form --> */}

              {/* <!-- Start of righ side form --> */}
              {/* <div class="form--right">
                <div class="state-date-flex">
                  <div class="form--element">
                    <img
                      class="form-icon"
                      src="./assets/code-icon.svg"
                      alt=""
                    />
                    <h4>Estado</h4>
                    <select class="state-selector" name="choice">
                      <option class="default-option" value="default" selected>
                        Seleccionar
                      </option>
                      <option value="first">Pendiente</option>
                      <option value="second">En tránsito</option>
                      <option value="third">Entregado</option>
                    </select>
                  </div>
                  <div class="form--element">
                    <img
                      class="form-icon"
                      src="./assets/calendar-icon.svg"
                      alt=""
                    />
                    <h4>Fecha</h4>
                    <input class="date-selector" type="date" />
                    <!-- <input type="text" placeholder="DD/MM/YYYY" id="datepicker" /> -->
                  </div>
                </div>
                <div class="form--element">
                  <h4>Destino</h4>
                  <input type="text" placeholder="País" />
                  <input type="text" placeholder="Dirección" />
                  <input type="text" placeholder="Zip" />
                </div>
              </div> */}
              {/* <!-- end of right side form --> */}
            </div>
          </form>
        </div>
      </section>
      {/* <!-- end of Register section --> */}
    </>
  );
};

export default Register;
