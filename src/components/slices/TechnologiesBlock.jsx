import React from 'react';

import LevelComponent from '../common/LevelComponent';
import TitleWithButton from '../common/TitleWithButton';

const TechnologiesBlock = ({ data }) => {
   const { cards = [], title_component = {} } = data;

   return (
      <div className="main-wrapper tablet:gap-12 tablet:pt-6 flex flex-col gap-8 px-0">
         {title_component?.data && <TitleWithButton data={title_component.data} />}

         <div className="no-scrollbar global-padding-values tablet:gap-[26px] tablet:pb-0 flex snap-x snap-mandatory flex-row gap-3.5 overflow-x-auto scroll-smooth pb-0">
            {cards.map(({ technologies }) => {
               const { key, data: { label = '', technologies_data = [] } = {} } = technologies || {};
               return (
                  <div
                     key={key}
                     className="tablet:px-[34px] tablet:py-[26px] tablet:hover:shadow-xl tablet:hover:shadow-purple-500/30 tablet:gap-3 bg-mainBlack flex h-max w-full min-w-[290px] snap-center flex-col gap-2 rounded-xl border-2 border-[#232323] p-4 transition-all duration-300 ease-out"
                  >
                     <span className="description-16 text-white">{label}</span>

                     {technologies_data.map(({ technologies_item }) => {
                        const { key: itemKey, data: { icon, link, level, text = '' } = {} } = technologies_item || {};

                        return (
                           <a
                              key={itemKey}
                              target="_blank"
                              href={link?.url}
                              rel="noopener noreferrer"
                              className="group flex flex-row items-center gap-3.5"
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
                              <span className="description-16 tablet:group-hover:translate-x-1 tablet:group-hover:text-lightPurple text-white transition-transform duration-200">
                                 {text}
                              </span>
                              <LevelComponent level={level} />
                           </a>
                        );
                     })}
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default TechnologiesBlock;
