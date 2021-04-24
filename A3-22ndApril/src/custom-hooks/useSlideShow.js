import { useEffect, useState } from "react";

export default function useSlideshow(slides, { timerLength = 5000 } = {}) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [currIndex, setCurrIndex] = useState(0);
   
    useEffect(() => {
      if (isPlaying) {
        const timer = setTimeout(() => setCurrIndex((currIndex + 1) % slides.length), timerLength);
   
        return () => clearTimeout(timer);
      }
    }, [currIndex, isPlaying, slides.length, timerLength]);
   
  const updateSlide = (direction) => {
      if (typeof direction === 'number') {
        return setCurrIndex(direction);
      }
   
      if (direction === 'next') {
        return setCurrIndex((currIndex + 1) % slides.length);
      }
   
      return setCurrIndex((currIndex - 1 + slides.length) % slides.length);
    };
   
    return {
      currIndex,
      isPlaying,
      setIsPlaying,
      updateSlide,
    };
}  