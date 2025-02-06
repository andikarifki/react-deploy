import React, { useEffect } from "react";
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
import AOS from "aos"; // Import AOS untuk animasi
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inisialisasi AOS dengan durasi animasi 1 detik
  }, []);

  return (
    <div className="container py-5">
      {/* Judul */}
      <h1 className="text-center text-dark mb-5 pb-4" data-aos="flip-up">
        My Skills
      </h1>

      {/* Grid untuk Ikon */}
      <div
        className="row justify-content-center gap-4"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {/* Baris Ikon */}
        <div className="col-4 col-md-3 col-lg-2 text-center">
          <FaHtml5 size={70} color="orange" />
        </div>
        <div className="col-4 col-md-3 col-lg-2 text-center">
          <FaCss3 size={70} color="blue" />
        </div>
        <div className="col-4 col-md-3 col-lg-2 text-center">
          <FaJs size={70} color="rgb(255, 223, 62)" />
        </div>
        <div className="col-4 col-md-3 col-lg-2 text-center">
          <FaBootstrap size={70} color="rgb(104, 62, 255)" />
        </div>
        <div className="col-4 col-md-3 col-lg-2 text-center">
          <FaGit size={70} color="rgb(196, 199, 19)" />
        </div>
        <div className="col-4 col-md-3 col-lg-2 text-center">
          <FaReact size={70} color="rgb(74, 77, 247)" />
        </div>

        {/* Baris Ikon 2 */}
        <div className="col-4 col-md-3 col-lg-2 text-center">
          <FaLaravel size={70} color="rgb(255, 0, 0)" />
        </div>
        <div className="col-4 col-md-3 col-lg-2 text-center">
          <FaPhp size={70} color="rgb(2, 59, 245)" />
        </div>
        <div className="col-4 col-md-3 col-lg-2 text-center">
          <FaGitlab size={70} color="rgb(250, 134, 38)" />
        </div>
        <div className="col-4 col-md-3 col-lg-2 text-center">
          <img
            src={postmanLogo}
            alt="Postman Icon"
            className="img-fluid"
            style={{ width: "70px", height: "70px" }}
          />
        </div>
        <div className="col-4 col-md-3 col-lg-2 text-center">
          <FaFigma size={70} color="blue" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
