import React from 'react';

import TechnologyItem from './TechnologyItem';

const TechnologyCard = ({ technology }) => {
   const { data: { label = '', technologies_data = [] } = {} } = technology || {};
   return (
      <div className="tablet:px-[34px] tablet:py-[26px] tablet:hover:shadow-xl tablet:hover:shadow-purple-500/30 tablet:gap-3 bg-mainBlack flex h-max w-full min-w-[290px] snap-center flex-col gap-2 rounded-xl border-2 border-[#232323] p-4 transition-all duration-300 ease-out">
         <span className="description-16 text-white">{label}</span>

         {technologies_data.map(({ technologies_item }, index) => (
            <TechnologyItem item={technologies_item} key={technologies_item?.key || index} />
         ))}
      </div>
   );
};

export default TechnologyCard;
