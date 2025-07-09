// src/components/IconRow.tsx
import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import './IconRow.css'

export interface IconRowProps {
  linkedinUrl: string
  githubUrl: string
  email: string
}

const IconRow: React.FC<IconRowProps> = ({ linkedinUrl, githubUrl, email }) => (
  <div className="contactIcons">
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin size={24} />
    </a>
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub size={24} />
    </a>
    <a href={`mailto:${email}`} aria-label="Email">
      <FaEnvelope size={24} />
    </a>
  </div>
)

export default IconRow
