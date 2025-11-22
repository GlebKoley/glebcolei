'use client';
import { asHTML } from '@prismicio/client';

const AccordionCardsDesktop = ({ cards, openIndex, setOpenIndex }) => {
   return (
      <div className="tablet:flex relative hidden h-[62dvh] w-full gap-6 px-2">
         <div className="border-lightPurple relative flex-1 overflow-hidden rounded-2xl border bg-[#111] p-6">
            {cards.map((card, index) => {
               const isActive = index === openIndex;
               const isBefore = index < openIndex;
               const isAfter = index > openIndex;

               return (
                  <div
                     key={index}
                     className={`absolute inset-0 transform p-7 transition-all duration-800 ease-in-out ${isActive ? 'z-10 translate-y-0 opacity-100' : ''} ${isBefore ? 'z-0 -translate-y-full opacity-0' : ''} ${isAfter ? 'z-0 translate-y-full opacity-0 blur-sm' : ''} `}
                  >
                     <div
                        dangerouslySetInnerHTML={{ __html: asHTML(card.accordion_data) }}
                        className="description-22 accordion-card-html-data-styles overflow-auto"
                     />
                  </div>
               );
            })}
         </div>

         <div className="relative flex h-full w-14 flex-col items-center justify-between">
            <div className="absolute top-6 bottom-6 left-1/2 z-0 w-0.5 -translate-x-1/2 transform rounded-full bg-gray-700">
               <div
                  className="bg-lightPurple w-full rounded-full transition-all duration-700 ease-in-out"
                  style={{
                     height: `${cards.length > 1 ? (openIndex / (cards.length - 1)) * 100 : 0}%`,
                  }}
               />
            </div>

            {cards.map((_, i) => {
               const active = i === openIndex;

               return (
                  <button
                     key={i}
                     onClick={() => setOpenIndex(i)}
                     className={`z-10 flex h-12 w-12 transform items-center justify-center rounded-full border text-lg transition-all duration-300 ${
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

export default AccordionCardsDesktop;
