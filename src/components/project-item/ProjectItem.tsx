import React from 'react'
import './ProjectItem.css'

import Skill from '../skill/Skill'

type ProjectItemProps = {
  imageSource: string
  projectLink: string
  title: string
  description: string
  techStack: string[]
}

const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div className="project">
      <img className="image" src={`img/projects/${props.imageSource}`} alt={props.title} />
      <div className="description">
        <a href={props.projectLink} target="_blank" className="title">
          {props.title}
        </a>
        <p>{props.description}</p>
        <div className="tech">
          {props.techStack.map((tech: string, idx: number) => (
            <Skill key={idx} name={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
