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
			<div className={styles.container}>
				<img src="/img/profile.jpg" alt="André Sousa" className={styles.profileImage} />
				<div className={styles.profileName}>
					André Sousa
				</div>

				<div className={styles.rightContainer}>
					<div className={styles.item}>
						About Me
					</div>

					<div className={styles.item}>
						Experience
					</div>

					<div className={styles.item}>
						Personal Projects
					</div>

					<div className={styles.mode}>
						{theme === 'dark' ? (
							<FontAwesomeIcon title="Light Mode" className="sun" size="lg" icon={faSun} onClick={() => changeTheme('light')} />
						) : (
							<FontAwesomeIcon title="Dark Mode" className="moon" size="lg" icon={faMoon} onClick={() => changeTheme('dark')} />
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default TopBar