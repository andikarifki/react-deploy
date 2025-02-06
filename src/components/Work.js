import React from "react";
import "./css/Work.css";

const Work = () => {
  return (
    <div className="container py-5">
      {/* Judul di Kiri dengan Jarak Atas */}
      <h1 className="work-title">Work Experience</h1>

      <div className="row justify-content-start mt-5">
        <div className="col-lg-10 ms-lg-3">
          <div className="border-start border-5 border-secondary ps-4 mb-4">
            <h2 className="custom-heading">
              Quality Assurance | PT. Tata Sarana Makmur
            </h2>
            <h3 className="fw-normal text-muted">2023 - 2024</h3>
          </div>

          <div className="border-start border-5 border-secondary ps-4 mb-4">
            <h2 className="custom-heading">
              Software Engineer | PT. Tata Sarana Makmur
            </h2>
            <h3 className="fw-normal text-muted">2023 - 2024</h3>
          </div>

          <div className="border-start border-5 border-secondary ps-4">
            <h2 className="custom-heading">
              Software Programmer | Department of Public Works, Housing and
              Energy, Mineral Resources
            </h2>
            <h3 className="fw-normal text-muted">2023 - 2024</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
