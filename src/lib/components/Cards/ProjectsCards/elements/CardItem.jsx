import React from 'react';

import { asHTML } from '@prismicio/client';

const AccordionCardItem = ({ card, isAfter, isActive, isBefore }) => {
   return (
      <div
         className={`absolute inset-0 transform transition-all duration-800 ease-in-out ${
            isActive ? 'z-10 translate-y-0 opacity-100' : ''
         } ${isBefore ? 'z-0 -translate-y-full opacity-0' : ''} ${isAfter ? 'z-0 translate-y-full opacity-0 blur-sm' : ''} `}
      >
         <div
            dangerouslySetInnerHTML={{ __html: asHTML(card?.data) }}
            className="description-22 accordion-card-html-data-styles tablet:p-6 h-full w-full overflow-auto p-4"
         />
      </div>
   );
};

export default AccordionCardItem;
