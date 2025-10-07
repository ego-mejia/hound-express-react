// Components
import GuideTableRow from "./GuideTableRow";

// Style
import {
  GuideListSection,
  GuideListWrapper,
  GuideListTableContainer,
} from "./style";

const GuideList = () => {
  const guidesList = [
    {
      id: "1234567890",
      status: {
        value: "En tránsito",
        code: "inProgress",
      },
      origin: "Monterrey, MX",
      destination: "Michigan, USA",
      date: "2025-03-18",
    },
    {
      id: "0987654321",
      status: {
        value: "Entregado",
        code: "delivered",
      },
      origin: "CDMX, MX",
      destination: "Los Ángeles, USA",
      date: "2025-03-15",
    },
    {
      id: "1122334455",
      status: {
        value: "Pendiente",
        code: "pending",
      },
      origin: "Guadalajara, MX",
      destination: "Texas, USA",
      date: "2025-03-12",
    },
    {
      id: "34623554987",
      status: {
        value: "Pendiente",
        code: "pending",
      },
      origin: "Monterrey, MX",
      destination: "New York, USA",
      date: "2025-10-06",
    },
  ] as const;

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
            {/* Start of Table body */}
            <tbody>
              {guidesList.map((guide) => (
                <GuideTableRow
                  key={guide.id}
                  id={guide.id}
                  statusCode={guide.status.code}
                  statusValue={guide.status.value}
                  origin={guide.origin}
                  destination={guide.destination}
                  date={guide.date}
                />
              ))}
            </tbody>
            {/* End of Table body */}
          </table>
        </GuideListTableContainer>
      </GuideListWrapper>
    </GuideListSection>
  );
};

export default GuideList;
