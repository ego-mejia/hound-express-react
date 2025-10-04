import React, { useState } from "react";
// Style
import { RegisterSection, RegisterWrapper } from "./style";
import {
  RegisterForm,
  FormContainer,
  FormContainerLeft,
  FormElement,
  FormContainerRight,
  StateDateFlexbox,
  FormIcon,
  DateSelectorInput,
  StatusSelector,
} from "./style";

// Assets
import { icons } from "../../assets";

const Register = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const hasSelection = selectedValue !== "" && selectedValue !== "Seleccionar";

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
                    <FormIcon
                      // class="form-icon"
                      src={icons.topDownArrows}
                      alt=""
                    />
                    <h4>Estado</h4>
                    <StatusSelector
                      // class="state-selector"
                      name="choice"
                      value={selectedValue}
                      onChange={handleChange}
                      hasSelection={hasSelection}
                    >
                      <option value="">Seleccionar</option>
                      <option value="first">Pendiente</option>
                      <option value="second">En tránsito</option>
                      <option value="third">Entregado</option>
                    </StatusSelector>
                  </FormElement>
                  <FormElement>
                    <FormIcon
                      // class="form-icon"
                      src={icons.calendar}
                      alt=""
                    />
                    <h4>Fecha</h4>
                    <DateSelectorInput
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
