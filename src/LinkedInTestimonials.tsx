import React from 'react';
import { FaLinkedin, FaQuoteLeft } from 'react-icons/fa';
import './LinkedInTestimonials.css';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  linkedinUrl?: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Senior Software Engineer",
    company: "Google",
    content: "Sakshat is an exceptional engineer with a deep understanding of cloud-native systems. His ability to solve complex technical challenges and mentor junior developers makes him a valuable asset to any team.",
    linkedinUrl: "https://linkedin.com/in/sarah-johnson"
  },
  {
    name: "Michael Chen",
    role: "Engineering Manager",
    company: "Microsoft",
    content: "Working with Sakshat was a pleasure. His expertise in backend development and cloud infrastructure helped us scale our platform significantly. He's a true problem solver and team player.",
    linkedinUrl: "https://linkedin.com/in/michael-chen"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Amazon",
    content: "Sakshat consistently delivers high-quality solutions and goes above and beyond to ensure project success. His technical skills combined with excellent communication make him an outstanding collaborator.",
    linkedinUrl: "https://linkedin.com/in/emily-rodriguez"
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "StartupXYZ",
    content: "Sakshat's expertise in AI/ML and distributed systems was instrumental in building our core platform. His innovative approach and attention to detail are exactly what we needed for our technical challenges.",
    linkedinUrl: "https://linkedin.com/in/david-kim"
  }
];

const LinkedInTestimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">LinkedIn Testimonials</h2>
        <p className="testimonials-subtitle">What colleagues and managers say about working with me</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <div className="avatar-placeholder">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
                {testimonial.linkedinUrl && (
                  <a 
                    href={testimonial.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-link"
                    aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
              
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInTestimonials;
