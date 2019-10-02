import React, { useState } from "react";
import styled from "styled-components";

import DisplayCaption from './DisplayCaption';

const StyledLandingMain = styled.main`
// background: rgba(33,22, 11, 0.5);
section.section-right {
  // background: rgba(188, 255, 87, 0.3);
  & img {
    width: 95%;
    margin: auto;
    margin-bottom: 6vh;
  }
}
.section-left-bot {
  
}
`;
const LandingMain = () => {
  
  return (
    <StyledLandingMain>
        <section className="section-right">
        <img
        src="https://www.dropbox.com/s/1ta1hqvv2eb5dgh/windows1_max.jpg?raw=1"
        alt="main lounge" />
      </section>
      <section className="section-left-bot">
        <DisplayCaption/>
      </section>
    </StyledLandingMain>
  );
};

export default LandingMain;

