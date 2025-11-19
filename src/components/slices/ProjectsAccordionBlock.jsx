import React from 'react';

import { asHTML } from '@prismicio/client';

import AccordionCards from '../common/Cards/AccordionCards';

const ProjectsAccordionBlock = ({ data }) => {
   const { title, project_cards = [] } = data;
   const htmlTitle = asHTML(title);

   return (
      <div className="main-wrapper tablet:gap-8 flex h-max flex-col gap-4 pb-5 text-center">
         <h2 dangerouslySetInnerHTML={{ __html: htmlTitle }} className="description-22 leading-6 text-[#c8c8c8]" />
         <AccordionCards cards={project_cards} />
      </div>
   );
};

export default ProjectsAccordionBlock;
