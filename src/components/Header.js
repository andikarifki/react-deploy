import React from "react";
import "./css/Header.css";
import "./css/Homepage.css";
import Icon from "./Icon";

const Header = () => {
  return (
    <header className="container-fluid bg-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Nama di Kiri */}
        <h1 className="fw-bold m-0 text-dark">Andika</h1>

        {/* Icon di Kanan */}
        <Icon className="icon-right" />
      </div>
    </header>
  );
};

export default Header;
