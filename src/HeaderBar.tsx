import React, { useState, useEffect } from 'react'
import './HeaderBar.css'
// import { FaSun } from 'react-icons/fa'

export interface HeaderBarProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, links }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // // Extract initials from title
  // const getInitials = (name: string) => {
  //   return name.split(' ').map(word => word[0]).join('').toUpperCase();
  // };

  return (
    <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand/Logo */}
        <div className="nav-brand">
          {/* Logo container removed */}
          <span className="brand-text">{title}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Removed */}
        {/* <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <button className="theme-toggle mobile-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <FaSun className={`theme-icon ${isDarkMode ? 'dark' : ''}`} />
          </button>
          
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-nav-link"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div> */}
      </div>
    </nav>
  )
}

export default HeaderBar
