import React from 'react'
import styles from './ProfileSection.module.css'

type ProfileSectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

const ProfileSection = (props: ProfileSectionProps) => {
  return (
    <div id={props.id} className={styles.container}>
      <h2 className={styles.title}>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  )
}

export default ProfileSection
