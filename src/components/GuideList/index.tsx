import React from "react";

const GuideList = () => {
  return (
    <section class="list">
      <div class="wrapper">
        <h3>Lista de guías</h3>
        <div class="table-container">
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
                <td class="estado-en-transito">En tránsito</td>
                <td>Monterrey, MX</td>
                <td>Michigan, USA</td>
                <td>03.18.2025</td>
                <td>
                  <button class="btn-editar">Editar</button>
                </td>
              </tr>
              <tr>
                <td>0987654321</td>
                <td class="estado-entregado">Entregado</td>
                <td>CDMX, MX</td>
                <td>Los Ángeles, USA</td>
                <td>03.15.2025</td>
                <td>
                  <button class="btn-editar">Editar</button>
                </td>
              </tr>
              <tr>
                <td>1122334455</td>
                <td class="estado-pendiente">Pendiente</td>
                <td>Guadalajara, MX</td>
                <td>Texas, USA</td>
                <td>03.12.2025</td>
                <td>
                  <button class="btn-editar">Editar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GuideList;
