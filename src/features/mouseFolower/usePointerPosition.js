import { useState, useEffect, useRef } from 'react';

export function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleMove = (e) => {
      const storageValue = Number(sessionStorage.getItem("scrollPosition")) || 0;
      sessionStorage.setItem("clientX", e.clientX);
      sessionStorage.setItem("clientY", e.clientY);
      const clientX = Number(sessionStorage.getItem("clientX")) || 0
      const clientY = Number(sessionStorage.getItem("clientY")) || 0
      setPosition({ x: clientX, y: clientY + storageValue });
    };

    window.addEventListener('pointermove', handleMove);
    const handleScroll = (event) => {
        const currentScrollPos = event.target.documentElement.scrollTop || event.target.body.scrollTop;
        const scrollDifference = currentScrollPos - prevScrollPos.current;
        const storageValue = Number(sessionStorage.getItem("scrollPosition")) || 0;
        sessionStorage.setItem("scrollPosition", storageValue + scrollDifference);
        console.log(storageValue);
        const clientX = Number(sessionStorage.getItem("clientX")) || 0
        const clientY = Number(sessionStorage.getItem("clientY")) || 0
        setPosition({x: clientX, y: clientY + storageValue + scrollDifference});
        prevScrollPos.current = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('pointermove', handleScroll);
        sessionStorage.setItem("clientX", 0);
        sessionStorage.setItem("clientY", 0);
        sessionStorage.setItem("scrollPosition", 0);
    }
  }, []);

  return position;
}
