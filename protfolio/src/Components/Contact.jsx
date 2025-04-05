import React from "react";
import "./Contact.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Footer from './Footer';



const Contact = () => {
  return (
    <> 
    <div id="contact" className="contact-container">
      <h2 style={{color: " rgb(63, 10, 54)"}}>
       
        <span style={{ color: "crimson" }}>My</span> Contact{" "}
      </h2>
<div className="back"> 
      <div className="row">
      <h3 className="sub-title" style={{fontWeight:'lighter'}}> Feel free to reach out for networking, discussions, or collaborations — I’m always eager to explore new opportunities and grow together!</h3>
        <div className="contact-left">
         
          <p>
            <span> Email Id:</span>  dhanusharavikannan@gmail.com
          </p>
          <p>
          
          <span>  Phone No: </span> (+91) 9361884122
          </p>

           <div className="homme-scl">
            <a href="https://www.linkedin.com/in/dhanusha-ravikannan-18b15320b/">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="mailto:dhanushravi904@gmail.com">
              <i className="bx"> < MdOutlineMarkEmailRead /></i>
              
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
      </div>
    </div>   
    </div>
    <Footer />
    </>
  );
};

export default Contact;
