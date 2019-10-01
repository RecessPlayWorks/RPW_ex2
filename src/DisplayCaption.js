import React, { useState } from "react";
import styled from "styled-components";


const StyledDisplayCaption = styled.div`
// background: rgba(3,4,5, 0.1);
  h1 {
    // font-family: 'Saira Extra Condensed', sans-serif;
    font-family: Impact, sans-serif;
    font-size: 5rem;
    color: #222;
    // letter-spacing: -1px;
    line-height: 8rem;
    transform: scaleY(1.8);
  }
  h2 {
    margin-top: 2vh;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
  }
`;
const DisplayCaption = () => {
  return (
    <StyledDisplayCaption>
        <h1>WELCOME TO</h1>
        <h1>RECESSPLAYWORKS</h1>
        <h2>Ridgefield's sanctuary for adults and kids <br/>to work, play, and rest.</h2>
    </StyledDisplayCaption>
  );
};

export default DisplayCaption;

