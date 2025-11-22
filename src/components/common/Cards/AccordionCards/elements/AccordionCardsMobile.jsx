'use client';
import { asHTML } from '@prismicio/client';

import SliderTabs from '@/components/common/Tabs/SliderTabs';

const AccordionCardsMobile = ({ cards, openIndex, setOpenIndex }) => {
   const activeCard = cards?.[openIndex];

   return (
      <div className="tablet:hidden w-full">
         <SliderTabs cards={cards} openIndex={openIndex} setOpenIndex={setOpenIndex} />

         {activeCard && (
            <div className="to-lightBlack border-lightPurple from-mainBlack mt-3 max-h-full w-full rounded-2xl border bg-linear-to-tr p-4 pr-2 transition-all">
               <div
                  dangerouslySetInnerHTML={{ __html: asHTML(activeCard.accordion_data) }}
                  className="accordion-card-html-data-styles description-22 max-h-[50dvh] overflow-auto text-white"
               />
            </div>
         )}
      </div>
   );
};

export default AccordionCardsMobile;
