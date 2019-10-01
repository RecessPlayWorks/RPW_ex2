import React, { useState } from "react";
import styled from "styled-components";


const StyledTopNav = styled.nav`
 & .nav-links {
   list-style: none;
   li {
    display: inline-block;
    padding: 0px 1.5rem;
    a {
      transition: all 0.3s ease-in-out;
      font-size: 1.3rem;
      text-decoration: none;
      color: #4b4b4b;
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #000;
        transition: width .2s ease-in-out;
      }
      &:hover {
        color: #000;
      }
      &:hover::after {
        width: 100%;
        transition: width .2s ease-in-out;
      }
    }
   }
 }

`;
const TopNav = () => {
  
  return (
    <StyledTopNav>
      <ul className="nav-links">
        <li><a href="#">Menu 1</a></li>
        <li><a href="#">Menu 2</a></li>
        <li><a href="#">Menu 3</a></li>
        <li><a href="#">Menu 4</a></li>
        <li><a href="#">Menu 5</a></li>
      </ul>
    </StyledTopNav>
  );
};

export default TopNav;

