import React from 'react';

import { asHTML } from '@prismicio/client';
import Link from 'next/link';

import AnimateIcon from '@/lib/components/UI/AnimateIcon';
import renderTwoGradientBlobs from '@/lib/utils/renderTwoGradientBlobs';

const TextBlockWithAnimatedIcon = ({ data }) => {
   const { title, button_link, description, button_variant } = data;

   const htmlTitle = asHTML(title);
   const htmlDescription = asHTML(description);

   return (
      <div className="main-wrapper tablet:gap-10 mobile:max-w-[1150px] relative max-w-full gap-3 text-center">
         {renderTwoGradientBlobs()}

         <div className="group from-lightBlack to-mainBlack tablet:p-[50px_20px_80px_20px] relative overflow-hidden rounded-[40px] border-2 border-[#272727] bg-linear-to-br px-4 py-10 transition-all duration-350 hover:shadow-[0_0_40px_rgba(178,146,255,0.2)]">
            <div className="absolute inset-0 opacity-0 transition-opacity duration-350 group-hover:opacity-100" />

            <div
               style={{ background: 'radial-gradient(circle at top right, rgba(161, 133, 230, 0.5), transparent 60%)' }}
               className="absolute top-0 right-0 h-32 w-32 opacity-20 transition-opacity duration-350 group-hover:opacity-40"
            />

            <div className="tablet:gap-10 relative z-10 flex flex-col gap-6">
               <h2 className="title-60" dangerouslySetInnerHTML={{ __html: htmlTitle }} />
               <span
                  className="description-22 max-w-2xl self-center"
                  dangerouslySetInnerHTML={{ __html: htmlDescription }}
               />

               <Link
                  href={`/${button_link.slug}`}
                  className={`relative z-10 mx-auto ${button_variant?.data?.variant ?? 'btn-white'} w-max transition-all duration-300 hover:scale-110`}
               >
                  <span className="btn-title">{button_link.text}</span>
               </Link>
            </div>
         </div>

         <AnimateIcon activeScreenIndex={2} src="/react-icon-white.svg" />
      </div>
   );
};

export default TextBlockWithAnimatedIcon;
