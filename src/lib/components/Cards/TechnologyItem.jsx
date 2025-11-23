import React from 'react';

import LevelComponent from '@/lib/components/UI/LevelComponent';

const TechnologyItem = ({ item }) => {
   const { data: { icon, link, level, text = '' } = {} } = item || {};

   return (
      <a
         target="_blank"
         href={link?.url}
         rel="noopener noreferrer"
         className="group/item flex flex-row items-center gap-3.5"
      >
         <div className="rounded-full bg-[#272727] p-2">
            <img
               alt={''}
               width={30}
               height={30}
               loading="lazy"
               src={icon.url}
               className="min-h-[30px] min-w-[30px] rounded-2xl"
            />
         </div>
         <span className="description-16 tablet:group-hover/item:translate-x-1 tablet:group-hover/item:text-lightPurple text-white transition-transform duration-200">
            {text}
         </span>
         <LevelComponent level={level} />
      </a>
   );
};

export default TechnologyItem;
