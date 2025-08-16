// src/HeroSection.tsx
import React, { useEffect, useRef, useState } from 'react'
import './HeroSection.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import TypewriterText from './TypewriterText'

interface HeroSectionProps {
  name: string
  taglines: string[]
  resumeUrl: string
  socialLinks: {
    leetcode?: string
    linkedin?: string
    github?: string
    email?: string
  }
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  taglines,
  resumeUrl,
  socialLinks
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // 3D tilt with damping and safety checks for reduced motion and touch devices
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(hover: none)').matches
    if (prefersReduced || isTouch) return

    let raf = 0
    let targetRX = 0
    let targetRY = 0
    let rx = 0
    let ry = 0

    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const midX = rect.width / 2
      const midY = rect.height / 2

      // map to degrees
      const maxTilt = 14
      targetRY = clamp(((x - midX) / midX) * maxTilt, -maxTilt, maxTilt) // left-right
      targetRX = clamp((-(y - midY) / midY) * maxTilt, -maxTilt, maxTilt) // up-down

      if (!raf) tick()
    }

    const onLeave = () => {
      targetRX = 0
      targetRY = 0
      if (!raf) tick()
    }

    const tick = () => {
      // damp toward target
      rx += (targetRX - rx) * 0.12
      ry += (targetRY - ry) * 0.12

      el.style.setProperty('--rx', `${rx.toFixed(3)}deg`)
      el.style.setProperty('--ry', `${ry.toFixed(3)}deg`)

      const nearZero = Math.abs(targetRX - rx) < 0.05 && Math.abs(targetRY - ry) < 0.05
      if (!nearZero) {
        raf = requestAnimationFrame(tick)
      } else {
        raf = 0
      }
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hero-wrapper">
      {/* Subtle background figures */}
      <div className="background-figures">
        <div className="figure circle-1"></div>
        <div className="figure circle-2"></div>
        <div className="figure triangle-1"></div>
        <div className="figure square-1"></div>
        <div className="figure dot-1"></div>
        <div className="figure dot-2"></div>
        <div className="figure dot-3"></div>
      </div>

      {/* Main content container */}
      <div className="hero-content-container">
        <div className="container">
          <div className="hero-layout">
            
            {/* Left Column - Text and Call to Action */}
            <div className="hero-text-section">
              <div className={`text-content ${isLoaded ? 'loaded' : ''}`}>
                <h1 className="main-heading">
                  Hi, I am<br />
                  <span className="name-highlight">{name}.</span>
                </h1>
                
                <div className="cta-section">
                  <a href={resumeUrl} className="resume-button" target="_blank" rel="noopener noreferrer">
                    My Resume
                  </a>
                  
                  <div className="social-icons">
                    {socialLinks.leetcode && (
                      <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="social-icon leetcode" aria-label="LeetCode">
                        <SiLeetcode />
                      </a>
                    )}
                    {socialLinks.linkedin && (
                      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
                        <FaLinkedin />
                      </a>
                    )}
                    {socialLinks.github && (
                      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub">
                        <FaGithub />
                      </a>
                    )}
                    {socialLinks.email && (
                      <a href={`mailto:${socialLinks.email}`} className="social-icon email" aria-label="Email">
                        <FaEnvelope />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="tagline">
                  <TypewriterText messages={taglines} />
                </p>
              </div>
            </div>

            {/* Right Column - Development Illustration */}
            <div className="hero-illustration-section">
              <div
                ref={containerRef}
                className={`illustration-container ${isLoaded ? 'loaded' : ''}`}
                aria-hidden="true"
              >
                <img 
                  src="/images/Development-pana.svg" 
                  alt="Developer working with multiple monitors" 
                  className="undraw-illustration"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
