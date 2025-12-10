import { asHTML } from '@prismicio/client';

import { ProjectsBlockCard } from '@/lib/types/common';

interface CardItem {
   card: ProjectsBlockCard;
   isActive: boolean;
}

const AccordionCardItem = ({ card, isActive }: CardItem) => {
   const cardData = asHTML(card?.data);

   return (
      <div
         className={`will-change-opacity absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform ${
            isActive
               ? 'pointer-events-auto z-10 translate-y-0 opacity-100'
               : 'pointer-events-none z-0 translate-y-60 opacity-0'
         } `}
      >
         <div
            key={cardData}
            dangerouslySetInnerHTML={{ __html: cardData }}
            className="description-22 accordion-card-html-data-styles tablet:p-6 h-full w-full overflow-auto p-4 transition-opacity duration-600 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
         />
      </div>
   );
};

export default AccordionCardItem;
