import React, { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiFastapi, SiClaude, SiMongodb, SiHuggingface, SiRay, SiOpenai } from 'react-icons/si'
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
    description: 'A comprehensive platform to alleviate homelessness by connecting individuals to essential services, housing resources, and employment opportunities. Features job matching algorithms, service provider integration, and real-time resource tracking to help people find stable employment and housing solutions.',
    tech: [<FaReact key="react3" />, <FaNodeJs key="node2" />,
      <SiMongodb key = "mongo"/>,
      <SiFastapi key = "fast" />,],
  },
  {
    title: 'Local-LLM-Inference-Rayserve',
    description: 'A local inference server using Hugging Face language models served via vLLM, Ray Serve, and FastAPI. Provides production-style architecture for local testing and development.',
    tech: [<FaPython key="py3" />, <SiHuggingface key="hf" />, <SiRay key="ray" />, <SiFastapi key="fast2" />],
  },
  {
    title: 'A Hybrid Classification Method for Heart Disease Detection',
    description: 'Published research paper in International Journal of Applied Engineering Research. Developed a hybrid model for predicting heart disease efficiently using AI solutions.',
    tech: [<FaPython key="py4" />, <SiOpenai key="openai" />],
  },
];

const ProjectCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Duplicate projects for infinite carousel
  const carouselProjects = [...projects, ...projects];
  const totalSlides = projects.length;
  const maxIndex = totalSlides - 1;

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex > maxIndex) {
          return 0;
        }
        return nextIndex;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex > maxIndex) {
        return 0;
      }
      return nextIndex;
    });
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexValue = prevIndex - 1;
      if (prevIndexValue < 0) {
        return maxIndex;
      }
      return prevIndexValue;
    });
    setIsAutoPlaying(false);
  };

  // Calculate translation based on screen size
  const getTranslation = () => {
    if (isMobile) {
      // On mobile, each card takes full width, so translate by 100% * currentIndex
      return `translateX(-${currentIndex * 100}%)`;
    } else {
      // On desktop, use the original 35% translation
      return `translateX(-${currentIndex * 35}%)`;
    }
  };

  return (
    <div className="project-cards-container">
      <div className="carousel-wrapper">
        <div 
          className="carousel-track"
          style={{ transform: getTranslation() }}
        >
          {carouselProjects.map((project, idx) => (
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
        
        <button className="carousel-button prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectCards; 