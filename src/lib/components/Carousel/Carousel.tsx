'use client';
import React from 'react';

import Dots from '../UI/Dots';
import useLogic from './logic/useLogic';

interface CarouselProps {
   cards: number[];
   children: React.ReactNode[];
}

const Carousel = ({ cards, children }: CarouselProps) => {
   const { length } = cards ?? 0;
   const { activeIndex, carouselRef, setActiveIndex, carouselTranslate } = useLogic({
      length,
   });

   return (
      <div className="relative w-full overflow-hidden">
         <div
            ref={carouselRef}
            style={{ transform: `translateX(${carouselTranslate}px)` }}
            className="flex w-full gap-2.5 transition-transform duration-500 ease-in-out"
         >
            {children.map((child, index) => (
               <div key={index} className="w-full min-w-full shrink-0">
                  {child}
               </div>
            ))}
         </div>

         <Dots
            gap="space-x-3"
            size={'h-3 w-3'}
            dotsLength={length}
            positionClass="mt-0"
            direction="horizontal"
            activeIndex={activeIndex}
            onDotClick={setActiveIndex}
         />
      </div>
   );
};

export default Carousel;
