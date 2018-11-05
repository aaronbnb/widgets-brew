import React from "react";
import './Header.css';

const Header = props => (
  <div className="header-container">
    <h1 className="header-title">{props.title}</h1>
  </div>
);

export default Header;