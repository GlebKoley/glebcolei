'use client';
import React, { useState } from 'react';

import CardItem from './elements/CardItem';

const ProjectsCards = ({ cards }) => {
   const [openIndex, setOpenIndex] = useState(0);

   return (
      <div className="tablet:flex-row tablet:h-[62dvh] tablet:gap-6 relative flex h-[80dvh] w-full flex-col gap-0 px-2">
         <div className="border-mainPurple/60 relative flex-1 overflow-hidden rounded-2xl border bg-[#111]">
            {cards.map((card, index) => {
               const isActive = index === openIndex;
               const isBefore = index < openIndex;
               const isAfter = index > openIndex;

               return <CardItem key={index} card={card} isAfter={isAfter} isActive={isActive} isBefore={isBefore} />;
            })}
         </div>

         <div className="tablet:w-14 tablet:h-full tablet:flex-col relative flex h-14 w-full shrink-0 flex-row items-center justify-between">
            <div className="tablet:top-6 tablet:bottom-6 tablet:left-1/2 tablet:right-auto tablet:h-auto tablet:w-0.5 tablet:-translate-x-1/2 tablet:translate-y-0 absolute top-1/2 right-6 left-6 z-0 h-0.5 -translate-y-1/2 rounded-full bg-gray-700">
               <div
                  style={{
                     '--progress': `${cards.length > 1 ? (openIndex / (cards.length - 1)) * 100 : 0}%`,
                  }}
                  className="bg-lightPurple tablet:w-full tablet:h-(--progress) h-full w-(--progress) rounded-full transition-all duration-700 ease-in-out"
               />
            </div>

            {cards.map((_, i) => {
               const active = i === openIndex;

               return (
                  <button
                     key={i}
                     onClick={() => setOpenIndex(i)}
                     className={`tablet:h-12 tablet:w-12 tablet:text-lg z-10 flex h-10 w-10 transform items-center justify-center rounded-full border text-base transition-all duration-300 ${
                        active
                           ? 'border-lightPurple scale-110 bg-[#111] text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                           : 'hover:border-lightPurple border-[#333] bg-[#111] text-gray-300 hover:scale-105'
                     }`}
                  >
                     {i + 1}
                  </button>
               );
            })}
         </div>
      </div>
   );
};

export default ProjectsCards;
