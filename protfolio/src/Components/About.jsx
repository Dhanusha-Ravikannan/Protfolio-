import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-back" id="about">
        <div className="about-title">
          <span style={{ color: " rgb(63, 10, 54)" }}>About</span> Me
        </div>

        <section className="about">
          <h4>Front End Developer | Former Recruiter | Trainer </h4>

          <ol className="about-list">
            <li>
              <strong>Technical Expertise:</strong>

              <ul>
                <li>
                  Strong foundation in HTML, CSS, and JavaScript, with
                  proficiency in React.js, Node.js, Express, and MySQL.
                </li>
                <li>
                  Experienced in creating responsive and dynamic web
                  applications that work seamlessly across different browsers
                  and devices using modern CSS techniques, media queries, and
                  frameworks such as Bootstrap, Material UI, and React Icons.
                </li>
                <li>
                  {" "}
                  I actively utilize Git and GitHub for version control,
                  ensuring efficient code management and collaboration.
                </li>
                <li>
                  Skilled in deploying applications with Render and leveraging
                  Visual Studio Code with extensions to enhance development
                  workflow.
                </li>
              </ul>
            </li>
            <br />
            <br />
            <li>
              <strong>Professional Qualities:</strong>
              <ul>
                <li>Goal-oriented and creative problem solver</li>
                <li>
                  Proactive in learning emerging technologies and translating
                  them into practical solutions.
                </li>
                <li>Strong work ethic and excellent communication skills</li>

                <li>
                  {" "}
                  Thrives in collaborative team environments and is passionate
                  about creating impactful web applications
                </li>
              </ul>
            </li>
            <br />
            <br />
            <li>
              <strong>Past Experience:</strong>
              <ul>
                <li>
                  <b>Former US IT Recruiter:</b> Collaborated with hiring teams
                  to source, screen, and place qualified technical professionals
                  for top-tier clients in the U.S. market, ensuring alignment
                  with project and organizational goals.
                </li>
              </ul>
            </li>
            <br />
            <br />
            <li>
              <strong>Additional Experience </strong>
              <ul>
                <li>
                  <b>Frontend Development Trainer: </b>
                  Guided students through core web technologies including HTML,
                  CSS, JavaScript, and React.js, providing hands-on project
                  experience and mentorship.
                </li>
              </ul>
            </li>
          </ol>
        </section>
      </div>
    </>
  );
};

export default About;
