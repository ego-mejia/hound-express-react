// import React from "react";
// Style
import { RegisterSection, RegisterWrapper } from "./style";
import {
  RegisterForm,
  FormContainer,
  FormContainerLeft,
  FormElement,
  FormContainerRight,
  StateDateFlexbox,
} from "./style";

const Register = () => {
  return (
    <>
      {/* <!-- Start of Register section --> */}
      <RegisterSection
      //  class="register"
      >
        <RegisterWrapper
        //  class="wrapper"
        >
          <h3>Registro de Guias</h3>

          <RegisterForm
            //  class="register__form"
            action=""
          >
            <FormContainer
            //  class="form-container"
            >
              <FormContainerLeft
              //  class="form--left"
              >
                <FormElement
                //  class="form--element"
                >
                  <h4>Número de guía</h4>
                  <input type="text" placeholder="1234567890" />
                </FormElement>

                <FormElement
                //  class="form--element"
                >
                  <h4>Destinatario</h4>
                  <input type="text" placeholder="José Lopez" />
                </FormElement>

                <FormElement
                //  class="form--element"
                >
                  <h4>Origen</h4>
                  <input type="text" placeholder="País" />
                  <input type="text" placeholder="Dirección" />
                  <input type="text" placeholder="Zip" />
                </FormElement>
              </FormContainerLeft>

              <FormContainerRight
              //  class="form--right"
              >
                <StateDateFlexbox
                // class="state-date-flex"
                >
                  <FormElement>
                    <img
                      // class="form-icon"
                      src="./assets/code-icon.svg"
                      alt=""
                    />
                    <h4>Estado</h4>
                    <select
                      // class="state-selector"
                      name="choice"
                    >
                      <option
                        // class="default-option"
                        value="default"
                        selected
                      >
                        Seleccionar
                      </option>
                      <option value="first">Pendiente</option>
                      <option value="second">En tránsito</option>
                      <option value="third">Entregado</option>
                    </select>
                  </FormElement>
                  <FormElement>
                    <img
                      // class="form-icon"
                      src="./assets/calendar-icon.svg"
                      alt=""
                    />
                    <h4>Fecha</h4>
                    <input
                      // class="date-selector"
                      type="date"
                    />
                    {/* <input type="text" placeholder="DD/MM/YYYY" id="datepicker" /> */}
                  </FormElement>
                </StateDateFlexbox>
                <FormElement>
                  <h4>Destino</h4>
                  <input type="text" placeholder="País" />
                  <input type="text" placeholder="Dirección" />
                  <input type="text" placeholder="Zip" />
                </FormElement>
              </FormContainerRight>
            </FormContainer>
          </RegisterForm>
        </RegisterWrapper>
      </RegisterSection>
      {/* <!-- end of Register section --> */}
    </>
  );
};

export default Register;
