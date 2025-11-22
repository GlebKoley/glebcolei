import React from 'react';

import { asHTML } from '@prismicio/client';
import Link from 'next/link';

import AnimateIcon from '@/lib/components/AnimateIcon';

const ContactMeBlock = ({ data, currentScreenIndex }) => {
   const { title, button_link, description, button_variant } = data;

   const htmlTitle = asHTML(title);
   const htmlDescription = asHTML(description);

   return (
      <div className="main-wrapper tablet:gap-10 mobile:max-w-[1150px] relative mx-auto mt-[8dvh] max-w-full gap-3 text-center">
         <h2 className="title-80" dangerouslySetInnerHTML={{ __html: htmlTitle }} />
         <span className="description-22 max-w-2xl self-center" dangerouslySetInnerHTML={{ __html: htmlDescription }} />
         <Link
            href={`/${button_link.slug}`}
            className={`z-10 mx-auto mt-0 ${button_variant?.data?.variant ?? 'btn-white'} w-max`}
         >
            <span className="btn-title">{button_link.text}</span>
         </Link>
         <AnimateIcon activeScreenIndex={2} src="/react-icon-white.svg" componentScreenIndex={currentScreenIndex} />
      </div>
   );
};

export default ContactMeBlock;
