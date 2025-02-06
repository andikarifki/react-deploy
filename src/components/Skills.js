import React from "react";
import "./css/Skill.css";
import postmanLogo from "../assets/images/postman.png";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaGit,
  FaReact,
  FaLaravel,
  FaPhp,
  FaGitlab,
  FaFigma,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className="experience">
      <h1 style={{ color: "black" }}>My Skills</h1>
      <div className="icons">
        <FaHtml5 size={100} color="orange" />
        <FaCss3 size={100} color="blue" />
        <FaJs size={100} color="rgb(255, 223, 62)" />
        <FaBootstrap size={100} color="rgb(104, 62, 255)" />
        <FaGit size={100} color="rgb(196, 199, 19)" />
        <FaReact size={100} color="rgb(74, 77, 247)" />
      </div>
      <div className="icons">
        <FaLaravel size={100} color="rgb(255, 0, 0)" />
        <FaPhp size={100} color="rgb(2, 59, 245)" />
        <FaGitlab size={100} color="rgb(250, 134, 38)" />
        <img src={postmanLogo} alt="Postman Icon" className="postman-icon" />
        <FaFigma size={100} color="blue" />
      </div>
    </div>
  );
};

export default Skills;
