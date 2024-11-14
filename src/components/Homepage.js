import React from "react";
import "./css/Header.css"; // Mengimpor CSS dari folder yang sama
import "./css/Profile.css";
import profilePicture from "../assets/images/profiles.jpg"; // Naik satu level ke src
import Icon from "./Icon";
import "./css/About.css";
import { FaTelegram } from "react-icons/fa";

function Homepage() {
  return (
    <>
      <header className="header">
        <h1 className="heading-header">Hallo i'm</h1>
      </header>
      <div className="about">
        <h1 className="heading-name">Andika Rifqi Istanto</h1>
        <h2 className="heading-position">Frontend Developer</h2>
        <div className="link-container">
          <a
            href="https://andikarifki.github.io/react-deploy/CV.pdf"
            download
            className="link-pdf"
          >
            Download CV
          </a>
          <a
            href="https://t.me/Andikarifki18" // Ganti dengan username Telegram Anda
            target="_blank"
            rel="noopener noreferrer"
            className="link-telegram"
          >
            Contact Me <FaTelegram size={28} style={{ marginLeft: "5px" }} />
          </a>
        </div>
      </div>
      <div className="profile">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <Icon />
      </div>
    </>
  );
}

export default Homepage;
