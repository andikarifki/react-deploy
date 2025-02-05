import React from "react";
import About from "./About";
import Header from "./Header";
import "./css/Homepage.css"; // Mengimpor CSS dari folder yang sama
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";

function Homepage() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </>
  );
}

export default Homepage;
