import React from "react";
import "./Landing.css";
import "animate.css";
import "boxicons/css/boxicons.min.css";
import dhanuimage from "../Assets/dann.jpg";
import Navbar from "./Navbar.";

const Landing = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="home">
        <div className="home-content">
          <h3 className="animate__animated animate__bounceInDown">
            Hello, It's me
          </h3>
          <h1 className="animate__animated animate__bounceInDown">
            Dhanusha Ravikannan
          </h1>
          <h3 className="animate__animated animate__bounceInDown">
            And I'm a Full Stack Developer
          </h3>

          <p style={{ fontSize: "1.35rem" }}>
            I’m a passionate and results-driven Full Stack Developer with
            expertise in building responsive, high-performance web applications.
            I bring a holistic approach to full stack development, seamlessly
            integrating frontend and backend technologies to transform complex
            business needs into impactful, user-centric solutions that drive
            client success.
          </p>

          <div className="home-scl">
            <a href="https://www.linkedin.com/in/dhanusha-ravikannan-18b15320b/">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="mailto:dhanusharavi904@gmail.com">
              <i className="bx bxl-gmail"></i>
            </a>
            <a href="https://github.com/Dhanusha-Ravikannan">
              <i className="bx bxl-github"></i>
            </a>
            <a href="tel:+9361884122">
              <i className="bx bxs-phone"></i>
            </a>
          </div>

          <button className="btn-box animate__animated animate__flash">
            Download CV
          </button>
        </div>

        <img src={dhanuimage} alt="dhanu" className="home-image" />
      </section>
    </>
  );
};

export default Landing;
