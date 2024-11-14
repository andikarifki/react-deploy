import React from "react";
import "./css/Header.css"; // Mengimpor CSS dari folder yang sama
import "./css/Profile.css";
import profilePicture from "../assets/images/profiles.jpg"; // Naik satu level ke src
import Icon from "./Icon";
import "./css/About.css";

function Homepage() {
  return (
    <>
      <header className="header">
        <h1 className="heading-header">Hallo i'm</h1>
      </header>
      <div className="about">
        <h1 className="heading-name">Andika Rifqi Istanto</h1>
        <h2 className="heading-position">Frontend Developer</h2>
        <a
          href="/cv-1.pdf" // Path menuju file CV di folder public
          download // Menyatakan bahwa file ini adalah untuk diunduh
          className="link-pdf"
        >
          Download CV
        </a>
      </div>
      <div className="profile">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <Icon />
      </div>
    </>
  );
}

export default Homepage;
