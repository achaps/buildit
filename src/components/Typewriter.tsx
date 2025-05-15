'use client';
import React, { useEffect, useState } from 'react';

const WORDS = ['Y Combinator', 'Polychain', 'Paradigm', 'a16z', 'Station F'];
const TYPING_SPEED = 80; // ms per letter
const PAUSE_BETWEEN_WORDS = 1200; // ms (barre visible)
const PAUSE_AFTER_WORD = 1000; // ms (barre invisible)

export default function Typewriter({ className = '' }: { className?: string }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < WORDS[wordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(WORDS[wordIndex].slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        // Mot fini d'être tapé, pause avec curseur
        timeout = setTimeout(() => {
          setTyping(false);
          setShowCursor(false); // cache le curseur
        }, PAUSE_BETWEEN_WORDS);
      }
    } else {
      // Pause sans curseur
      timeout = setTimeout(() => {
        setDisplayed('');
        setTyping(true);
        setShowCursor(true); // réaffiche le curseur pour le mot suivant
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }, PAUSE_AFTER_WORD);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  return (
    <span className={`align-middle ${className}`}>{displayed}{showCursor && <span className="inline-block align-middle bg-white animate-pulse ml-1" style={{ width: '0.09em', height: '0.65em', borderRadius: '2px', marginBottom: '-0.08em', verticalAlign: 'middle' }}></span>}</span>
  );
} 