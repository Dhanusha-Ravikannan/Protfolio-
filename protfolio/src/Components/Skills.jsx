
import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiPostman, SiGithub, SiMysql } from "react-icons/si";
import SkillCard from "./SkillCard";
import { MdConnectWithoutContact, MdOutlineLightbulb, MdGroups, MdPsychology } from "react-icons/md";



const Skills = () => {
  return (
    <> 
    <div id="skills" className="skills-container">
      {/* <h2> MY  SKILLS</h2> */}
      <h2>
  <span style={{ color: "rgb(198, 81, 100)" }}>My</span> <span style={{ color: "aqua" }}>Skills</span>
</h2>
    
      <h3>Technical Skills</h3>
      <div className="skills-grid">
        <SkillCard icon={<FaHtml5 className="skill-icon" />} title="HTML" />
        <SkillCard icon={<FaCss3Alt className="skill-icon" />} title="CSS" />
        <SkillCard icon={<FaJs className="skill-icon" />} title="JavaScript" />
        <SkillCard icon={<FaReact className="skill-icon" />} title="React.js" />
        <SkillCard icon={<FaNodeJs className="skill-icon" />} title="Node.js" />
        <SkillCard icon={<FaGitAlt className="skill-icon" />} title="Git" />
        <SkillCard icon={<SiGithub className="skill-icon" />} title="GitHub" />
        <SkillCard icon={<FaBootstrap className="skill-icon" />} title="Bootstrap" />        
        <SkillCard icon={<SiPostman className="skill-icon" />} title="Postman API" />        
        <SkillCard icon={<SiMysql className="skill-icon" />} title="MySQL" />
        
      </div>

      <h3>Professional Skills</h3>
      <div className="skills-grid">
        <SkillCard icon={<MdConnectWithoutContact className="skill-icon" />} title="Communication" />
        <SkillCard icon={<MdOutlineLightbulb className="skill-icon" />} title="Creativity" />
        <SkillCard icon={<MdGroups className="skill-icon" />} title="Team Work" />
        <SkillCard icon={<MdPsychology className="skill-icon" />} title="Problem Solving" />


      </div>
    </div>

  
    </>
  );
};


export default Skills;
