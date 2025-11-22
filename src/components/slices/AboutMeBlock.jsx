import React from 'react';

import { asHTML } from '@prismicio/client';
import Link from 'next/link';

import TextCardModal from '../common/Cards/TextCardModal';
import Carousel from '../common/Carousel/Carousel';
import TitleWithButton from '../common/TitleWithButton';

const hoverCardBorders = [
   'hover:bg-[#B292FF55]',
   'hover:bg-[#5FB9B055]',
   'hover:bg-[#FF6F6F55]',
   'hover:bg-[#6FFB9B55]',
   'hover:bg-[#FFD55F55]',
];

const renderLeftCardContent = ({ htmlLeftCardText, left_card_data = [] }) => {
   return (
      <div className="mobile:hover:scale-[1.03] mobile:p-6 bg-lightBlack flex h-full flex-col gap-4 rounded-2xl px-3 py-4 transition-transform duration-300 ease-out">
         {htmlLeftCardText && (
            <span
               dangerouslySetInnerHTML={{ __html: htmlLeftCardText }}
               className="description-28 font-semibold tracking-tight text-white"
            />
         )}
         <div className="mobile:gap-3 grid h-full grid-cols-2 gap-2">
            {left_card_data.map(({ emoji, top_text, link = {}, main_text }, index) => (
               <Link
                  key={index}
                  rel="noopener noreferrer"
                  href={link?.url ?? link.uid ?? {}}
                  target={link.uid || link.link_type === 'Any' ? '_self' : '_blank'}
               >
                  <div
                     className={`tablet:flex-row mobile:gap-2 relative flex h-full flex-col items-start gap-0 rounded-xl border border-[#272727] bg-[#111111] py-3 pr-7 pl-4 transition-all ${
                        hoverCardBorders[index % hoverCardBorders.length]
                     }`}
                  >
                     <span
                        dangerouslySetInnerHTML={{ __html: emoji?.[0]?.text }}
                        className="mobile:static absolute right-1 bottom-2 text-[20px]"
                     />
                     <div>
                        <p className="text-[14px] text-[#c8c8c8c7]">{top_text}</p>
                        <p className="description-16 text-white">{main_text}</p>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
};

const AboutMeBlock = ({ data }) => {
   const {
      left_card_data = [],
      left_card_label_text,
      right_card_data = [],
      title_component = {},
      right_card_label_text,
   } = data;
   const htmlLeftCardText = asHTML(left_card_label_text);

   return (
      <div className="main-wrapper tablet:mt-11">
         <div className="tablet:gap-10 flex flex-col gap-6">
            {title_component?.data && <TitleWithButton data={title_component.data} />}

            <div className="mobile:flex mobile:gap-5 tablet:gap-10 hidden flex-row px-4">
               <div className="w-full">{renderLeftCardContent({ left_card_data, htmlLeftCardText })}</div>
               <div className="w-full">
                  <TextCardModal props={{ cards: right_card_data, label: right_card_label_text }} />
               </div>
            </div>

            <div className="mobile:hidden">
               <Carousel cards={[1, 2]}>
                  <div className="w-full shrink-0">{renderLeftCardContent({ left_card_data, htmlLeftCardText })}</div>
                  <div className="w-full shrink-0">
                     <TextCardModal props={{ cards: right_card_data, label: right_card_label_text }} />
                  </div>
               </Carousel>
            </div>
         </div>
      </div>
   );
};

export default AboutMeBlock;
