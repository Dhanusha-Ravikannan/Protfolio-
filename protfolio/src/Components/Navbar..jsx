import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <div className={`navbar-links ${isOpen ? "open" : ""}`}>
            <a href="#home" style={{ color: "rgb(188, 6, 42)" }}>
              Home
            </a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <i className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
