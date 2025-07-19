import React from 'react';
import { BeautifulTimeline, BeautifulTimelineItem } from 'react-beautiful-timeline';
import 'react-beautiful-timeline/dist/style.css';

const Timeline: React.FC = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      background: '#111', 
      color: '#fff',
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
          activeLineStyle={{ background: '#666' }}
          passiveLineStyle={{ background: '#333' }}
        >
          <BeautifulTimelineItem 
            dotColor="#333"
            dotStyle={{ 
              fontSize: '0.5rem', 
              color: '#fff', 
              textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff',
              background: 'transparent',
              border: '2px solid #fff',
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            place="opposite"
          >
            <div style={{ background: 'transparent', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>B.Eng. Electronics and Communications</h3>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#ccc' }}>University of Mumbai</h4>
              <p style={{ margin: '0', color: '#aaa' }}>GPA: 9.13/10</p>
              <p style={{ margin: '0', color: '#aaa' }}>Volunteering: IEEE</p>
              <small style={{ color: '#666' }}>2018 – 2022</small>
            </div>
          </BeautifulTimelineItem>

          <BeautifulTimelineItem 
            dotColor="#333"
            dotStyle={{ 
              fontSize: '0.5rem', 
              color: '#fff', 
              textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff',
              background: 'transparent',
              border: '2px solid #fff',
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            place="normal"
          >
            <div style={{ background: 'transparent', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Software Development Intern</h3>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#ccc' }}>WebReach</h4>
              <p style={{ margin: '0', color: '#aaa' }}>Developed cross-platform Flutter applications and responsive web apps using CSS, Bootstrap, JavaScript, and PHP. Collaborated with UI/UX teams and followed Agile methodologies.</p>
              <small style={{ color: '#666' }}>Nov 2021 – Jul 2022</small>
            </div>
          </BeautifulTimelineItem>

          <BeautifulTimelineItem 
            dotColor="#333"
            dotStyle={{ 
              fontSize: '0.5rem', 
              color: '#fff', 
              textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff',
              background: 'transparent',
              border: '2px solid #fff',
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            place="opposite"
          >
            <div style={{ background: 'transparent', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Software Development Engineer - I</h3>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#ccc' }}>Reliance Jio</h4>
              <p style={{ margin: '0', color: '#aaa' }}>Built scalable cross-platform applications and responsive web apps using JavaScript, PHP, and Bootstrap. Implemented CI/CD pipelines and collaborated across teams to deliver high-impact features.</p>
              <small style={{ color: '#666' }}>2022 – 2025</small>
            </div>
          </BeautifulTimelineItem>

          <BeautifulTimelineItem 
            dotColor="#333"
            dotStyle={{ 
              fontSize: '0.5rem', 
              color: '#fff', 
              textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff',
              background: 'transparent',
              border: '2px solid #fff',
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            place="normal"
          >
            <div style={{ background: 'transparent', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>M.S. Software Engineering</h3>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#ccc' }}>San José State University</h4>
              <p style={{ margin: '0', color: '#aaa' }}>Focusing on cloud-native systems, AI and Cybersecurity</p>
              <small style={{ color: '#666' }}>2025 – Present</small>
            </div>
          </BeautifulTimelineItem>


        </BeautifulTimeline>
      </div>
    </div>
  );
};

export default Timeline; 