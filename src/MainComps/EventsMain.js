import React, { useState } from "react";
import styled from "styled-components";


const StyledEventsMain = styled.main`
background: #73a373;
section.section-right {
  background: #577957;
}
.section-left-bot {
  background: #577957;
}
`;

const EventsMain = () => {
  
  return (
    <StyledEventsMain>
      <section className="section-right">
        <h1>EventsMain Section Right</h1>
      </section>
      <section className="section-left-bot">
      <h1>EventsMain Section Left</h1>
      </section>
    </StyledEventsMain>
  );
};

export default EventsMain;

