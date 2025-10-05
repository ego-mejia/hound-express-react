import React from "react";

// Style
import {
  GuideListSection,
  GuideListWrapper,
  GuideListTableContainer,
  EditListButton,
  StateInProgress,
  StateDelivered,
  StatePending,
} from "./styles";

const GuideList = () => {
  return (
    <GuideListSection>
      <GuideListWrapper>
        <h3>Lista de guías</h3>
        <GuideListTableContainer>
          <table>
            <thead>
              <tr>
                <th>Número de Guía</th>
                <th>Estado Actual</th>
                <th>Origen</th>
                <th>Destino</th>
                <th>Modificado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1234567890</td>
                <StateInProgress>En tránsito</StateInProgress>
                <td>Monterrey, MX</td>
                <td>Michigan, USA</td>
                <td>03.18.2025</td>
                <td>
                  <EditListButton>Editar</EditListButton>
                </td>
              </tr>
              <tr>
                <td>0987654321</td>
                <StateDelivered>Entregado</StateDelivered>
                <td>CDMX, MX</td>
                <td>Los Ángeles, USA</td>
                <td>03.15.2025</td>
                <td>
                  <EditListButton>Editar</EditListButton>
                </td>
              </tr>
              <tr>
                <td>1122334455</td>
                <StatePending> Pendiente</StatePending>
                <td>Guadalajara, MX</td>
                <td>Texas, USA</td>
                <td>03.12.2025</td>
                <td>
                  <EditListButton>Editar</EditListButton>
                </td>
              </tr>
            </tbody>
          </table>
        </GuideListTableContainer>
      </GuideListWrapper>
    </GuideListSection>
  );
};

export default GuideList;
