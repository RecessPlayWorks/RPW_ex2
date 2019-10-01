import React, { useState } from "react";
import styled from "styled-components";

import DisplayCaption from './DisplayCaption';

const StyledMain = styled.main`
grid-row: 2;
grid-column: 1;
display: grid;
grid-template-columns:33.3vw 66.6vw;
grid-template-rows: 50vh 42vh;
// background: rgba(33,22, 11, 0.5);
div.right-panel {
  grid-row: 1/3;
  grid-column: 2;
  display: grid;
  border: 1px solid #222;
  border-width: 0px;
  border-left-width: 1px;
  & img {
    width: 95%;
    margin: auto;
    margin-bottom: 6vh;
  }
}
.left-panel-bot {
  padding: 10%;
  grid-row: 2/3;
  grid-column: 1;
  display: grid;
}
`;
const Main = () => {
  
  return (
    <StyledMain>
      <div className="right-panel">
        <img
        src="https://www.dropbox.com/s/1ta1hqvv2eb5dgh/windows1_max.jpg?raw=1"
        alt="main lounge" />
      </div>
      <aside className="left-panel-bot">
        <DisplayCaption/>
      </aside>
    </StyledMain>
  );
};

export default Main;

/*

// border: 1px solid #222;
// border-width: 0px;
// border-bottom-width: 1px;
// display: flex;
// justify-content: flex-start;
// align-items: center;
// padding: 2rem 2%;

*/