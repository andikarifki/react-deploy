import React from "react";
import "./css/Work.css";

const Work = () => {
  return (
    <div className="list-work">
      <h1 style={{ color: "black", textDecoration: "underline" }}>
        Work Experience
      </h1>
      <div className="work">
        <div style={{ marginTop: "10px" }}>
          <h2
            style={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "revert",
              marginBottom: "5px", // Beri jarak bawah
            }}
          >
            Quality Assurance | PT. Tata Sarana Makmur
          </h2>
          <h2
            style={{
              color: "black",
              fontWeight: "lighter",
              fontFamily: "revert",
              marginTop: "5px", // Beri jarak atas
            }}
          >
            2023 - 2024
          </h2>
        </div>
        <div style={{ marginTop: "30px" }}>
          <h2
            style={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "revert",
              marginBottom: "5px", // Beri jarak bawah
            }}
          >
            Software Engineer | PT. Tata Sarana Makmur
          </h2>
          <h2
            style={{
              color: "black",
              fontWeight: "lighter",
              fontFamily: "revert",
              marginTop: "5px", // Beri jarak atas
            }}
          >
            2023 - 2024
          </h2>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h2
            style={{
              color: "black",
              fontWeight: "Bold",
              fontFamily: "revert",
              marginBottom: "5px", // Beri jarak bawah
            }}
          >
            Software Programmer | Department of Public Works, Housing and
            Energy, Mineral Resources
          </h2>
          <h2
            style={{
              color: "black",
              fontWeight: "lighter",
              fontFamily: "revert",
              marginTop: "5px", // Beri jarak bawah
            }}
          >
            2021 - 2022
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Work;
