// import React from "react";
// import "./Navbar.css";
// import "animate.css";
// import "boxicons/css/boxicons.min.css";
// import { Navigate } from "react-router-dom";

// const Navbar = () => {

//   const aboutpage=()=>{
//     Navigate ('/about')
//   }
//   return (
//     <>
//       <header className="header">
//         <a href="#" className="logo">
//           {" "}
//           Protfolio{" "}
//         </a>
//         <nav className="navbar">
//           <a href="#home"> Home</a>
//           <a href="#about" onClick={aboutpage}> About</a>
//           <a href="#skills"> Skills</a>
//           <a href="#projects"> Projects</a>
//           <a href="#contact"> Contact</a>
//         </nav>
//       </header>

//       <section id="home" className="home">
//         <div className="home-content">
//           <h3 
//           className="animate__animated animate__bounceInDown"
//           >
//             {" "}
//             Hello, It's me{" "}
//           </h3>
//           <h1 
//           className="animate__animated animate__bounceInDown"
//           >
//             {" "}
//             Dhanusha Ravikannan{" "}
//           </h1>
//           <h3 className='animate__animated animate__bounceInDown'> And I'm a Front-End Developer</h3>
//           <p> A passionate and skilled Frontend Developer, Equipped with strong problem-solving 
//              abilities and a fast learner mindset, I thrive in collaborative team environments 
//              while continuously enhancing my technical expertise. Curious by nature, I am eager 
//              to bring creative solutions and fresh perspectives to challenging projects, contributing 
//              to innovative and impactful web development.</p>
         
//           <div className="home-scl">
//             <a href="#">
//               <i className="bx bxl-linkedin-square"></i>
//             </a>
//             <a href="#">
//               <i className="bx bxl-gmail"></i>
//             </a>
//           </div>
//           <div>
//             <a href="#" className="btn-box animate__animated animate__flash">
//               {" "}
//               More About me{" "}
//             </a>
//           </div>
//         </div>
//       </section>     

//     </>
//   );
// };

// export default Navbar;





import React from "react";
import "./Navbar.css";
import "animate.css";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {


  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Protfolio
        </a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="home">
        <div className="home-content">
          <h3 className="animate__animated animate__bounceInDown">
            Hello, It's me
          </h3>
          <h1 className="animate__animated animate__bounceInDown">
            Dhanusha Ravikannan
          </h1>
          <h3 className="animate__animated animate__bounceInDown">
            And I'm a Front-End Developer
          </h3>
          <p>
            A passionate and skilled Frontend Developer, Equipped with strong problem-solving
            abilities and a fast learner mindset, I thrive in collaborative team environments
            while continuously enhancing my technical expertise...
          </p>

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
          <div>
            {/* <a href="#" className="btn-box animate__animated animate__flash">
              More About me
            </a> */}
            <a href="#" className="btn-box animate__animated animate__flash">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
