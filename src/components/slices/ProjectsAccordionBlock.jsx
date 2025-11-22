import React from 'react';

import AccordionCards from '../common/Cards/AccordionCards';
import TitleWithButton from '../common/TitleWithButton';

const ProjectsAccordionBlock = ({ data }) => {
   const { project_cards = [], title_component = {} } = data;

   return (
      <div className="main-wrapper tablet:gap-10 flex h-max flex-col gap-4 pt-0 pb-5 text-center">
         {title_component?.data && <TitleWithButton data={title_component.data} />}

         <AccordionCards cards={project_cards} />
      </div>
   );
};

export default ProjectsAccordionBlock;
