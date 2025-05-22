import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiPostman,
  SiGithub,
  SiMysql,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import SkillCard from "./SkillCard";
import { MdSecurity } from "react-icons/md";
import { FaPalette } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaBolt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import {
  MdConnectWithoutContact,
  MdOutlineLightbulb,
  MdGroups,
  MdPsychology,
  MdOutlineWork,
  MdSchool,
} from "react-icons/md";

const Skills = () => {
  return (
    <>
      <div id="skills" className="skills-containeer">
        <h2>
          <span style={{ color: "crimson" }}>My</span>{" "}
          <span style={{ color: " rgb(63, 10, 54)" }}>Skills</span>
        </h2>
        <div className="skill-head">
          <h3 style={{ color: "crimson", fontSize: "1.5rem" }}>
            Frontend & UI Technologies
          </h3>
          <div className="skills-grid">
            <SkillCard
              icon={<FaHtml5 className="skill-icon" />}
              title="HTML5"
            />
            <SkillCard
              icon={<FaCss3Alt className="skill-icon" />}
              title="CSS3"
            />
            <SkillCard
              icon={<FaJs className="skill-icon" />}
              title="JavaScript"
            />
            <SkillCard
              icon={<FaReact className="skill-icon" />}
              title="React.js"
            />
            <SkillCard
              icon={<FaBootstrap className="skill-icon" />}
              title="Bootstrap"
            />
            <SkillCard
              icon={<FaPalette className="skill-icon" />}
              title="Material UI"
            />
            <SkillCard
              icon={<SiTailwindcss className="skill-icon" />}
              title="Tailwind CSS"
            />
          </div>
<br/>
          <h3 style={{ color: "crimson", fontSize: "1.5rem" }}>
            Backend & Database Technologies
          </h3>
          <div className="skills-grid">
            <SkillCard
              icon={<FaNodeJs className="skill-icon" />}
              title="Node.js"
            />
            <SkillCard
              icon={<SiExpress className="skill-icon" />}
              title="Express.js"
            />
            <SkillCard
              icon={<SiMysql className="skill-icon" />}
              title="MySQL"
            />
            <SkillCard
              icon={<SiPrisma className="skill-icon" />}
              title="Prisma"
            />
          </div>
          <br/>
          <h3 style={{ color: "crimson", fontSize: "1.5rem" }}>
            Version Control & Deployment
          </h3>
          <div className="skills-grid">
            <SkillCard icon={<FaGitAlt className="skill-icon" />} title="Git" />
            <SkillCard
              icon={<SiGithub className="skill-icon" />}
              title="GitHub"
            />
            <SkillCard
              icon={<FaCloudUploadAlt className="skill-icon" />}
              title="Render Deployment"
            />
          </div>
          <br/>
          <h3 style={{ color: "crimson", fontSize: "1.5rem" }}>
            API, Testing & Security Tools
          </h3>
          <div className="skills-grid">
            <SkillCard
              icon={<SiPostman className="skill-icon" />}
              title="Postman API"
            />
            <SkillCard
              icon={<FaBolt className="skill-icon" />}
              title="Thunder Client"
            />
            <SkillCard
              icon={<MdSecurity className="skill-icon" />}
              title="JWT (JSON Web Token)"
            />
            <SkillCard
              icon={<FaCode className="skill-icon" />}
              title="VS Code"
            />
          </div>
          <br/>
          <h3 style={{ color: "crimson", fontSize: "1.5rem" }}>
            Professional Skills
          </h3>
          <div className="skills-grid">
            <SkillCard
              icon={<MdConnectWithoutContact className="skill-icon" />}
              title="Communication"
            />
            <SkillCard
              icon={<MdOutlineLightbulb className="skill-icon" />}
              title="Creativity"
            />
            <SkillCard
              icon={<MdGroups className="skill-icon" />}
              title="Team Work"
            />
            <SkillCard
              icon={<MdPsychology className="skill-icon" />}
              title="Problem Solving"
            />
            <SkillCard
              icon={<MdOutlineWork className="skill-icon" />}
              title="Recruitment"
            />
            <SkillCard
              icon={<MdSchool className="skill-icon" />}
              title="Training & Development"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
