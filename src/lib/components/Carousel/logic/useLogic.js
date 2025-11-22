'use client';
import { useEffect, useRef, useState } from 'react';

const useLogic = ({ length }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const carouselRef = useRef(null);
   const [carouselTranslate, setCarouselTranslate] = useState(0);

   const touchStartX = useRef(0);
   const touchEndX = useRef(0);
   const minSwipeDistance = 50;

   useEffect(() => {
      const updatePosition = () => {
         if (!carouselRef.current) return;

         const firstItem = carouselRef.current.children[0];
         if (!firstItem) return;

         const itemWidth = firstItem.offsetWidth;

         const style = window.getComputedStyle(carouselRef.current);
         const gap = parseFloat(style.gap) || 0;

         const moveDistance = itemWidth + gap;

         setCarouselTranslate(-activeIndex * moveDistance);
      };

      updatePosition();
      window.addEventListener('resize', updatePosition);

      return () => window.removeEventListener('resize', updatePosition);
   }, [activeIndex, length]);

   useEffect(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const onTouchStart = (e) => {
         touchEndX.current = 0;
         touchStartX.current = e.targetTouches[0].clientX;
      };

      const onTouchMove = (e) => {
         touchEndX.current = e.targetTouches[0].clientX;
      };

      const onTouchEnd = () => {
         if (!touchStartX.current || !touchEndX.current) return;

         const distance = touchStartX.current - touchEndX.current;
         const isLeftSwipe = distance > minSwipeDistance;
         const isRightSwipe = distance < -minSwipeDistance;

         if (isLeftSwipe && activeIndex < length - 1) {
            setActiveIndex((prev) => prev + 1);
         }

         if (isRightSwipe && activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
         }
      };

      carousel.addEventListener('touchstart', onTouchStart);
      carousel.addEventListener('touchmove', onTouchMove);
      carousel.addEventListener('touchend', onTouchEnd);

      return () => {
         carousel.removeEventListener('touchstart', onTouchStart);
         carousel.removeEventListener('touchmove', onTouchMove);
         carousel.removeEventListener('touchend', onTouchEnd);
      };
   }, [activeIndex, length]);

   return {
      activeIndex,
      carouselRef,
      setActiveIndex,
      carouselTranslate,
   };
};

export default useLogic;
