import React from 'react'
import './About.css'
import background from "../Assets/purple.avif";

const About = () => {
  return (
    <> 

<div className="homee"> 
      <section className="about" id="about">
        <div className="about-img">
          <img src={background} alt="purple colour" />
        </div>
        <div className="about-text">
          <h2>
            About <span> Me</span>
          </h2>
         
          <h4> Front End Developer</h4>
          <p>
            Motivated Frontend Developer with a strong foundation in HTML, CSS,
            and JavaScript, along with proficiency in React. Goal-oriented and
            creative, I aim to apply technical skills to craft compelling user
            experiences and propel my professional growth. I am a quick learner,
            eager to apply my theoretical knowledge to practical challenges. My
            excellent communication and problem-solving skills, combined with a
            strong work ethic, make me a valuable asset to any organization.

            {/* A passionate and skilled Frontend Developer, 
            Motivated Frontend Developer specialized in HTML, CSS,
             JavaScript, Node.js, and React.js. With hands-on experience in building 
             responsive and dynamic web applications using React.js, I am proficient 
             in version control using Git and GitHub, and deploying applications with Render. 
             I utilize Visual Studio Code as my primary code editor, leveraging its powerful 
             extensions to enhance my development workflow. Equipped with strong problem-solving 
             abilities and a fast learner mindset, I thrive in collaborative team environments 
             while continuously enhancing my technical expertise. Curious by nature, I am eager 
             to bring creative solutions and fresh perspectives to challenging projects, contributing 
             to innovative and impactful web development. */}
          </p>
          <div  className="btn-boxx">            
            More About me
          </div>
         
        </div>
      </section>
      </div>

    </>
   
  )
}

export default About