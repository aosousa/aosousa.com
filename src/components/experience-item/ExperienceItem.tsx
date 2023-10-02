import React from 'react'
import styles from './ExperienceItem.module.css'

type ExperienceItemProps = {
  institution: string
  location: string
  role: string
  timePeriod: string
  skills?: string[]
  children?: React.ReactNode
}

const ExperienceItem = (props: ExperienceItemProps) => {
  return (
    <div className="mb-8">
      <div className={styles.header}>
        <p>{props.institution}</p>
        <p className={styles.right}>{props.location}</p>
      </div>
      <div className="flex flex-row">
        <p>{props.role}</p>
        <p className={styles.right}>{props.timePeriod}</p>
      </div>
      {props.skills && <div className="text-xs">Tech Stack: {props.skills.join(', ')}</div>}
      {props.children}
    </div>
  )
}

export default ExperienceItem
