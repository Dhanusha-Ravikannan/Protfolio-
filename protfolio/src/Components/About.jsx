// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <>
//       <div className="about-back" id="about">
//         <div className="about-title">
//           <span style={{ color: " rgb(63, 10, 54)" }}>About</span> Me
//         </div>
//         <section className="about">
//           <h3>Full Stack Developer | Former US IT Recruiter | Trainer </h3>
//           <ol className="about-list">
//             <strong>Technical Expertise:</strong>
//             <ul>
//               <li>
//                 Strong foundation in HTML, CSS, and JavaScript, with proficiency
//                 in React.js, Node.js, Express, and MySQL.
//               </li>
//               <li>
//                 Experienced in creating responsive and dynamic web applications
//                 that work seamlessly across different browsers and devices using
//                 modern CSS techniques, media queries, and frameworks such as
//                 Bootstrap, Material UI, and React Icons.
//               </li>
//               <li>
//                 {" "}
//                 I actively utilize Git and GitHub for version control, ensuring
//                 efficient code management and collaboration.
//               </li>
//               <li>
//                 Skilled in deploying applications with Render and leveraging
//                 Visual Studio Code with extensions to enhance development
//                 workflow.
//               </li>
//             </ul>
            
//             <strong>Professional Qualities:</strong>
//             <ul>
//               <li>Goal-oriented and creative problem solver</li>
//               <li>
//                 Proactive in learning emerging technologies and translating them
//                 into practical solutions.
//               </li>
//               <li>Strong work ethic and excellent communication skills</li>
//               <li>
//                 {" "}
//                 Thrives in collaborative team environments and is passionate
//                 about creating impactful web applications
//               </li>
//             </ul>
          
//             <strong>Past Experience:</strong>
//             <ul>
//               <li>
//                 <b>Former US IT Recruiter:</b> Collaborated with hiring teams to
//                 source, screen, and place qualified technical professionals for
//                 top-tier clients in the U.S. market, ensuring alignment with
//                 project and organizational goals.
//               </li>
//             </ul>
            
//             <strong>Additional Experience: </strong>
//             <ul>
//               <li>
//                 <b>Frontend Development Trainer: </b>
//                 Guided students through core web technologies including HTML,
//                 CSS, JavaScript, and React.js, providing hands-on project
//                 experience and mentorship.
//               </li>
//             </ul>
//           </ol>
//         </section>
//       </div>
//     </>
//   );
// };

// export default About;


// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <div className="about-section" id="about">
//       <h2 className="about-heading">
//         <span style={{ color: "crimson" }}>About</span> Me
//       </h2>
//       <h3 className="about-subtitle">
//         Full Stack Developer | Former US IT Recruiter | Trainer
//       </h3>

//       <div className="about-content">
//         {/* Row 1 */}
//         <div className="about-row">
//           <div className="about-title">Technical Expertise:</div>
//           <ul className="about-list">
//             <li>Proficient in HTML, CSS, JavaScript, React.js, Node.js, Express, and MySQL.</li>
//             <li>Experienced in building responsive web apps using Material UI, Bootstrap, and media queries.</li>
//             <li>Strong Git & GitHub knowledge for version control and collaboration.</li>
//             <li>Familiar with Render deployment and VS Code tools.</li>
//           </ul>
//         </div>

//         {/* Row 2 (Reversed) */}
//         <div className="about-row reverse">
//           <ul className="about-list">
//             <li>Goal-oriented and creative problem solver.</li>
//             <li>Quick learner with passion for new technologies.</li>
//             <li>Excellent communicator and team player.</li>
//             <li>Focused on delivering impactful web applications.</li>
//           </ul>
//           <div className="about-title">Professional Qualities:</div>
//         </div>

//         {/* Row 3 */}
//         <div className="about-row">
//           <div className="about-title">Past Experience:</div>
//           <ul className="about-list">
//             <li><strong>US IT Recruiter:</strong> Sourced and screened tech professionals for top-tier U.S. clients.</li>
//           </ul>
//         </div>

//         {/* Row 4 (Reversed) */}
//         <div className="about-row reverse">
//           <ul className="about-list">
//             <li><strong>Frontend Trainer:</strong> Taught HTML, CSS, JS, and React.js through hands-on projects and mentorship.</li>
//           </ul>
//           <div className="about-title">Additional Experience:</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-back" id="about">
      <div className="about-title">
        <span style={{ color: "rgb(63, 10, 54)" }}>About</span> Me
      </div>
      <h3 className="about-subheading">
        Full Stack Developer | Former US IT Recruiter | Trainer
      </h3>

      <div className="about-container">
        {/* Technical Expertise */}
        <div className="about-row">
          <div className="about-heading">Technical Expertise:</div>
          <ul className="about-content">
            <li>
              Strong foundation in HTML5, CSS3, and JavaScript, with proficiency
              in React.js, Node.js, Express, and MySQL.
            </li>
            <li>
              Experienced in creating responsive and dynamic web applications
              that work seamlessly across different browsers and devices using
              modern CSS techniques, media queries, and frameworks such as
              Bootstrap, Material UI, and React Icons.
            </li>
            <li>
              I actively utilize Git and GitHub for version control, ensuring
              efficient code management and collaboration.
            </li>
            <li>
              Skilled in deploying applications with Render and leveraging
              Visual Studio Code with extensions to enhance development
              workflow.
            </li>
          </ul>
        </div>

        {/* Professional Qualities (Reversed) */}
        <div className="about-row reverse">
          <ul className="about-content">
            <li>Goal-oriented and creative problem solver</li>
            <li>
              Proactive in learning emerging technologies and translating them
              into practical solutions.
            </li>
            <li>Strong work ethic and excellent communication skills</li>
            <li>
              Thrives in collaborative team environments and is passionate
              about creating impactful web applications
            </li>
          </ul>
          <div className="about-heading">Professional Qualities:</div>
        </div>

        {/* Past Experience */}
        <div className="about-row">
          <div className="about-heading">Past Experience:</div>
          <ul className="about-content">
            <li>
              <b>Former US IT Recruiter:</b> Collaborated with hiring teams to
              source, screen, and place qualified technical professionals for
              top-tier clients in the U.S. market, ensuring alignment with
              project and organizational goals.
            </li>
          </ul>
        </div>

        {/* Additional Experience (Reversed) */}
        <div className="about-row reverse">
          <ul className="about-content">
            <li>
              <b>Frontend Development Trainer:</b> Guided students through core
              web technologies including HTML, CSS, JavaScript, and React.js,
              providing hands-on project experience and mentorship.
            </li>
          </ul>
          <div className="about-heading">Additional Experience:</div>
        </div>
      </div>
    </div>
  );
};

export default About;
