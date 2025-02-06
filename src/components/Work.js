import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan Bootstrap diimport
import "./css/Work.css";

const Work = () => {
  return (
    <div className="container py-5">
      {/* Judul di Kiri dengan Jarak Atas */}
      <h1 className="work-title fs-1 fw-bold text-wrap">Work Experience</h1>

      <div className="row justify-content-start mt-5">
        <div className="col-lg-10 ms-lg-3">
          <div className="border-start border-5 border-secondary ps-4 mb-4">
            <h2 className="fs-3 fw-semibold text-break">
              Quality Assurance | PT. Tata Sarana Makmur
            </h2>
            <h3 className="fs-5 fw-normal text-muted">2023 - 2024</h3>
          </div>

          <div className="border-start border-5 border-secondary ps-4 mb-4">
            <h2 className="fs-3 fw-semibold text-break">
              Software Engineer | PT. Tata Sarana Makmur
            </h2>
            <h3 className="fs-5 fw-normal text-muted">2023 - 2024</h3>
          </div>

          <div className="border-start border-5 border-secondary ps-4">
            <h2 className="fs-3 fw-semibold text-break">
              Software Programmer | Department of Public Works, Housing and
              Energy, Mineral Resources
            </h2>
            <h3 className="fs-5 fw-normal text-muted">2023 - 2024</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
