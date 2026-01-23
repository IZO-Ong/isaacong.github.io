import React, { useState, useEffect } from 'react';

import './TypingSection.css';

const words = ["Builder", "Curious Academic", "Problem Solver", "Systems Thinker"];

const HeroText: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="bleed-wrapper">
      <div className="text-layer layer-black">
        <h1 className="hero-name">Isaac Ong</h1>
        <h2 className="hero-typing">A {text}<span className="cursor">|</span></h2>
      </div>

      <div className="text-layer layer-white" aria-hidden="true">
        <h1 className="hero-name">Isaac Ong</h1>
        <h2 className="hero-typing">A {text}<span className="cursor">|</span></h2>
      </div>
    </div>
  );
};

export default HeroText;