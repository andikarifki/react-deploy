import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS untuk animasi
import "aos/dist/aos.css";

const Repository = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inisialisasi AOS dengan durasi animasi 1 detik
  }, []);

  return (
    <div
      className="container text-center py-5"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h2 className="fw-bold text-dark">My GitHub Repositories</h2>
      <p className="text-muted">Explore my latest repositories on GitHub!</p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Repository 1</h5>
              <a
                href="https://github.com/andikarifki/meal-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link"
              >
                Meal App
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Repository 2</h5>
              <a
                href="https://github.com/yourusername/repository2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link"
              >
                Cantik Salon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
