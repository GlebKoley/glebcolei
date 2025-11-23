import React from 'react';

import { asHTML } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';

import GradientBlob from '@/lib/components/UI/GradientBlob';
import { createDownloadHref } from '@/lib/utils/createDownloadHref';

const TextBlock = ({ data }) => {
   const { title, image = {}, description, buttons_group = [] } = data;
   const htmlTitle = asHTML(title);
   const htmlDescription = asHTML(description);

   return (
      <div className="main-wrapper tablet:flex-row tablet:justify-between tablet:mt-20 relative mt-0 flex flex-col justify-start gap-0">
         <GradientBlob className="-top-40 -left-20" />

         <div className="tablet:gap-[30px] tablet:mx-[unset] z-10 mx-auto flex max-w-[660px] flex-col gap-3">
            <h1 dangerouslySetInnerHTML={{ __html: htmlTitle }} className="title-75 tablet:text-start text-center" />
            <h2
               dangerouslySetInnerHTML={{ __html: htmlDescription }}
               className="description-22 tablet:text-start text-center"
            />
            {buttons_group?.length > 0 && (
               <div className="tablet:flex-row tablet:gap-7 tablet:mt-[18px] tablet:self-start mt-3 flex flex-col gap-3.5 self-center">
                  {buttons_group.map(({ link, button_variant }) => {
                     return (
                        <Link
                           key={link.key}
                           href={link.uid ?? {}}
                           className={`${button_variant?.data?.variant ?? 'btn-white'}`}
                           onClick={(event) => (link.link_type === 'Media' ? createDownloadHref(event, link) : null)}
                        >
                           {link?.text}
                        </Link>
                     );
                  })}
               </div>
            )}
         </div>
         <div className="tablet:order-1 tablet:mx-[unset] relative z-10 -order-1 mx-auto">
            <GradientBlob className="inset-0 scale-120 animate-pulse blur-[60px]" />
            <PrismicNextImage
               width={550}
               height={550}
               field={image}
               preload={true}
               fetchPriority="high"
               loading="eager"
               loader={({ src }) => `${src}&w=800&h=800&q=100&format=webp`}
               className="tablet:max-h-[550px] tablet:max-w-[550px] animate-float h-full max-h-[200px] w-full max-w-[200px] object-cover drop-shadow-2xl"
            />
         </div>
      </div>
   );
};

export default TextBlock;
