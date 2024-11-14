import React from "react";
import "./css/Header.css"; // Mengimpor CSS dari folder yang sama
import "./css/Profile.css";
import profilePicture from "../assets/images/profiles.jpg"; // Naik satu level ke src
import Icon from "./Icon";
import About from "./About";

function Homepage() {
  return (
    <>
      <header className="header">
        <h1 className="heading-header">Hallo i'm</h1>
      </header>
      <About />
      <div className="profile">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <Icon />
      </div>
    </>
  );
}

export default Homepage;
