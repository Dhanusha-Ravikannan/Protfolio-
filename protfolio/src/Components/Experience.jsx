import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience" className="exp-back">
      <section>
        <h2 className="exp-head" style={{ color: " rgb(63, 10, 54)" }}>
          <span style={{ color: "crimson" }}>My</span> Experience
        </h2>

        <div className="experience-card">
          <h3
            style={{ textDecoration: "underline", textUnderlineOffset: "6px" }}
          >
            Full Stack Developer
          </h3>
          <br />
          <p>
            <strong>Company:</strong> I-Bacus Tech Solutions Pvt. Ltd.,
            Coimbatore
          </p>
          <p className="role">
            <strong>Role:</strong> Full Stack Developer
          </p>
          <p>
            <strong>Duration:</strong> May 2024 – Present
          </p>
          <br />
          <p style={{ color: "rgb(188, 51, 78)", fontSize: "1.2rem" }}>
            <strong>Key Achievements:</strong>
          </p>
          <p>
            As a Full Stack Developer with a primary focus on frontend
            technologies, I bring hands-on experience in developing responsive
            and user-friendly web applications. I have actively contributed to
            both client and internal projects, taking ownership of the frontend
            while collaborating on backend logic. My technical skill set spans
            modern JavaScript frameworks, backend API development, and database
            management. My role involves collaborating with cross-functional
            teams to deliver high-quality, scalable applications that meet
            diverse business needs, while delivering high-quality, impactful
            software.
          </p>
          <ul>
            <li>
              Developed responsive and user-centric front-end applications using
              React.js for dynamic UI behavior and efficient state management.
            </li>
            <li>
              Designed and implemented accessible and responsive user interfaces
              using Material UI, Bootstrap, Tailwind CSS, React Icons, and media
              queries to ensure seamless cross-device performance.
            </li>
            <li>
              Integrated front-end components with back-end services for
              real-time data fetching, secure user authentication (JWT), and
              comprehensive error handling.
            </li>
            <li>
              Built and maintained RESTful API endpoints using Node.js and
              Express.js to handle CRUD operations, authentication, and key
              business logic.
            </li>
            <li>
              Created and managed MySQL databases, utilizing Prisma ORM for
              efficient querying, schema migrations, and relational data
              modeling.
            </li>
            <li>
              Actively identified, debugged, and resolved real-time issues in
              live production environments, gaining hands-on experience with
              optimizing performance, managing deployment logs, and maintaining
              scalable and maintainable codebases for long-term reliability.
            </li>
            <li>
              Used Git and GitHub for version control, handling branching
              strategies, pull requests, code reviews, and collaborative
              development workflows.
            </li>
            <li>
              Collaborated directly with clients to gather requirements, propose
              solutions, and deliver successful projects that met and often
              exceeded expectations.
            </li>
            <li>
              Maintained mobile responsiveness, smooth API integration, and
              clean UI flows across user journeys.
            </li>
            <li>
              Actively performed API testing using Postman and Thunder Client to
              ensure backend functionality and seamless integration with the
              frontend.
            </li>
            <li>
              Gained hands-on experience troubleshooting real-time deployment
              issues and maintaining clean, scalable codebases.
            </li>
            <li>
              Deployed full-stack applications to Render, configuring build
              pipelines, managing environment variables, and ensuring
              production-ready performance.
            </li>
          </ul>
        </div>

        <div className="experience-card" style={{ marginTop: "3rem" }}>
          <h3
            className="experience-title"
            style={{ textDecoration: "underline", textUnderlineOffset: "6px" }}
          >
            US IT Recruiter
          </h3>
          <p className="company-name">
            <strong>Company:</strong> Akidev Corporation, Coimbatore
          </p>
          <p className="role">
            <strong>Role:</strong> US IT Recruiter
          </p>
          <p className="duration">
            <strong>Duration:</strong> Feb 2023 – May 2024
          </p>
          <br />
          <p style={{ color: "rgb(188, 51, 78)", fontSize: "1.2rem" }}>
            <strong>Key Achievements:</strong>
          </p>
          <p>
            Worked as a US IT Recruiter, collaborating with direct clients such
            as Facebook, Tesla, and Blackhawk to fill multiple IT positions and
            successfully placed candidates by using ATS.
          </p>

          <ul>
            <li>
              Recruited for a wide range of roles including Salesforce
              Developer, Program Manager, Data Scientist, Data Engineer, and
              Java Developer by utilizing Job Diva and LinkedIn networking
              strategies to source, screen, and hire qualified candidates across
              multiple technical domains.
            </li>

            <li>
              Utilized Applicant Tracking Systems (ATS) to efficiently manage
              candidate pipelines, track applicant progress, and streamline the
              end-to-end recruitment process.
            </li>
            <li>
              Placed candidates for various technical positions and consistently
              met client success metrics.
            </li>
            <li>
              Built a strong talent pipeline by sourcing, screening, and
              engaging top-tier IT professionals using various recruitment tools
              and platforms.
            </li>

            <li>
              Maintained strong relationships with clients and consultants,
              contributing to repeat business, referrals, and the organization’s
              overall success and growth.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Experience;
