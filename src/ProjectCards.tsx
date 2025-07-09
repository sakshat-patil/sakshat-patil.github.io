import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase } from 'react-icons/fa';
import { SiFastapi, SiClaude, SiMongodb } from 'react-icons/si'
import { RxVercelLogo } from "react-icons/rx";
import { TbBrandTwilio } from "react-icons/tb";

import './ProjectCards.css';

const projects = [
  {
    title: 'GitTranslate',
    description: 'GitCast turns any GitHub repository into a podcast in your native language. Paste a repo link, pick a language, and get an audio walkthrough of the docs.',
    tech: [
      <FaReact key="react" />, 
      <FaNodeJs key="node" />, 
      <FaAws key="aws" />,
      <FaPython key="py" />,
      <SiFastapi key = "fast" />,
      <SiClaude key = "SiClaude"/>,
      <RxVercelLogo key = "vercel"/>,
    ],
  },
  {
    title: 'MedAssist - Medical Agentic AI',
    description: 'AI-powered medical triage system built with React, TypeScript, FastAPI, and Anthropic Claude. Features real-time risk assessment, doc processing, Twilio alerts, and PDF reports.',
    tech: [<FaReact key="react2" />, <FaPython key="py" />, <FaAws key="aws2" />,
      <TbBrandTwilio key = "twilio"/>,
      <SiMongodb key = "mongo"/>,
      <SiFastapi key = "fast" />,
      <SiClaude key = "SiClaude"/>,],
  },
  {
    title: 'SJ Hacks - BridgeWorks',
    description: 'A tool to alleviate homelessness by connecting people to remedial services and low-skilled jobs.',
    tech: [<FaReact key="react3" />, <FaNodeJs key="node2" />,
      <SiMongodb key = "mongo"/>,
      <SiFastapi key = "fast" />,],
  },
];

const ProjectCards: React.FC = () => (
  <div className="project-cards-container">
    {projects.map((project, idx) => (
      <div className="project-card" key={idx}>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((icon, i) => (
            <span className="tech-icon" key={i}>{icon}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default ProjectCards; 