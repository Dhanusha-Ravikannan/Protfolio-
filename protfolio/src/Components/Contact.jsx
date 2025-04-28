import React from "react";
import "./Contact.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Footer from "./Footer";
import Resume from '../Assets/Dhanusha_Resume.pdf'

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact-container">
        <h2>
          <span style={{ color: "crimson" }}>My</span> Contact{" "}
        </h2>
        <div className="back">
          <div className="row">
            <h3 className="sub-title" style={{ fontWeight: "lighter" }}>
              {" "}
              Feel free to reach out for networking, discussions, or
              collaborations — I’m always eager to explore new opportunities and
              grow together!
            </h3>
            <div className="contact-left">
              <p>
                <span> Email Id:</span> dhanushravikannan21@gmail.com
              </p>
              <p>
                <span> Phone No: </span> (+91) 9361884122
              </p>

              <div className="homme-scl">
                <a href="https://www.linkedin.com/in/dhanusha-ravikannan-18b15320b/">
                  <i className="bx bxl-linkedin-square"></i>
                </a>
                <a href="mailto:dhanusharavikannan21@gmail.com">
                  <i className="bx">
                    {" "}
                    <MdOutlineMarkEmailRead />
                  </i>
                </a>
                <a href="https://github.com/Dhanusha-Ravikannan">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="tel:+91 9361884122">
                  <i className="bx bxs-phone"></i>
                </a>
              </div>
              <a href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-box animate__animated animate__flash"
              > Download CV</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
