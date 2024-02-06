import React from 'react'
import './SkillCard.css'

const SkillCard = ({title,iconUrl,isActiveonClick}) => {
  return (
    <div
    className={'skills-card ${isActive ? "active" : ""'}
    // eslint-disable-next-line no-undef
    onClick={() => onClick()} >

    <div className='skill-icon'>
       <img src={iconUrl} alt={title} />
    </div>
     <span>{title}</span>
    </div>
  )
}

export default SkillCard