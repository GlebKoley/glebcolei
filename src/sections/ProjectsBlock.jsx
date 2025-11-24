import React from 'react';

import ProjectsCards from '@/lib/components/Cards/ProjectsCards';
import TitleWithButton from '@/lib/components/UI/TitleWithButton';
import renderTwoGradientBlobs from '@/lib/utils/renderTwoGradientBlobs';

const ProjectsBlock = ({ data }) => {
   const { cards = [], title_component = {} } = data;

   return (
      <div className="main-wrapper tablet:gap-12 tablet:mt-11 flex h-max flex-col gap-4 pb-0 text-center">
         {title_component?.data && <TitleWithButton data={title_component.data} />}
         {renderTwoGradientBlobs()}

         <ProjectsCards cards={cards} />
      </div>
   );
};

export default ProjectsBlock;
