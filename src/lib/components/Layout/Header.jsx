'use client';
import React from 'react';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

import renderHeaderLinks from '@/lib/utils/renderHeaderLinks';

const BurgerMenu = dynamic(() => import('@/lib/components/Layout/BurgerMenu'));

const Header = ({ links = [] }) => {
   const pathname = usePathname();

   return (
      <header className="tablet:pb-2 desktop:pb-0 tablet:pt-5 px-4 pt-4">
         <nav
            className={`tablet:flex mx-auto hidden w-max items-center justify-center rounded-[100px] bg-[#211f2359] px-6 py-3 backdrop-blur-[20px]`}
         >
            {renderHeaderLinks({ links, pathname })}
         </nav>
         <BurgerMenu data={{ links, pathname }} />
      </header>
   );
};

export default Header;
