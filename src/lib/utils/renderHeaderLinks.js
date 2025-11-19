import React from 'react';

import TextLink from '@/components/common/TextLink';

const renderHeaderLinks = ({ links = [], pathname = '', ...restProps }) => {
   const normalizedPath = pathname === '/' ? '/' : pathname;
   return links.map(({ icon, link }, index) => {
      if (!link) return null;

      const isMain = link.uid === 'home';
      const href = isMain ? '/' : link.uid || link.url || '';
      const isActive = isMain ? normalizedPath === '/' : normalizedPath.includes(link.uid || '');

      return (
         <TextLink
            $isActive={isActive}
            key={link.uid || index}
            link={{ href, title: link.text }}
            {...restProps}
            icon={icon}
         />
      );
   });
};

export default renderHeaderLinks;
