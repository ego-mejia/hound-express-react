import styled from "styled-components";

// Mixins
import { bgDebug } from "../../styles/mixins";

export const GuideListSection = styled.section`
    ${bgDebug('transparent','cyan')};
   padding: 0 80px;
`;

export const GuideListWrapper = styled.div`
    ${bgDebug('transparent','yellow')};
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        width: 100%;
        padding-top: 60px;
        margin: 0 auto;
`;

export const GuideListTableContainer = styled.div`
  ${bgDebug('transparent','red')};
  width: 100%;
  overflow-x: auto; /* Permite desplazamiento horizontal en pantallas pequeñas */
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: white;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px; /* Evita que se rompa en pantallas muy pequeñas */
}
th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
    white-space: nowrap; /* Evita que el texto se corte en varias líneas */
}


th {
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: white;
}
tr:nth-child(even) {
    background: #f2f2f2;
}
`;

export const StateInProgress = styled.td`
  color: ${({ theme }) => theme.colors.table.statusProgress};
  font-weight: bold;
`;
export const StatePending = styled.td`
  color: ${({ theme }) => theme.colors.table.statusPending};
  font-weight: bold;
`;
export const StateDelivered = styled.td`
  color: ${({ theme }) => theme.colors.table.statusDelivered};
  font-weight: bold;
`;

export const EditListButton = styled.button`
    background-color: ${({ theme }) => theme.colors.borderGray};
    color: white;
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
`;