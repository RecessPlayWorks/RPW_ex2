import React, { useState } from "react";
import styled from "styled-components";


const StyledContact = styled.main`
background: #68867a;
section.section-right {
  background: #616b67;
}
.section-left-bot {
  background: #8fb6a6;
}
`;

const Contact = () => {
  
  return (
    <StyledContact>
      <section className="section-right">
        <h1>Contact Section Right</h1>
      </section>
      <section className="section-left-bot">
      <h1>Contact Section Left</h1>
      </section>
    </StyledContact>
  );
};

export default Contact;
