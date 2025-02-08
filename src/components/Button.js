import React from "react";
import { FaTelegram } from "react-icons/fa";
import "./css/About.css";

export default function Button() {
  return (
    <div>
      <div
        className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-4"
        data-aos="fade-up"
      >
        <a
          href="https://andikarifki.github.io/react-deploy/CV.pdf"
          download
          className="contact-button btn btn-dark fw-bold px-4 px-md-3 w-auto text-nowrap btn-responsive"
        >
          Download CV
        </a>
        <a
          href="https://t.me/Andikarifki18"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button btn btn-primary fw-bold"
        >
          Contact Me <FaTelegram size={20} className="ms-2" />
        </a>
      </div>
    </div>
  );
}
