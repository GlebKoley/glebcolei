'use client';
import { asHTML } from '@prismicio/client';

const AccordionCardsDesktop = ({ cards, openIndex, setOpenIndex }) => {
   return (
      <div className="tablet:flex-row tablet:flex tablet:px-2 hidden w-full flex-col gap-4">
         {cards?.map(({ title, accordion_data = [] }, index) => {
            const isOpen = openIndex === index;
            const htmlData = asHTML(accordion_data);

            return (
               <button
                  key={title}
                  onClick={() => {
                     if (isOpen) {
                        return;
                     }
                     setOpenIndex(isOpen ? null : index);
                  }}
                  className={`tablet:p-4 tablet:max-h-[65dvh] relative flex items-center justify-center overflow-hidden rounded-2xl border p-3 ease-in-out will-change-auto [transition:width_0.8s,background-color_0.3s,border-color_0.3s,box-shadow_0.3s,scale_0.3s] ${isOpen ? 'border-lightPurple w-full' : 'to-lightBlack hover:border-lightPurple w-24 border-[#232323] bg-linear-to-tr from-[#111111] hover:scale-101 hover:bg-linear-to-tr hover:from-[#222222] hover:to-[#333333] hover:shadow-lg hover:shadow-purple-400/50'} `}
               >
                  <div className={`relative flex h-full w-full items-start`}>
                     <h3
                        className={`description-22 tablet:[writing-mode:vertical-rl] absolute top-0 right-0 bottom-0 left-0 m-auto rotate-180 transform text-end text-white transition-opacity duration-800 ${isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'} `}
                     >
                        {title}
                     </h3>

                     <div
                        dangerouslySetInnerHTML={{ __html: htmlData }}
                        className={`description-22 accordion-card-html-data-styles overflow-auto transition-all duration-800 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-550 opacity-0'} cursor-default select-text`}
                     />
                  </div>
                  {isOpen && (
                     <span
                        className={`tablet:right-5 tablet:bottom-5 absolute right-2 bottom-2 transform text-2xl text-white`}
                     >
                        {index + 1}
                     </span>
                  )}
               </button>
            );
         })}
      </div>
   );
};

export default AccordionCardsDesktop;
