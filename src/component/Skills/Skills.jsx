import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsinfoCard/SkillsInfoCard'

const Skills = () => {
    const [selectedsSkill,setSelectedSkill] = useState(SKILLS[0]);
      
    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
    <section className='skills-container'>
        <h5>Technical Proficiency</h5>
        <div className='skills-content'>
         <div className='skills'>
            {SKILLS.map((item)=> (
             <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedsSkill.title === item.title}
              onClick={() =>{
                handleSelectSkill(item);
              }}
              />
            ))}
        </div>   
         <div className='skills-info'>
          <SkillsInfoCard 
          heading={selectedsSkill.title}
          skills={selectedsSkill.skills}
          />

        </div> 
        </div>
    </section>
  )
}

export default Skills