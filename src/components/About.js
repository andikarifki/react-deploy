import React from "react";
import "./css/Profile.css";
import profilePicture from "../assets/images/profiles.jpg"; // Naik satu level ke src
import "./css/About.css";
import { FaTelegram } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      {/* Container untuk teks dan tombol */}
      <div className="text-container">
        <h1 className="name">
          Hi!
          <span className="new-line">
            I'm <span style={{ color: "red" }}>Andika Rifqi Istanto</span>
          </span>
          <span className="new-line-2">a Frontend Developer</span>
        </h1>

        <p className="paragraph">
          Based in Indonesia, I am a frontend developer
          <span className="new-paragraph">
            Focuses on creating responsive, interactive, and user-friendly web
            interfaces
          </span>
        </p>

        {/* Link Container dipindahkan ke bawah teks */}
        <div className="link-container">
          <a
            href="https://andikarifki.github.io/react-deploy/CV.pdf"
            download
            className="link-pdf"
          >
            Download CV
          </a>
          <a
            href="https://t.me/Andikarifki18"
            target="_blank"
            rel="noopener noreferrer"
            className="link-telegram"
          >
            Contact Me <FaTelegram size={28} style={{ marginLeft: "5px" }} />
          </a>
        </div>
      </div>

      {/* Foto tetap di sebelah kanan */}
      <div className="profile">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
      </div>
    </div>
  );
};

export default About;
