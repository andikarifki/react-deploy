import React from "react";
import About from "./About";
import Profile from "./Profile";
import Header from "./Header";
import "./css/Homepage.css"; // Mengimpor CSS dari folder yang sama

function Homepage() {
  return (
    <>
      <Header />
      <About />
      <Profile />
    </>
  );
}

export default Homepage;
