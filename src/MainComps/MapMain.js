import React, { useState } from "react";
import styled from "styled-components";


const StyledMapMain = styled.main`
background: #8f97a7;
section.section-right {
  background: #6f7686;
}
.section-left-bot {
  background: #b1bbd4;
}
`;

const MapMain = () => {
  
  return (
    <StyledMapMain>
      <section className="section-right">
        <h1>MapMain Section Right</h1>
      </section>
      <section className="section-left-bot">
      <h1>MapMain Section Left</h1>
      </section>
    </StyledMapMain>
  );
};

export default MapMain;
