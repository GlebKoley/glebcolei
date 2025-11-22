'use client';
import { useEffect, useRef, useState } from 'react';

const AnimateIcon = ({ src = null, activeScreenIndex, componentScreenIndex }) => {
   const [parallax, setParallax] = useState({ x: 0, y: 0 });
   const [visible, setVisible] = useState(true);
   const fadeTimeoutRef = useRef(null);

   const handleMoveRef = useRef((e) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.033;
      const y = (e.clientY - window.innerHeight / 2) * 0.033;
      setParallax({ x, y });
   });

   useEffect(() => {
      if (!src) return;

      if (componentScreenIndex === activeScreenIndex) {
         window.addEventListener('mousemove', handleMoveRef.current);
         setVisible(true);
      } else {
         setVisible(false);
         window.removeEventListener('mousemove', handleMoveRef.current);
         if (fadeTimeoutRef.current) {
            clearTimeout(fadeTimeoutRef.current);
         }
         fadeTimeoutRef.current = setTimeout(() => setVisible(null), 400);
      }

      return () => {
         clearTimeout(fadeTimeoutRef.current);
         window.removeEventListener('mousemove', handleMoveRef.current);
      };
   }, [src, componentScreenIndex]);

   if (!src || visible === null) return null;

   return (
      <div
         style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
         className={`parallax-wrapper transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
         <div className="spin">
            <img src={src} alt="icon" width={250} height={250} loading="lazy" className="react-icon" />
         </div>
      </div>
   );
};

export default AnimateIcon;
