import React from "react";
import "./css/Icon.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import LinkedIn, GitHub, dan Instagram icons

export default function Icon() {
  return (
    <div className="icon-container">
      <h1 className="heading-icon">Contact Me On Social Media</h1>
      <div className="icon-links-container">
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/andika-rifqi-istanto-339747232/e/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <FaLinkedin size={30} color="#0077b5" />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://github.com/andikarifki"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <FaGithub size={30} color="white" />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.instagram.com/andikarifqi18/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon"
          >
            <FaInstagram size={30} color="#E1306C" />
          </a>
        </div>
      </div>
    </div>
  );
}