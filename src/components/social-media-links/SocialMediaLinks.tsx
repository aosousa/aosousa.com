import React from 'react'
import styles from './SocialMediaLinks.module.css'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Components
import SocialMediaLink from '../social-media-link/SocialMediaLink'

const SocialMediaLinks = () => (
  <div className={styles.links}>
    <SocialMediaLink url="https://www.linkedin.com/in/aosousa-dev/" icon={faLinkedin} />
    <SocialMediaLink url="https://github.com/aosousa" icon={faGithub} />
    <SocialMediaLink url="https://www.instagram.com/holden_aos/" icon={faInstagram} />
    <SocialMediaLink url="mailto:andreosousa95@gmail.com" icon={faEnvelope} />
  </div>
)

export default SocialMediaLinks
