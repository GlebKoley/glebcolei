'use client';
import React, { useState } from 'react';

import AccordionCardsDesktop from './elements/AccordionCardsDesktop';
import AccordionCardsMobile from './elements/AccordionCardsMobile';

export default function AccordionCards({ cards }) {
   const [openIndex, setOpenIndex] = useState(0);

   const props = {
      cards,
      openIndex,
      setOpenIndex,
   };

   return (
      <>
         <AccordionCardsMobile {...props} />
         <AccordionCardsDesktop {...props} />
      </>
   );
}
