import React, { useState } from "react";
import styled from "styled-components";


const StyledTopRTCTAs = styled.nav`
// background: rgba(3,4,5, 0.1);
margin-right: 5vw;
margin-left: auto;
width: 12vw;
display: flex;
justify-content: flex-end;

.cta-join {
  margin: auto 5% auto 0;
  text-decoration: none;
}
span {
  margin: auto 0;
  font-weight: 200;
  width: 1px;
  font-size: 2.5rem;
}
.cta-contact {
  margin: auto 5%;
  text-decoration: none;
}


`;
const TopRTCTAs = () => {
  
  return (
    <StyledTopRTCTAs>
        <a className="cta-join" href="#">Join Us</a>
        <span>|</span>
        <a className="cta-contact" href="#">Contact</a>
    </StyledTopRTCTAs>
  );
};

export default TopRTCTAs;

