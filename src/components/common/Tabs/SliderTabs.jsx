import React, { useRef } from 'react';

const SliderTabs = ({ cards, openIndex, setOpenIndex }) => {
   const containerRef = useRef(null);
   const buttonRefs = useRef([]);

   const handleClick = (index) => {
      if (index === openIndex) return;
      setOpenIndex(index);
      buttonRefs.current[index]?.scrollIntoView({
         block: 'center',
         inline: 'center',
         behavior: 'smooth',
      });
   };

   return (
      <div ref={containerRef} className="flex gap-2 overflow-x-auto pb-2">
         {cards?.map(({ title }, index) => {
            const isOpen = openIndex === index;
            return (
               <button
                  key={title}
                  onClick={() => handleClick(index)}
                  ref={(el) => (buttonRefs.current[index] = el)}
                  className={`shrink-0 rounded-xl border px-4 py-2 whitespace-nowrap text-white transition-all ${
                     isOpen ? 'border-lightPurple bg-[#2d1b45]' : 'bg-lightBlack hover:border-lightPurple border-[#333]'
                  }`}
               >
                  {title}
               </button>
            );
         })}
      </div>
   );
};

export default SliderTabs;
