import React, { useState, useEffect, useRef } from 'react';

/**
 * ScrambleText Component
 * 
 * Creates a "decryption" / scrambling animation on hover.
 * Random characters are displayed in orange (#FF4D00) while the
 * target text is revealed character by character.
 */
const ScrambleText = ({ text = "ANIMATION + INTERACTION", className = "" }) => {
  const [displayedText, setDisplayedText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const frameRef = useRef(null);
  const iterationRef = useRef(0);

  const startAnimation = () => {
    iterationRef.current = 0;
    
    const animate = () => {
      setDisplayedText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterationRef.current) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterationRef.current >= text.length) {
        cancelAnimationFrame(frameRef.current);
      } else {
        iterationRef.current += 1 / 4 ; // Controls speed of reveal
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isHovered) {
      startAnimation();
    } else {
      setDisplayedText(text);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isHovered, text]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-block cursor-default font-mono text-2xl font-medium tracking-tight ${className}`}
    >
      {displayedText.split('').map((char, i) => (
        <span 
          key={i} 
          style={{ 
            color: char === text[i] ? 'inherit' : '#FF4D00',
            opacity: char === text[i] ? 1 : 0.8
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default ScrambleText;
