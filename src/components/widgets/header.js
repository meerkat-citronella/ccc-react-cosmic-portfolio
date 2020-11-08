import React from "react";

import { StyledHeader } from "./header.css.js";
import "../../App.css";

const Header = ({ clickHandler }) => {
  return (
    <StyledHeader className="app-header">
      <span className="header-my-name" onClick={clickHandler}>
        Carter Chen
      </span>
      <ul className="header-nav">
        <li
          className="header-nav-item"
          onClick={clickHandler}
          data-view-visibility="ABOUT"
        >
          About
        </li>
        <li
          className="header-nav-item"
          onClick={clickHandler}
          data-view-visibility="PORTFOLIO"
        >
          Portfolio
        </li>
        <li
          className="header-nav-item"
          onClick={clickHandler}
          data-view-visibility="CONTACT"
        >
          Contact
        </li>
        <li
          className="header-nav-item"
          onClick={clickHandler}
          data-view-visibility="RESUME"
        >
          R&#233;sum&#233;
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
