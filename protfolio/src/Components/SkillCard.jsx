import React from 'react'
import './SkillCard.css'

const SkillCard = ({ icon, title }) => {
  return (
    <> 
     <div className="skill-card">
      {icon}
      <h3 className="skill-title"> {title}</h3>
    </div>
    </>

  )
}

export default SkillCard