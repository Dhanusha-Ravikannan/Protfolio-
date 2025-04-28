import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="exp-back">
      <section id="experience">
        <h2 className="exp-head" style={{ color: " rgb(63, 10, 54)" }}>
          <span style={{ color: "crimson" }}>My</span> Experience
        </h2>

        <div className="experience-card">
          <h3>Full Stack Developer</h3>
          <br />
          <p>
            <strong>Company:</strong> I-Bacus Tech Solutions Pvt. Ltd., Coimbatore
          </p>
          <p className="role">
            <strong>Role:</strong> Full Stack Developer
          </p>
          <p>
            <strong>Duration:</strong> May 2024 – Present
          </p>
          <p>
            As a Frontend Developer at I-Bacus Tech, I actively contribute to
            both client-based and internal projects, taking ownership of
            frontend development while also collaborating on backend logic. I
            work alongside cross-functional teams to deliver robust, scalable,
            and user-focused web applications tailored to business needs.
          </p>
          <br />
          <p>
            <strong>Key Achievements:</strong>
          </p>{" "}
          <br />
          <ul>
            <li>
              Developed responsive and user-centric front-end applications using
              React.js for dynamic UI behavior and efficient state management.
            </li>
            <li>
              Designed and implemented accessible and responsive user interfaces
              using Material UI, Tailwind CSS, React Icons, and media queries to
              ensure seamless cross-device performance.
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
              {" "}
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
          <h3 className="experience-title">US IT Recruiter</h3>
          <p className="company-name">
            <strong>Company:</strong> Akidev Corporation, Coimbatore
          </p>
          <p className="role">
            <strong>Role:</strong> US IT Recruiter
          </p>
          <p className="duration">
            <strong>Duration:</strong> Feb 2023 – May 2024
          </p>{" "}
          <br />
          <p className="key-heading">
            <strong>Key Responsibilities:</strong>
          </p>{" "}
          <br />
          <ul>
            <li>
              Worked closely with direct clients such as Meta, Tesla, and
              Blackhawk to fulfill niche technical requirements.
            </li>
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
