import React from "react";
import "./css/Header.css";
import "./css/Homepage.css";
import Icon from "./Icon";

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading-name">Andika</h1>
      <Icon className="icon-right" />
    </header>
  );
};

export default Header;
