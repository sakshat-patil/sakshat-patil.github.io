// src/components/AboutSection.tsx
import React from 'react'
import './AboutMe.css'

const AboutSection: React.FC = () => (
  <section className="about-section">
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm Sakshat, a software engineer currently pursuing my MSSE at San José State University. Over the years, I've been working with cloud-native microservices, building fast APIs and scalable enterprise platforms. I focus on backend development, cloud infrastructure, and AI engineering.
          </p>
          <p>
            I love solving tough technical problems, whether that's making distributed systems faster, figuring out how to connect different software pieces, or building the structure for next-gen data services. When I'm not working, I'm usually playing with whatever new framework caught my eye, working on side projects with other developers, or out on local hiking trails.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection
