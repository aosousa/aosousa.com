import React from 'react'
import './Skill.css'

type SkillProps = {
  name: string
}

const Skill = (props: SkillProps) => <div className="badge">{props.name}</div>

export default Skill
