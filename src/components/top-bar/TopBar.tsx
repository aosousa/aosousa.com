// Core
import React, { useState } from 'react'
import styles from './TopBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const TopBar = () => {
  const [theme, setTheme] = useState('theme' in localStorage ? localStorage.theme : 'dark')

  const changeTheme = (theme: string) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <>
      <header className={styles.container}>
        <nav className={styles.containerNav}>
          <ul className={styles.containerNav}>
            <li className={styles.containerNav}>
              <img src="/img/profile.jpg" alt="André Sousa" className={styles.profileImage} />
              <p className={styles.profileName}>André Sousa</p>
            </li>

            <li className={styles.rightContainer}>
              <a href="#about" className={styles.item}>
                About
              </a>
              <a href="#experience" className={styles.item}>
                Experience
              </a>
              <a href="#projects" className={styles.item}>
                Personal Projects
              </a>
              <div className={styles.mode}>
                {theme === 'dark' ? (
                  <FontAwesomeIcon title="Light Mode" className="sun" size="lg" icon={faSun} onClick={() => changeTheme('light')} />
                ) : (
                  <FontAwesomeIcon title="Dark Mode" className="moon" size="lg" icon={faMoon} onClick={() => changeTheme('dark')} />
                )}
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default TopBar
