import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

import { SECTIONS_TYPES } from '@/lib/utils/sectionsTypes';

const useLogic = (slices = []) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const isScrolling = useRef(false);
   const touchStartY = useRef(0);
   const scrollTimeout = useRef(null);

   const isModalOpen = useCallback(() => document.body.classList.contains('burger-menu-open'), []);

   const validSlices = useMemo(() => slices.filter(({ slice_type }) => SECTIONS_TYPES[slice_type]), [slices]);

   const scrollHandler = useCallback(
      (delta) => {
         if (isScrolling.current || delta === 0 || isModalOpen()) return;

         isScrolling.current = true;

         setActiveIndex((prev) => {
            if (delta > 0) return Math.min(prev + 1, validSlices.length - 1);
            if (delta < 0) return Math.max(prev - 1, 0);
            return prev;
         });

         if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

         scrollTimeout.current = setTimeout(() => {
            isScrolling.current = false;
         }, 400);
      },
      [validSlices.length, isModalOpen],
   );

   const handleWheel = useCallback(
      (e) => {
         if (!e.shiftKey) scrollHandler(e.deltaY);
      },
      [scrollHandler],
   );

   const handleTouchStart = useCallback((e) => {
      touchStartY.current = e.touches[0].clientY;
   }, []);

   const handleTouchMove = useCallback(
      (e) => {
         const delta = touchStartY.current - e.touches[0].clientY;
         if (Math.abs(delta) >= 30) scrollHandler(delta);
      },
      [scrollHandler],
   );

   useEffect(() => {
      window.addEventListener('wheel', handleWheel, { passive: true });
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });

      return () => {
         window.removeEventListener('wheel', handleWheel);
         window.removeEventListener('touchstart', handleTouchStart);
         window.removeEventListener('touchmove', handleTouchMove);
         if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      };
   }, [handleWheel, handleTouchStart, handleTouchMove]);

   return { activeIndex, validSlices, setActiveIndex };
};

export default useLogic;
