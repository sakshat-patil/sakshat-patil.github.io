import React, { useState, useEffect } from 'react';
import { BeautifulTimeline, BeautifulTimelineItem } from 'react-beautiful-timeline';
import 'react-beautiful-timeline/dist/style.css';

const Timeline: React.FC = () => {
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
    <div style={{ 
      padding: '2rem', 
      background: 'transparent', 
      color: '#2d3748',
      textAlign: 'center'
    }}>
      <div style={{ 
        maxWidth: '800px', 
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <BeautifulTimeline 
          type="vertical"
          animation={true}
          animationDuration={2000}
          activeLineStyle={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
          passiveLineStyle={{ background: 'rgba(102, 126, 234, 0.2)' }}
        >
          <BeautifulTimelineItem 
            dotColor="#667eea"
            dotStyle={{ 
              fontSize: '0.5rem', 
              color: '#fff', 
              textShadow: '0 0 10px rgba(102, 126, 234, 0.5), 0 0 20px rgba(102, 126, 234, 0.3)',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: '2px solid #667eea',
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(102, 126, 234, 0.3)'
            }}
            place="opposite"
          >
            <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '1rem', borderRadius: '12px', margin: '1rem 0', border: '1px solid rgba(102, 126, 234, 0.1)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748', background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>B.Eng. Electronics and Communications</h3>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#4a5568' }}>University of Mumbai</h4>
              {!isMobile && (
                <>
                  <p style={{ margin: '0', color: '#718096' }}>GPA: 9.13/10</p>
                  <p style={{ margin: '0', color: '#718096' }}>Volunteering: IEEE</p>
                  <small style={{ color: '#a0aec0' }}>2018 – 2022</small>
                </>
              )}
            </div>
          </BeautifulTimelineItem>

          <BeautifulTimelineItem 
            dotColor="#667eea"
            dotStyle={{ 
              fontSize: '0.5rem', 
              color: '#fff', 
              textShadow: '0 0 10px rgba(102, 126, 234, 0.5), 0 0 20px rgba(102, 126, 234, 0.3)',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: '2px solid #667eea',
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(102, 126, 234, 0.3)'
            }}
            place="normal"
          >
            <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '1rem', borderRadius: '12px', margin: '1rem 0', border: '1px solid rgba(102, 126, 234, 0.1)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748', background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Software Development Intern</h3>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#4a5568' }}>WebReach</h4>
              {!isMobile && (
                <>
                  <p style={{ margin: '0', color: '#718096' }}>Developed cross-platform Flutter applications and responsive web apps using CSS, Bootstrap, JavaScript, and PHP. Collaborated with UI/UX teams and followed Agile methodologies.</p>
                  <small style={{ color: '#a0aec0' }}>Nov 2021 – Jul 2022</small>
                </>
              )}
            </div>
          </BeautifulTimelineItem>

          <BeautifulTimelineItem 
            dotColor="#667eea"
            dotStyle={{ 
              fontSize: '0.5rem', 
              color: '#fff', 
              textShadow: '0 0 10px rgba(102, 126, 234, 0.5), 0 0 20px rgba(102, 126, 234, 0.3)',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: '2px solid #667eea',
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(102, 126, 234, 0.3)'
            }}
            place="opposite"
          >
            <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '1rem', borderRadius: '12px', margin: '1rem 0', border: '1px solid rgba(102, 126, 234, 0.1)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748', background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Software Development Engineer - I</h3>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#4a5568' }}>Reliance Jio</h4>
              {!isMobile && (
                <>
                  <p style={{ margin: '0', color: '#718096' }}>Built scalable cross-platform applications and responsive web apps using JavaScript, PHP, and Bootstrap. Implemented CI/CD pipelines and collaborated across teams to deliver high-impact features.</p>
                  <small style={{ color: '#a0aec0' }}>2022 – 2025</small>
                </>
              )}
            </div>
          </BeautifulTimelineItem>

          <BeautifulTimelineItem 
            dotColor="#667eea"
            dotStyle={{ 
              fontSize: '0.5rem', 
              color: '#fff', 
              textShadow: '0 0 10px rgba(102, 126, 234, 0.5), 0 0 20px rgba(102, 126, 234, 0.3)',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: '2px solid #667eea',
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(102, 126, 234, 0.3)'
            }}
            place="normal"
          >
            <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '1rem', borderRadius: '12px', margin: '1rem 0', border: '1px solid rgba(102, 126, 234, 0.1)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748', background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>M.S. Software Engineering</h3>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#4a5568' }}>San José State University</h4>
              {!isMobile && (
                <>
                  <p style={{ margin: '0', color: '#718096' }}>Focusing on cloud-native systems, AI and Cybersecurity</p>
                  <small style={{ color: '#a0aec0' }}>2025 – Present</small>
                </>
              )}
            </div>
          </BeautifulTimelineItem>


        </BeautifulTimeline>
      </div>
    </div>
  );
};

export default Timeline; 