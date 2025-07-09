// src/TypewriterText.tsx
import React, { useState, useEffect } from 'react';
import './TypewriterText.css';

interface TypewriterTextProps {
  /** Array of messages to cycle through */
  messages: string[];
  /** ms per character when typing */
  typingSpeed?: number;
  /** ms per character when deleting */
  deletingSpeed?: number;
  /** pause (ms) after the full text is typed before deleting */
  pauseBeforeDelete?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  messages,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBeforeDelete = 1000,
}) => {
  const [display, setDisplay] = useState('');
  const [isDeleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const current = messages[msgIndex];

    if (!isDeleting && charIndex <= current.length) {
      timeout = window.setTimeout(() => {
        setDisplay(current.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = window.setTimeout(() => {
        setDisplay(current.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    }

    // Once fully typed, pause then start deleting
    if (!isDeleting && charIndex === current.length + 1) {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => setDeleting(true), pauseBeforeDelete);
    }
    // Once fully deleted, move to next message
    else if (isDeleting && charIndex === 0) {
      clearTimeout(timeout);
      setDeleting(false);
      setMsgIndex((msgIndex + 1) % messages.length);
    }

    return () => {
      if (timeout !== undefined) clearTimeout(timeout);
    };
  }, [charIndex, isDeleting, msgIndex, messages, typingSpeed, deletingSpeed, pauseBeforeDelete]);

  return (
    <span className="typewriter-text">
      {display}
      <span className="typewriter-caret">_</span>
    </span>
  );
};

export default TypewriterText;
