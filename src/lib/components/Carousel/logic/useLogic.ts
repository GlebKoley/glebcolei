'use client';
import { useEffect, useRef, useState } from 'react';

const useLogic = ({ length }: { length: number }) => {
   const [activeIndex, setActiveIndex] = useState<number>(0);
   const carouselRef = useRef<HTMLDivElement>(null);
   const [carouselTranslate, setCarouselTranslate] = useState<number>(0);

   const touchStartX = useRef<number>(0);
   const touchEndX = useRef<number>(0);
   const minSwipeDistance = 50;

   useEffect(() => {
      const updatePosition = () => {
         if (!carouselRef.current) return;

         const firstItem = carouselRef.current.children[0];
         if (!(firstItem instanceof HTMLElement)) return;

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

      const onTouchStart = (event: TouchEvent) => {
         touchEndX.current = 0;
         touchStartX.current = event.targetTouches[0].clientX;
      };

      const onTouchMove = (event: TouchEvent) => {
         touchEndX.current = event.targetTouches[0].clientX;
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
