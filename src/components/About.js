import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS untuk animasi
import "aos/dist/aos.css"; // Import CSS AOS
import profilePicture from "../assets/images/profiles.jpg"; // Path ke gambar
import { FaTelegram } from "react-icons/fa";
import "./css/About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inisialisasi AOS dengan durasi animasi 1 detik
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Bagian Teks (Kiri) */}
        <div
          className="col-md-6 text-center text-md-start"
          data-aos="fade-right"
        >
          <h1 className="fw-bold">
            Hi!
            <br />
            <span>
              I'm <span className="text-danger">Andika Rifqi Istanto</span>
            </span>
            <br />
            <span className="text-primary">a Frontend Developer</span>
          </h1>
          <p className="mt-3">
            Based in Indonesia, I am a frontend developer
            <span className="d-block">
              Focuses on creating responsive, interactive, and user-friendly web
              interfaces.
            </span>
          </p>

          {/* Link Container */}
          <div
            className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-4"
            data-aos="fade-up"
          >
            <a
              href="https://andikarifki.github.io/react-deploy/CV.pdf"
              download
              className="btn btn-dark fw-bold px-4"
            >
              Download CV
            </a>
            <a
              href="https://t.me/Andikarifki18"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary fw-bold align-items-center"
            >
              Contact Me <FaTelegram size={24} className="ms-2" />
            </a>
          </div>
        </div>

        {/* Bagian Foto (Kanan) */}
        <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="fade-left">
          <img
            src={profilePicture}
            alt="Profile"
            className="img-fluid rounded-circle w-75 w-md-50 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
