import React from 'react';

import { asHTML } from '@prismicio/client';
import Link from 'next/link';

import { createDownloadHref } from '@/lib/utils/createDownloadHref';

const TitleWithButton = ({ data, titleCenter = false }) => {
   const { title, button = {}, button_variant = {} } = data;
   const htmlTitle = asHTML(title);

   return (
      <div className="tablet:gap-[22px] mb-0 flex flex-col items-center gap-5 text-center">
         <h2
            dangerouslySetInnerHTML={{ __html: htmlTitle }}
            className={`description-30 ${titleCenter ? 'tablet:text-center' : ''}`}
         />
         {button?.link_type && (
            <Link
               href={button.uid ?? {}}
               className={`${button_variant?.data?.variant ?? 'btn-white'} w-max`}
               onClick={(event) => (button.link_type === 'Media' ? createDownloadHref(event, button) : null)}
            >
               {button?.text}
            </Link>
         )}
      </div>
   );
};

export default TitleWithButton;
