// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <div className="about-back" id="about">
//       <div className="about-title">
//         <span style={{ color: "rgb(63, 10, 54)" }}>About</span> Me
//       </div>
//       <h3 className="about-subheading">
//         Full Stack Developer | Former US IT Recruiter | Trainer
//       </h3>
//       <div className="about-container">
//         <div className="about-row">
//           <div className="about-heading">Technical Expertise:</div>
//           <ul className="about-content">
//             <li>
//               Strong foundation in HTML5, CSS3, and JavaScript, with proficiency
//               in React.js, Node.js, Express.js, and MySQL, including backend API
//               development, database management, and seamless integration between
//               frontend and backend components.
//             </li>
//             <li>
//               Experienced in creating responsive and dynamic web applications
//               that work seamlessly across different browsers and devices using
//               modern CSS techniques, media queries, and frameworks such as
//               Bootstrap, Material UI, and React Icons.
//             </li>
//             <li>
//               I actively utilize Git and GitHub for version control, ensuring
//               efficient code management and collaboration.
//             </li>
//             <li>
//               Skilled in deploying applications with Render and leveraging
//               Visual Studio Code with extensions to enhance development
//               workflow.
//             </li>
//           </ul>
//         </div>
//         <div className="about-row reverse">
//           <ul className="about-content">
//             <li>Goal-oriented and creative problem solver.</li>
//             <li>
//               Proactive in learning emerging technologies and translating them
//               into practical solutions.
//             </li>
//             <li>Strong work ethic and excellent communication skills.</li>
//             <li>
//               Thrives in collaborative team environments and is passionate about
//               creating impactful web applications.
//             </li>
//           </ul>
//           <div className="about-heading">Professional Qualities:</div>
//         </div>
//         <div className="about-row">
//           <div className="about-heading">Past Experience:</div>
//           <ul className="about-content">
//             <li>
//               <b>Former US IT Recruiter:</b> Collaborated with hiring teams to
//               source, screen, and place qualified technical professionals for
//               top-tier clients in the U.S. market, ensuring alignment with
//               project and organizational goals.
//             </li>
//           </ul>
//         </div>
//         <div className="about-row reverse">
//           <ul className="about-content">
//             <li>
//               <b>Frontend Development Trainer:</b> Guided students through core
//               web technologies including HTML5, CSS3, JavaScript, and React.js,
//               providing hands-on project experience and mentorship.
//             </li>
//           </ul>
//           <div className="about-heading">Additional Experience:</div>
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
    <section className="about-section" id="about">
      <h2 className="about-title">
        <span className="highlight">About</span> Me
      </h2>
      <h3 className="about-subheading">
        Full Stack Developer | Former US IT Recruiter | Trainer
      </h3>

      <div className="about-container">
        <div className="about-block">
          <h4 className="about-heading">Technical Expertise</h4>
          <ul className="about-list">
            <li>Proficient in HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and MySQL.</li>
            <li>Experienced in responsive web design using Bootstrap, Material UI, and modern CSS.</li>
            <li>Strong knowledge of Git/GitHub for version control.</li>
            <li>Familiar with deployment using Render and development with VS Code.</li>
          </ul>
        </div>

        <div className="about-block">
          <h4 className="about-heading">Professional Qualities</h4>
          <ul className="about-list">
            <li>Creative problem solver with a goal-oriented mindset.</li>
            <li>Passionate about learning and applying new technologies.</li>
            <li>Excellent communicator and team collaborator.</li>
            <li>Committed to building impactful digital solutions.</li>
          </ul>
        </div>

        <div className="about-block">
          <h4 className="about-heading">Past Experience</h4>
          <ul className="about-list">
            <li><strong>US IT Recruiter:</strong> Matched skilled professionals with top-tier U.S. clients, ensuring team alignment and project fit.</li>
          </ul>
        </div>

        <div className="about-block">
          <h4 className="about-heading">Additional Experience</h4>
          <ul className="about-list">
            <li><strong>Frontend Trainer:</strong> Taught HTML5, CSS3, JavaScript, and React.js with hands-on guidance and mentorship.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
