import React, { useState } from "react";
import styled from "styled-components";

import TopNav from "./TopNav";
import TopRTCTAs from "./TopRTCTAs";

const StyledHeader = styled.header`
grid-row: 1;
grid-column: 1;
border: 1px solid #222;
border-width: 0px;
border-bottom-width: 1px;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 2rem 2%;
& .text-logo {
  cursor: pointer;
  margin-right: 20px;
  color: #090909;
  font-weight: bold;
  font-family: Trebuchet MS, sans-serif;
  font-size: 2.7rem;
}
a.cta-logo {
  position: absolute;
  right: 2vw;
  
  height: 8vh;
  border: 1px solid #222;
  border-width: 0;
  border-left-width: 1px;
  display: grid;
    img {
      width: 3vw;
      margin: auto;
      margin-left: 20%;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      filter: grayscale(100%);
      &:hover {
        filter: grayscale(10%);
      }           
    }
  }

`;
const Header = () => {
  
  return (
    <StyledHeader>
      <h1 className="text-logo">RecessPlayWorks</h1>
      <TopNav />
      <TopRTCTAs/>
        <a className="cta-logo" href="#"><img src="https://www.dropbox.com/s/2vmz8q7f8wzd04z/rpwlogo.png?raw=1" alt="RecessPlayWorks Logo" /></a>
    </StyledHeader>
  );
};

export default Header;

/*
https://www.dropbox.com/s/2vmz8q7f8wzd04z/rpwlogo.png?raw=1

https://www.dropbox.com/s/1ta1hqvv2eb5dgh/windows1_max.jpg?raw=1
*/