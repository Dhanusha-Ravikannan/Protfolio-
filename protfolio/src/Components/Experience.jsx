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
          <h3>Frontend Developer</h3>
          <br />
          <p>
            <strong>Company:</strong> I-BACUS Tech, Coimbatore{" "}
          </p>
          <p className="role">
            <strong>Role:</strong> Frontend Developer
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
              React.js and Redux for efficient state management.
            </li>
            <li>
              Designed and implemented accessible user interfaces using Material
              UI, Tailwind CSS, React Icons, and Media Queries for seamless
              cross-device compatibility.
            </li>
            <li>
              Built scalable UI components for complex use cases including
              billing systems, wallet management, subscription flows, and task
              management tools.
            </li>
            <li>
              Built and optimized full-stack inventory and billing systems with
              QR code scanning, automated status tracking, and dynamic PDF
              generation.
            </li>
            <li>
              Designed and implemented subscription-based food ordering flows
              with skipped cart handling, wallet logic, and automated daily
              order tracking.
            </li>
            <li>
              Developed interactive and responsive UI for checklist-based
              productivity tools, incorporating drag-and-drop functionality and
              dynamic form logic.
            </li>
            <li>
              Collaborated with backend teams to integrate REST APIs and ensure
              real-time data syncing across client interfaces.
            </li>
            <li>
              Maintained seamless responsiveness and consistent API integration
              across user flows to ensure smooth user experience.
            </li>
            <li>
              Deployed full-stack applications via Render, ensuring reliability,
              scalability, and production-level performance.
            </li>
            <li>
              Gained hands-on experience troubleshooting real-time deployment
              issues and maintaining clean, scalable codebases.
            </li>
            <li>
              Used Git and GitHub for version control, managing branching
              strategies, pull requests, and collaborative workflows
              efficiently.
            </li>
            <li>
              Worked directly with clients and cross-functional teams to gather
              requirements, propose solutions, and deliver scalable,
              maintainable applications.
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
              Java Developer.
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
