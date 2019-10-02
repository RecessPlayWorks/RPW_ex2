import React, { useState } from "react";
import styled from "styled-components";


const StyledPayment = styled.main`
background: #9ea38e;
section.section-right {
  background: #d5e2a8;
}
.section-left-bot {
  background: #8a926f;
}
`;

const Payment = () => {
  
  return (
    <StyledPayment>
      <section className="section-right">
        <h1>Payment Section Right</h1>
      </section>
      <section className="section-left-bot">
      <h1>Payment Section Left</h1>
      </section>
    </StyledPayment>
  );
};

export default Payment;
