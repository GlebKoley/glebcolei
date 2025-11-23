import React from 'react';

import AccordionCards from '@/lib/components/Cards/ProjectDescriptionCard';
import TitleWithButton from '@/lib/components/UI/TitleWithButton';
import renderTwoGradientBlobs from '@/lib/utils/renderTwoGradientBlobs';

const ProjectsAccordionBlock = ({ data }) => {
   const { project_cards = [], title_component = {} } = data;

   return (
      <div className="main-wrapper tablet:gap-12 tablet:mt-11 flex h-max flex-col gap-4 pb-0 text-center">
         {title_component?.data && <TitleWithButton data={title_component.data} />}
         {renderTwoGradientBlobs()}

         <AccordionCards cards={project_cards} />
      </div>
   );
};

export default ProjectsAccordionBlock;
