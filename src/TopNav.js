import React, { useState } from "react";
import styled from "styled-components";
import { Link} from '@reach/router';


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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li>
          <a className="cta-logo" href="#">
            <img 
              src="https://www.dropbox.com/s/2vmz8q7f8wzd04z/rpwlogo.png?raw=1" 
              alt="RecessPlayWorks Logo" 
            />
          </a>
        </li>
      </ul>
    </StyledTopNav>
  );
};

export default TopNav;

