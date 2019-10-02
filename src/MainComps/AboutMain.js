import React, { useState } from "react";
import styled from "styled-components";

const StyledAbout = styled.main`
background: #9c6149;
section.section-right {
  background: #743d28;
}
.section-left-bot {
  background: #3f281f;
}
`;

const AboutMain = () => {
  
  return (
    <StyledAbout>
      <section className="section-right">
        <h1>About Section Right</h1>
      </section>
      <section className="section-left-bot">
      <h1>About Section Left</h1>
      </section>
    </StyledAbout>
  );
};

export default AboutMain;
