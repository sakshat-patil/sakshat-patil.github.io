import React from 'react'
import './HeaderBar.css'

export interface HeaderBarProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, links }) => (
    <nav
       className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1030 }}
     >
    <div className="container-fluid">
      {/* Only render the brand title if provided, as non-clickable text */}
      {title && (
        <span className="navbar-brand ps-5">
          {"Sakshat Patil"}
        </span>
      )}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {links.map(link => link.external ? (
            <li key={link.label} className="nav-item me-2">
              <a className="nav-link" key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
            </li>
          ) : (
            <li key={link.label} className="nav-item me-2">
              <a className="nav-link" key={link.label} href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
)

export default HeaderBar
