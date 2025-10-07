import styled from "styled-components";


interface StateCellProps {
  status: "inProgress" | "pending" | "delivered";
}

export const StateCell = styled.td<StateCellProps>`
  font-weight: bold;
  color: ${({ theme, status }) => {
    switch (status) {
      case "inProgress":
        return theme.colors.table.statusProgress;
      case "pending":
        return theme.colors.table.statusPending;
      case "delivered":
        return theme.colors.table.statusDelivered;
      default:
        return theme.colors.text; // color por defecto
    }
  }};
`;

export const EditListButton = styled.button`
    background-color: ${({ theme }) => theme.colors.borderGray};
    color: white;
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;

    @media (max-width: 600px) {
      .btn-editar {
          padding: 4px 8px; /* Botón más pequeño */
          font-size: 12px;
      }
  }
`;


