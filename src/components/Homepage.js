import React from "react";
import About from "./About";
import Header from "./Header";
import "./css/Homepage.css"; // Mengimpor CSS dari folder yang sama
import Skills from "./Skills";

function Homepage() {
  return (
    <>
      <Header />
      <About />
      <Skills />
    </>
  );
}

export default Homepage;
