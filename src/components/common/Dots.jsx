'use client';
import React from 'react';

const Dots = ({
   gap = 'gap-2',
   dotsLength = 0,
   activeIndex = 0,
   size = 'h-3 w-3',
   onDotClick = null,
   positionClass = '',
   activeColor = 'bg-white',
   direction = 'horizontal',
   inactiveColor = 'bg-[#9F53FF]',
}) => {
   const isClickable = typeof onDotClick === 'function';
   const isVertical = direction === 'vertical';

   return (
      <div className={`flex ${isVertical ? 'flex-col' : 'flex-row'} justify-center ${gap} ${positionClass}`}>
         {[...Array(dotsLength)].map((_, i) => {
            const isActive = activeIndex === i;
            const colorClass = isActive ? activeColor : inactiveColor;
            const commonClasses = `rounded-full transition-colors duration-300 ${colorClass} ${size}`;

            if (isClickable) {
               return (
                  <button
                     key={i}
                     onClick={() => onDotClick(i)}
                     aria-label={`Перейти к слайду ${i + 1}`}
                     className="flex items-center justify-center p-1.5"
                  >
                     <div className={commonClasses} />
                  </button>
               );
            }

            return <div key={i} className={commonClasses} />;
         })}
      </div>
   );
};

export default Dots;
