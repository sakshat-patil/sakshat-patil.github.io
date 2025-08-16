import React, { useState, useEffect } from 'react'
import HeaderBar from './HeaderBar'
import type { HeaderBarProps } from './HeaderBar'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import BeautifulTimeline from './BeautifulTimeline'
import './App.css'  
import ProjectCards from './ProjectCards'
import SkillsSection from './SkillsSection'
import LinkedInTestimonials from './LinkedInTestimonials'
import TiltCards from './TiltCards'

const navLinks: HeaderBarProps['links'] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' }
];

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
  <>
    <HeaderBar title="Sakshat Patil" links={navLinks} />
    
    {/* Hero Section */}
    <section id="home">
      <HeroSection
        name="Sakshat"
        taglines={[
          "I am a Software Engineer.",
          "I am a Cloud Developer.",
          "I am a Problem Solver.",
          "I am a Backend Specialist.",
          "I am an AI Enthusiast.",
          "I am a Distributed Systems Developer.",
          "I am a Full-Stack Engineer.",
          "I am a DevOps Practitioner."
        ]}
        resumeUrl="/resume.pdf"
        socialLinks={{
          leetcode: "https://leetcode.com/u/patil_sakshat/",
          linkedin: "https://www.linkedin.com/in/sakshat-patil/",
          github: "https://github.com/sakshat-patil",
          email: "sakshatpatil25@gmail.com"
        }}
      />
    </section>

    {/* About Section */}
    <section id="about">
      <AboutMe />
    </section>

    {/* 3D Tilt Cards Section - Commented out */}
    {/* <TiltCards /> */}

    {/* Experience Section - Keeping the timeline as requested */}
    <section id="experience">
      <div className="experience-container">
        <h2 className="section-title">Work Experience</h2>
        <BeautifulTimeline />
      </div>
    </section>

    {/* Projects Section - Desktop Only */}
    {!isMobile && (
      <section id="projects">
        <div className="projects-container">
          <h2 className="section-title">Featured Projects</h2>
          <ProjectCards />
        </div>
      </section>
    )}

    {/* Skills Section */}
    <section id="skills">
      <SkillsSection />
    </section>

    {/* LinkedIn Testimonials Section - Commented out */}
    {/* <section id="testimonials">
      <LinkedInTestimonials />
    </section> */}
  </>
  );
};

export default App;