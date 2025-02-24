import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2>
       
        <span style={{ color: "rgb(198, 81, 100)" }}>My</span> Contact{" "}
      </h2>

      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title"> Contact Me</h1>
          <p>
            
            <i className="bx bxl-gmail"></i> dhanusharavikannan@gmail.com
          </p>
          <p>
          
            <i className="bx bxs-phone"></i> 9361884122
          </p>

          <div className="home-scl">
            <a href="https://www.linkedin.com/in/dhanusha-ravikannan-18b15320b/">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="mailto:dhanushravi904@gmail.com">
              <i className="bx bxl-gmail"></i>
            </a>
            <a href="https://github.com/Dhanusha-Ravikannan">
              <i className="bx bxl-github"></i>
            </a>
            <a href="tel:+9361884122">
              <i className="bx bxs-phone"></i>
            </a>
          </div>
          <button> Download CV</button>
        </div>

        <div className="contact-right">
          <form>
            <input type="text" name="Name" placeholder="Name" required />
            <input type="email" name="email" placeholder="email id" required />
            <textarea name="Message" placeholder="Message">
              {" "}
            </textarea>
            <button type="submit" > Submit</button>
          </form>
        </div>
      </div>
      <div className="copy-right">
  <p> Copyright &copy; Dhanusha R 2025   All rights reserved.</p>
</div>

    </div>
  );
};

export default Contact;
