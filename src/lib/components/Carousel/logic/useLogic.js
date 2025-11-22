'use client';
import { useEffect, useRef, useState } from 'react';

const useLogic = ({ length }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const carouselRef = useRef(null);
   const [carouselTranslate, setCarouselTranslate] = useState(0);

   const touchStartX = useRef(0);
   const touchEndX = useRef(0);

   useEffect(() => {
      const updatePosition = () => {
         if (!carouselRef.current) return;
         const containerWidth = carouselRef.current.offsetWidth;
         setCarouselTranslate(-activeIndex * containerWidth);
      };

      updatePosition();
      window.addEventListener('resize', updatePosition);
      return () => window.removeEventListener('resize', updatePosition);
   }, [activeIndex]);

   useEffect(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const handleTouchStart = (e) => {
         touchStartX.current = e.touches[0].clientX;
      };

      const handleTouchMove = (e) => {
         touchEndX.current = e.touches[0].clientX;
      };

      const handleTouchEnd = () => {
         const distance = touchStartX.current - touchEndX.current;
         const threshold = 50;

         if (distance > threshold && activeIndex < length - 1) {
            setActiveIndex(activeIndex + 1);
         } else if (distance < -threshold && activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
         }
      };

      carousel.addEventListener('touchstart', handleTouchStart);
      carousel.addEventListener('touchmove', handleTouchMove);
      carousel.addEventListener('touchend', handleTouchEnd);

      return () => {
         carousel.removeEventListener('touchstart', handleTouchStart);
         carousel.removeEventListener('touchmove', handleTouchMove);
         carousel.removeEventListener('touchend', handleTouchEnd);
      };
   }, [activeIndex, setActiveIndex]);

   return {
      activeIndex,
      carouselRef,
      setActiveIndex,
      carouselTranslate,
   };
};

export default useLogic;
