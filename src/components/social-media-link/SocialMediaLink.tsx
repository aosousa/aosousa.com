import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SocialMediaLinkProps = {
  url: string
  icon: IconDefinition
}

const SocialMediaLink = (props: SocialMediaLinkProps) => {
  return (
    <a href={props.url} target="_blank" className="mr-4">
      <FontAwesomeIcon size="2x" icon={props.icon} />
    </a>
  )
}

export default SocialMediaLink
