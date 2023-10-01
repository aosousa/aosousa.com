import './App.css'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import ProfileSection from './components/profile-section/ProfileSection'
import SocialMediaLinks from './components/social-media-links/SocialMediaLinks'
import TopBar from './components/top-bar/TopBar'

function App() {
  return (
    <>
      <div className="wrapper">
        <TopBar />
        <div className="app">
          <div className="intro">
            <div className="profile-wrapper">
              <img src="img/profile.jpg" alt="André Sousa" className="profile-image" />
              <h2 className="profile-name">André Sousa</h2>
              <h3 className="profile-job">Software Engineer</h3>
              <SocialMediaLinks />
            </div>

            <a href="#about" className="arrow-down">
              <FontAwesomeIcon icon={faCircleArrowDown} size="2x" bounce />
            </a>
          </div>

          <div className="content">
            <ProfileSection id="about" title="About">
              TODO
            </ProfileSection>

            <ProfileSection id="experience" title="Experience">
              TODO
            </ProfileSection>

            <ProfileSection id="projects" title="Personal Projects">
              TODO
            </ProfileSection>
          </div>

          <footer className="footer">
            <SocialMediaLinks />

            <p className="footer-note">&copy; André Sousa 2023</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
