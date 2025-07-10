import HeaderBar from './HeaderBar'
import type { HeaderBarProps } from './HeaderBar'
import HeroSection from './HeroSection'
import TypewriterText from './TypewriterText'
import AboutMe from './AboutMe'
import BeautifulTimeline from './BeautifulTimeline'
import './App.css'  
import IconRow from './IconRow'
import ProjectCards from './ProjectCards'

const navLinks: HeaderBarProps['links'] = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '/resume.pdf', external: true }
];

const App: React.FC = () => (
  <>
    <HeaderBar title="My App" links={navLinks} />
    <section id="home">
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        centerImageUrl={`${import.meta.env.BASE_URL}images/1742358972967.jpeg`}
        sideText={
          <>
            <h2 className='w-100 text-center m-0' style={{ fontSize: '2.5rem' }}>Hi! I'm Sakshat</h2>
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100px' }}>
              <TypewriterText
                messages={[
                  'Building reliable microservices in the cloud',
                  'Crafting high-performance backend APIs',
                  'Optimizing LLM performance with security',
                  'Building scalable LLM pipelines',
                  'Architecting cloud-native AI services',
                ]}
              />
            </div>
            <IconRow
              linkedinUrl="https://www.linkedin.com/in/sakshat-patil/"
              githubUrl="https://github.com/sakshat-patil"
              email="sakshatpatil25@gmail.com"
            />
          </>
        }
        overlayOpacity={0.6}
      />
    </section>
    <section id="skills">
      <AboutMe />
    </section>
    <section id="experience">
      <div style={{ padding: '2rem 1rem', background: '#111' }}>
        <h2 style={{ color: '#fff', textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>Work Experience</h2>
        <BeautifulTimeline />
      </div>
    </section>
    <section id="projects">
      <ProjectCards />
    </section>
  </>
)

export default App;