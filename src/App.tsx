import './App.css'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import ProfileSection from './components/profile-section/ProfileSection'
import SocialMediaLinks from './components/social-media-links/SocialMediaLinks'
import SkillsSection from './components/skills-section/SkillsSection'
import TopBar from './components/top-bar/TopBar'

const programmingLanguages = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP', 'Node.js', 'Python', 'Go', 'Java']
const frameworks = ['Vue', 'React', 'Angular', 'Express.js', 'Fastify', 'Prisma', 'Tailwind', 'Bootstrap', 'Tailwind', 'CodeIgniter', 'Yii', 'Phalcon', 'Flask', 'Scikit-learn', 'Pandas', 'Numpy']
const databases = ['MySQL', 'SQL Server', 'MongoDB']
const platforms = ['Git', 'GitHub', 'GitLab', 'NPM', 'REST APIs', 'Web Sockets']
const testing = ['Mocha', 'Chai', 'Cypress', 'Vitest']

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
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <ProfileSection id="about" title="About">
                <div className="text-md">
                  <p className="text-lg mt-2">
                    I'm a hard-working, detail-oriented software engineer with experience in multiple roles in web development, contributing to the end-to-end development process. Passionate about
                    designing, developing, and testing impactful, high quality software.
                  </p>
                  <p className="py-4">
                    Currently I'm working as a Frontend Developer at Sparkyway, where I lead the development and optimization of frontend logic in web applications for healthcare institutions, and I
                    contribute to backend tasks when needed.
                  </p>
                  <p>When I'm not in front of a computer screen, I'm most likely reading, watching sports (F1, football, GAA), watching a movie, or learning a tune on the tin whistle.</p>
                </div>
              </ProfileSection>
              <ProfileSection id="skills" title="Skills">
                <SkillsSection name="Programming Languages" items={programmingLanguages} />
                <SkillsSection name="Frameworks and Libraries" items={frameworks} />
                <SkillsSection name="Databases" items={databases} />
                <SkillsSection name="Platforms and Technologies" items={platforms} />
                <SkillsSection name="Testing" items={testing} />
                <div>
                  <h2 className="profile-skills-type">Languages</h2>
                  <ul className="profile-skills-list">
                    <li>Portuguese (native)</li>
                    <li>English (full professional proficiency)</li>
                  </ul>
                </div>
              </ProfileSection>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <ProfileSection id="experience" title="Experience">
                TODO
              </ProfileSection>
              <ProfileSection id="education" title="Education">
                TODO
              </ProfileSection>
            </div>

            <div className="mt-4">
              <ProfileSection id="projects" title="Personal Projects">
                TODO
              </ProfileSection>
            </div>
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
