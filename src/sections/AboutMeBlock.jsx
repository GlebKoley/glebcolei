'use client';
import React from 'react';

import { asHTML } from '@prismicio/client';

import AboutMeLeftCard from '@/lib/components/Cards/AboutMeLeftCard';
import TextCardModal from '@/lib/components/Cards/TextCardModal';
import Carousel from '@/lib/components/Carousel/Carousel';
import TitleWithButton from '@/lib/components/UI/TitleWithButton';
import renderTwoGradientBlobs from '@/lib/utils/renderTwoGradientBlobs';

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
         {renderTwoGradientBlobs()}

         <div className="tablet:gap-10 flex flex-col gap-6">
            {title_component?.data && <TitleWithButton titleCenter={true} data={title_component.data} />}

            <div className="mobile:flex mobile:gap-5 tablet:gap-10 hidden flex-row px-4">
               <div className="w-full">
                  <AboutMeLeftCard left_card_data={left_card_data} htmlLeftCardText={htmlLeftCardText} />
               </div>
               <div className="w-full">
                  <TextCardModal props={{ cards: right_card_data, label: right_card_label_text }} />
               </div>
            </div>

            <div className="mobile:hidden">
               <Carousel cards={[1, 2]}>
                  <div className="w-full shrink-0">
                     <AboutMeLeftCard left_card_data={left_card_data} htmlLeftCardText={htmlLeftCardText} />
                  </div>
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
