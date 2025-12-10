import Link from 'next/link';

import { Icon } from '@/lib/types/common';

interface TextLinkProps {
   link: { href: string; title: string };
   $isActive: boolean;
   icon?: Icon;
   onClick?: () => void;
}

const TextLink = ({ icon, link, onClick, $isActive }: TextLinkProps) => {
   const { href, title = '' } = link;

   if (icon?.url) {
      return (
         <a
            href={href}
            target="_blank"
            onClick={onClick}
            rel="noopener noreferrer"
            className="tablet:mr-4 rounded-[100px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-gray-50 hover:bg-gray-50"
         >
            <img width={30} height={30} src={icon.url} alt={icon.alt} />
         </a>
      );
   }
   return (
      <Link
         href={href}
         onClick={onClick}
         className={`text-link animated-border-bottom ${$isActive ? 'text-link--active' : ''} }`}
      >
         {title}
      </Link>
   );
};

export default TextLink;
