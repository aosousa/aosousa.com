import React from 'react'
import styles from './SkillsSection.module.css'

import Skill from '../skill/Skill'

type SkillsSectionProps = {
  name: string
  items: string[]
}

const SkillsSection = (props: SkillsSectionProps) => {
  return (
    <div className="mb-2">
      <h2 className={styles.skill}>{props.name}</h2>
      <div className={styles.container}>
        {props.items.map((item: string, idx: number) => (
          <Skill key={idx} name={item} />
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
