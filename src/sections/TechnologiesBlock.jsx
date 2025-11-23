import React from 'react';

import TechnologyCard from '@/lib/components/Cards/TechnologyCard';
import TitleWithButton from '@/lib/components/UI/TitleWithButton';
import renderTwoGradientBlobs from '@/lib/utils/renderTwoGradientBlobs';

const TechnologiesBlock = ({ data }) => {
   const { cards = [], title_component = {} } = data;

   return (
      <div className="main-wrapper tablet:gap-0 tablet:pt-6 flex flex-col gap-8 px-0">
         {title_component?.data && <TitleWithButton titleCenter={true} data={title_component.data} />}
         {renderTwoGradientBlobs()}

         <div className="no-scrollbar global-padding-values tablet:gap-[26px] tablet:p-11 flex snap-x snap-mandatory flex-row gap-3.5 overflow-x-auto scroll-smooth pb-0">
            {cards.map(({ technologies }, index) => (
               <TechnologyCard technology={technologies} key={technologies?.key || index} />
            ))}
         </div>
      </div>
   );
};

export default TechnologiesBlock;
