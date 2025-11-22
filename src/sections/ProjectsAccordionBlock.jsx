import React from 'react';

import AccordionCards from '@/lib/components/Cards/AccordionCards';
import TitleWithButton from '@/lib/components/TitleWithButton';

const ProjectsAccordionBlock = ({ data }) => {
   const { project_cards = [], title_component = {} } = data;

   return (
      <div className="main-wrapper tablet:gap-12 tablet:mt-11 flex h-max flex-col gap-4 pb-5 text-center">
         {title_component?.data && <TitleWithButton data={title_component.data} />}

         <AccordionCards cards={project_cards} />
      </div>
   );
};

export default ProjectsAccordionBlock;
