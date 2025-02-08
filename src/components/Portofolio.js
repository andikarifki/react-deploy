import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS untuk animasi
import "aos/dist/aos.css";
import "./css/Portofolio.css";

const Repository = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inisialisasi AOS dengan durasi animasi 1 detik
  }, []);

  return (
    <div
      className="container text-center py-5 mt-7 repository-container"
      data-aos="fade-up"
      data-aos-duration="3000"
      style={{ marginTop: "200px" }} // Perbaiki penulisan CSS inline
    >
      <h2 className="fw-bold text-dark">My GitHub Repositories</h2>
      <p className="text-muted">Explore my latest repositories on GitHub!</p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 mb-4">
          <a
            href="https://github.com/andikarifki/meal-app"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card h-100 shadow-effect">
              <div className="card-body text-center">
                <h5 className="card-title">Meal App</h5>
                <p className="mt-6">Meal app</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-5 mb-4">
          <a
            href="https://github.com/yourusername/repository2"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card h-100 shadow-effect">
              <div className="card-body text-center">
                <h5 className="card-title">Cantik Salon</h5>
                <p className="mt-6">Cantik Salon</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Repository;
