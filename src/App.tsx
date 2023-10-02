import './App.css'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import ExperienceItem from './components/experience-item/ExperienceItem'
import ProfileSection from './components/profile-section/ProfileSection'
import ProjectItem from './components/project-item/ProjectItem'
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
      <div className="wrapper" id="profile">
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
              <div className="text-base">
                <p>
                  I'm a hard-working, detail-oriented software engineer with experience in multiple roles, contributing to the end-to-end development process. Passionate about designing, developing,
                  and testing high quality software with a real world impact.
                </p>
                <p className="py-4">
                  Currently I'm working as a Front-end Developer at Sparkyway, where I lead the development and optimization of front-end logic in web applications for healthcare institutions, and I
                  contribute to backend tasks when needed. In my free time I try to keep in touch with new and interesting programming languages, frameworks and libraries in order to always be
                  improving as a developer.
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
            <ProfileSection id="experience" title="Experience">
              <div className="mt-2">
                <ExperienceItem
                  institution="Sparkyway"
                  location="Lagoa, Portugal"
                  role="Front-end Developer"
                  timePeriod="04/2022 - Present"
                  skills={['HTML', 'JavaScript', 'TypeScript', 'CSS', 'Tailwind', 'Vue', 'PHP (CodeIgniter)', 'Node.js', 'MySQL', 'Cypress', 'Vitest']}
                >
                  <div className="mt-2">
                    <p>
                      I work closely with developers as part of a 3-person team, where I lead the development and optimisation of front-end logic across multiple web applications for hospitals such as
                      Hospital Garcia de Orta and IPO Porto. I also contribute to the development of small services (e.g., web sockets) and the development of the REST APIs consumed by the
                      applications, while consistently improving test coverage to guarantee the reliability of the applications developed.
                    </p>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  institution="Faculdade de Engenharia da Universidade do Porto"
                  location="Porto, Portugal (Remote)"
                  role="Researcher and Machine Learning Engineer"
                  timePeriod="09/2020 - 02/2022"
                  skills={['Python', 'Scikit-Learn', 'Flask', 'Machine Learning', 'Data Analysis']}
                >
                  <div className="mt-2">
                    <p>
                      Worked in a team of 10 members from 4 different entities in the PROMESSA (PROject ManagEment intelligent aSSistAnt) project through a research grant. I developed multiple machine
                      learning modules to help project managers with their tasks, by estimating information such as risk impact and likelihood levels in new software projects, or effort and total
                      duration of new tasks in the JIRA platform.
                    </p>
                    <p>Collaborated with members of the other entities of the project on 3 published scientific papers:</p>
                    <ul className="list-disc mt-2">
                      <li className="ml-5">
                        <a href="http://ksiresearch.org/seke/seke21paper/paper097.pdf" target="_blank" rel="noopener noreferrer" className="experience-link">
                          An Analysis of the State of the Art of Machine Learning for Risk Assessment in Software Projects
                        </a>
                        , published in{' '}
                        <a href="http://ksiresearch.org/seke/seke21.html" target="_blank" rel="noopener noreferrer" className="experience-link">
                          The 33rd International Conference on Software Engineering & Knowledge Engineering (SEKE 2021)
                        </a>
                      </li>
                      <li className="ml-5">
                        <a href="https://link.springer.com/chapter/10.1007/978-3-030-93733-1_7" target="_blank" rel="noopener noreferrer" className="experience-link">
                          Applying Machine Learning to Risk Assessment in Software Projects
                        </a>
                        , published in{' '}
                        <a href="http://philippe-fournier-viger.com/MLISE_workshop_2021/index.html" target="_blank" rel="noopener noreferrer" className="experience-link">
                          The 1st International Workshop on Machine Learning in Software Engineering (MLiSE 2021)
                        </a>
                      </li>
                      <li className="ml-5">
                        <a href="https://ieeexplore.ieee.org/document/10227275" target="_blank" rel="noopener noreferrer" className="experience-link">
                          Applying Machine Learning to Estimate the Effort and Duration of Individual Tasks in Software Projects
                        </a>
                        , published in IEEE Access Volume 11
                      </li>
                    </ul>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  institution="Sparkyway"
                  location="Lagoa, Portugal"
                  role="Full-stack Developer (Freelance)"
                  timePeriod="04/2019 - 08/2019"
                  skills={['HTML', 'JavaScript', 'CSS', 'Bootstrap', 'Go', 'PHP (CodeIgniter)', 'MySQL']}
                >
                  <div className="mt-2">
                    <p>Freelance work as a full-stack developer while waiting to start a master's degree at Faculdade de Engenharia da Universidade do Porto.</p>
                    <ul className="list-disc mt-2">
                      <li className="ml-5">Created a notification engine responsible for handling requests to third-party SMS and voice messaging REST APIs using Go</li>
                      <li className="ml-5">
                        Developed a mass notification website using PHP (CodeIgniter), primarily for marketing and sales departments to send voice, text, or email messages to large groups of contacts
                      </li>
                    </ul>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  institution="Connexall"
                  location="Lagoa, Portugal"
                  role="Full-stack Developer"
                  timePeriod="07/2016 - 03/2019"
                  skills={['HTML', 'JavaScript', 'TypeScript', 'CSS', 'Bootstrap', 'Angular', 'PHP (Phalcon, Yii)', 'Node.js', 'MySQL', 'SQL Server', 'MongoDB']}
                >
                  <div className="mt-2">
                    <p>
                      Transitioned to a full-stack developer role and started working on new web applications for different healthcare institutions, where I worked closely with developers as part of a
                      4-person team, and with cross-functional teams. My responsibilities included:
                    </p>
                    <ul className="list-disc mt-2">
                      <li className="ml-5">Contributing to the development of new web applications for hospitals such as IPO Porto and Hospital do Divino Espírito Santo</li>
                      <li className="ml-5">Transitioning older web applications to modern technologies (Angular)</li>
                    </ul>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  institution="Connexall"
                  location="Lagoa, Portugal"
                  role="Back-end Developer (Intern)"
                  timePeriod="01/2016 - 06/2016"
                  skills={['HTML', 'JavaScript', 'CSS', 'Bootstrap', 'PHP (Phalcon)', 'Node.js', 'MySQL', 'MongoDB']}
                >
                  <div className="mt-2">
                    <p>
                      Internship as part of the last semester for the conclusion of my Bachelor of Science degree. Joined a 5-person web development team to work on an ongoing project, with the goal
                      of providing a hub for different types of applications (Smart Home, Store, Newspaper), connected through a social network component. I was responsible for the following tasks:
                    </p>
                    <ul className="list-disc mt-2">
                      <li className="ml-5">Developing the Store and Newspaper REST APIs</li>
                      <li className="ml-5">Assisting in the development of the Social Network REST API</li>
                      <li className="ml-5">Restructuring the Node.js server responsible for receiving and processing the data sent by the supported Smart Home devices</li>
                    </ul>
                  </div>
                </ExperienceItem>
              </div>

              <div className="mt-2">
                <h2 className="text-2xl text-sky-600">Education</h2>
                <ExperienceItem
                  institution="Faculdade de Engenharia da Universidade do Porto"
                  location="Porto, Portugal"
                  role="Master of Science in Software Engineering"
                  timePeriod="09/2019 - 07/2021"
                />
                <ExperienceItem institution="Universidade dos Açores" location="Ponta Delgada, Portugal" role="Bachelor of Science in Computer Science" timePeriod="09/2013 - 06/2016" />
              </div>
            </ProfileSection>
            <div className="-mt-6">
              <ProfileSection id="projects" title="Personal Projects">
                <ProjectItem imageSource="personal.png" projectLink="https://aosousa.com" title="Personal Website" description="This page!" techStack={['React', 'TypeScript', 'Tailwind']} />

                <ProjectItem
                  imageSource="gt7_manufacturer.png"
                  projectLink="https://gtcollection.aosousa.com"
                  title="GT7 Collection"
                  description="Track cars and parts owned in Gran Turismo 7"
                  techStack={['React', 'TypeScript', 'Zustand', 'Tailwind', 'Node.js', 'Fastify', 'MySQL']}
                />

                <ProjectItem
                  imageSource="elo_ranking.png"
                  projectLink="https://eloranker.aosousa.com"
                  title="ELO Ranker"
                  description="Vote on different rankings and save the results. Ranking is calculated using the Elo rating system"
                  techStack={['React', 'TypeScript', 'Redux', 'Tailwind', 'Node.js', 'Express.js', 'MySQL']}
                />

                <ProjectItem
                  imageSource="rfa_home.png"
                  projectLink="https://rfatracker.aosousa.com"
                  title="Ring Fit Adventure Tracker"
                  description="Track Ring Fit Adventure sessions"
                  techStack={['React', 'TypeScript', 'Redux', 'Tailwind', 'Node.js', 'Express.js', 'MySQL']}
                />

                <ProjectItem
                  imageSource="movie_award_season.png"
                  projectLink="https://awardseason.aosousa.com"
                  title="Movie Award Season"
                  description="Display the winners during the movie award season for a given year"
                  techStack={['React', 'TypeScript', 'Tailwind']}
                />
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
