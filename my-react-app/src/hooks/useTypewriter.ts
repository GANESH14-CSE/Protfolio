import { useState, useEffect } from 'react';

export const useTypewriter = (
  words: string[],
  typeSpeed: number = 80,
  deleteSpeed: number = 50,
  holdTime: number = 1800
): string => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const fullWord = words[currentWordIndex];

    if (!isDeleting) {
      if (currentText !== fullWord) {
        timer = window.setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, holdTime);
      }
    } else {
      if (currentText !== '') {
        timer = window.setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => window.clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, holdTime]);

  return currentText;
};
