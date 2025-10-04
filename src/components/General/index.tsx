import React from "react";

const General = () => {
  return (
    <>
      {/* <!-- start of General section --> */}
      <section class="general">
        <div class="wrapper">
          <h3>Panel de estado general</h3>
          <div class="cards-container">
            <div class="card">
              <p class="value">521</p>
              <p class="title">Guías activas</p>
            </div>
            <div class="card">
              <p class="value">131</p>
              <p class="title">Guías en tránsito</p>
            </div>
            <div class="card">
              <p class="value">74</p>
              <p class="title">Guías entregadas</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of General section --> */}
    </>
  );
};

export default General;
