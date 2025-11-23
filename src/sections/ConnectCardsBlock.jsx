import React from 'react';

import { asHTML } from '@prismicio/client';
import Link from 'next/link';

import ContactCard from '@/lib/components/Cards/ConnectCard';
import AviableTimeCard from '@/lib/components/UI/AviableTimeCard';
import renderTwoGradientBlobs from '@/lib/utils/renderTwoGradientBlobs';

const ConnectCardsBlock = ({ data }) => {
   const {
      Cards = [],
      title = '',
      button = {},
      description = '',
      availability_text,
      button_variant = {},
      availability_subtext,
      not_availability_text,
   } = data;

   return (
      <div className="tablet:mt-11 mt-0 flex h-full w-full justify-center overflow-hidden">
         {renderTwoGradientBlobs()}

         <div className="mobile:max-w-[1200px] tablet:gap-6 relative mx-auto flex w-full max-w-full flex-col gap-2 px-4 text-center">
            <div className="flex flex-col gap-1">
               <h1 className="title-60" dangerouslySetInnerHTML={{ __html: asHTML(title) }} />
               <span
                  className="description-22 max-w-2xl self-center"
                  dangerouslySetInnerHTML={{ __html: asHTML(description) }}
               />
            </div>

            <div className="tablet:grid-cols-4 tablet:gap-8 mt-2 grid grid-cols-2 gap-2">
               {Cards.map((item, index) => (
                  <ContactCard key={index} card={item} index={index} />
               ))}
            </div>

            <AviableTimeCard data={{ availability_text, availability_subtext, not_availability_text }} />

            {button?.text && (
               <Link
                  href={button.url}
                  className={`${button_variant?.data?.variant ?? 'btn-white'} z-10 mx-auto mt-2 w-max`}
               >
                  {button?.text}
               </Link>
            )}
         </div>
      </div>
   );
};

export default ConnectCardsBlock;
