// import React from "react";

// Style
import {
  GeneralSection,
  GeneralWrapper,
  CardsContainer,
  Card,
  Value,
  Title,
} from "./style";

const General = () => {
  return (
    <>
      <GeneralSection>
        <GeneralWrapper>
          <h3>Panel de estado general</h3>
          <CardsContainer>
            <Card>
              <Value>521</Value>
              <Title>Guías activas</Title>
            </Card>
            <Card>
              <Value>131</Value>
              <Title>Guías en tránsito</Title>
            </Card>
            <Card>
              <Value>74</Value>
              <Title>Guías entregadas</Title>
            </Card>
          </CardsContainer>
        </GeneralWrapper>
      </GeneralSection>
    </>
  );
};

export default General;
