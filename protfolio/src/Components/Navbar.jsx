
import React from "react";
import "./Navbar.css";
import "animate.css";
import "boxicons/css/boxicons.min.css";
import dhanuimage from '../Assets/dann.jpg'

const Navbar = () => {


  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="home">
  <div className="home-content">
    <h3 className="animate__animated animate__bounceInDown">Hello, It's me</h3>
    <h1 className="animate__animated animate__bounceInDown">
      Dhanusha Ravikannan
    </h1>
    <h3 className="animate__animated animate__bounceInDown">
      And I'm a Full Stack Developer
    </h3>
    {/* <p>
      A passionate and skilled Frontend Developer, equipped with strong
      problem-solving abilities and a fast-learning mindset. I excel in
      building responsive, user-friendly web applications using modern
      technologies to drive innovation. Thriving in collaborative team
      environments, I continuously enhance my technical expertise to deliver
      high-quality, performance-driven solutions that contribute to the growth
      and success of the organization.
    </p> */}
    <p style={{fontSize:'1.35rem'}}> I’m a passionate and results-driven Full Stack Developer with expertise in building responsive, high-performance web applications. I bring a holistic approach to full stack development, seamlessly integrating frontend and backend technologies to transform complex business needs into impactful, user-centric solutions that drive client success. </p>

    <div className="home-scl">
      <a href="https://www.linkedin.com/in/dhanusha-ravikannan-18b15320b/">
        <i className="bx bxl-linkedin-square"></i>
      </a>
      <a href="mailto:dhanusharavi904@gmail.com">
        <i className="bx bxl-gmail"></i>
        
      </a>
      <a href="https://github.com/yourgithub">
        <i className="bx bxl-github"></i>
      </a>
      <a href="tel:+9361884122">
        <i className="bx bxs-phone"></i>
      </a>
    </div>

    <a href="#" className="btn-box animate__animated animate__flash">
      Download CV
    </a>
  </div>

  {/* Right Side Placeholder for Profile Picture */}
  {/* <div className="home-image"> */}
    {/* Replace this div with an <img> tag once you add an actual profile picture */}
  {/* </div> */}
  <img src={dhanuimage} alt="dhanu" className="home-image" /> 
</section>

    </>
  );
};

export default Navbar;
