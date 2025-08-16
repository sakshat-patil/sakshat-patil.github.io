import React, { useRef, useEffect } from 'react';
import './CodeBlock3D.css';

const CodeBlock3D: React.FC = () => {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      try {
        if (preRef.current) {
          rotateElement(e, preRef.current);
        }
      } catch (error) {
        console.error('Error in mouse move handler:', error);
      }
    };

    // Only add listener if window is available
    if (typeof window !== 'undefined') {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const rotateElement = (event: MouseEvent, element: HTMLPreElement) => {
    try {
      const x = event.clientX;
      const y = event.clientY;

      // Find the middle
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      // Get offset from middle as a percentage and tone it down
      const offsetX = ((x - middleX) / middleX) * 135;
      const offsetY = ((y - middleY) / middleY) * 135;

      // Set rotation with error checking
      if (element && element.style) {
        element.style.setProperty('--rotateX', `${offsetX}deg`);
        element.style.setProperty('--rotateY', `${-1 * offsetY}deg`);
      }
    } catch (error) {
      console.error('Error in rotateElement:', error);
    }
  };

  return (
    <section className="code-block-3d-section">
      <div className="container">
        <h2 className="code-block-title">3D Code Block Effect</h2>
        <div className="code-block-container">
          <pre ref={preRef} className="code-block">
            <code>
              <span className="selector">.awesome-layouts</span>
              <span className="punctuation"> {'{'}</span>
              <br />
              <span className="property">  display</span>
              <span className="punctuation">:</span>
              <span className="value"> grid</span>
              <span className="punctuation">;</span>
              <br />
              <span className="property">  grid-template-columns</span>
              <span className="punctuation">:</span>
              <span className="value"> repeat(3, 1fr)</span>
              <span className="punctuation">;</span>
              <br />
              <span className="property">  gap</span>
              <span className="punctuation">:</span>
              <span className="value"> 2rem</span>
              <span className="punctuation">;</span>
              <br />
              <span className="punctuation">{'}'}</span>
            </code>
          </pre>
        </div>
        <p className="code-block-description">
          Move your mouse around to see the 3D tilt effect in action!
        </p>
      </div>
    </section>
  );
};

export default CodeBlock3D;
