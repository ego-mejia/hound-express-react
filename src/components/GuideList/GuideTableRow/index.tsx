// Style
import { StateCell, EditListButton } from "./style";

interface GuideTableRowProps {
  id: string;
  statusCode: "inProgress" | "pending" | "delivered";
  statusValue: string;
  origin: string;
  destination: string;
  date: string;
}

const GuideTableRow = ({
  id,
  statusCode,
  statusValue,
  origin,
  destination,
  date,
}: GuideTableRowProps) => {
  return (
    <tr>
      <td>{id}</td>
      <StateCell status={statusCode}>{statusValue}</StateCell>
      <td>{origin}</td>
      <td>{destination}</td>
      <td>{date}</td>
      <td>
        <EditListButton>Editar</EditListButton>
      </td>
    </tr>
  );
};

export default GuideTableRow;
