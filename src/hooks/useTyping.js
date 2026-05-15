import { useState, useEffect } from 'react';

export function useTyping(words, speed = 100, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (!words.length) return;
    const word = words[index];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, subIndex + 1));
        setSubIndex(s => s + 1);
        if (subIndex === word.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setText(word.slice(0, subIndex - 1));
        setSubIndex(s => s - 1);
        if (subIndex === 0) {
          setDeleting(false);
          setIndex(i => (i + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, speed, pause]);

  return text;
}
