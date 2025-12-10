import TextLink from '@/lib/components/UI/TextLink';

import { LinksWithIcons } from '../types/common';

export type RenderHeaderLinksProps = {
   links: LinksWithIcons;
   pathname: string;
   onClick?: () => void;
};

const renderHeaderLinks = ({ onClick, links = [], pathname = '' }: RenderHeaderLinksProps) => {
   const normalizedPath = pathname === '/' ? '/' : pathname;
   return links.map(({ icon, link }, index) => {
      const isMain = link.uid === 'home';
      const href = isMain ? '/' : link.uid || link.url || '';
      const isActive = isMain ? normalizedPath === '/' : normalizedPath.includes(link.uid || '');

      return (
         <TextLink
            icon={icon}
            onClick={onClick}
            $isActive={isActive}
            key={link.uid || index}
            link={{ href, title: link.text }}
         />
      );
   });
};

export default renderHeaderLinks;
