// Core
import React, { useState } from 'react'
import './TopBar.css'
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
      <header className="container">
        <nav className="containerNav">
          <ul className="containerNav">
            <li className="containerNav">
              <img src="/img/profile.jpg" alt="André Sousa" className="profileImage" />
              <p className="profileName">André Sousa</p>
            </li>

            <li className="rightContainer">
              <a href="#about" className="item">
                About
              </a>
              <a href="#experience" className="item">
                Experience
              </a>
              <a href="#projects" className="item">
                Personal Projects
              </a>
              <div className="mode">
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
