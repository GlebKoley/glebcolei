import React from 'react';

import Link from 'next/link';

const TextLink = ({ link, $isActive, icon = null, ...restProps }) => {
   const { href, title = '' } = link;

   if (icon?.url) {
      return (
         <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...restProps}
            className="tablet:mr-4 rounded-[100px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-gray-50 hover:bg-gray-50"
         >
            <img width={30} height={30} src={icon.url} alt={icon.alt} />
         </a>
      );
   }
   return (
      <Link
         href={href}
         className={`text-link animated-border-bottom ${$isActive ? 'text-link--active' : ''} }`}
         {...restProps}
      >
         {title}
      </Link>
   );
};

export default TextLink;
