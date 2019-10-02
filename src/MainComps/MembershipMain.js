import React, { useState } from "react";
import styled from "styled-components";


const StyledMembershipMain = styled.main`
background: #6e5252;
section.section-right {
  background: #b99898;
}
.section-left-bot {
  background: #d19999;
}
`;

const MembershipMain = () => {
  
  return (
    <StyledMembershipMain>
      <section className="section-right">
        <h1>MembershipMain Section Right</h1>
      </section>
      <section className="section-left-bot">
      <h1>MembershipMain Section Left</h1>
      </section>
    </StyledMembershipMain>
  );
};

export default MembershipMain;
