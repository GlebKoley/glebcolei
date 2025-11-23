'use client';
import React from 'react';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

import renderHeaderLinks from '@/lib/utils/renderHeaderLinks';

const BurgerMenu = dynamic(() => import('@/lib/components/Layout/BurgerMenu'));

const Header = ({ links = [] }) => {
   const pathname = usePathname();
   const isMainPage = pathname === '/';

   return (
      <>
         <header
            className={`tablet:pb-2 desktop:pb-0 tablet:pt-5 tablet:justify-self-center tablet:bg-transparent fixed z-50 w-full justify-self-end ${isMainPage ? 'bg-[#00000063]' : 'bg-transparent'} px-4 pt-3 pb-1.5`}
         >
            <nav
               className={`tablet:flex mx-auto hidden w-max items-center justify-center rounded-[100px] bg-[#211f2359] px-6 py-3 backdrop-blur-[20px]`}
            >
               {renderHeaderLinks({ links, pathname })}
            </nav>
            <BurgerMenu data={{ links, pathname }} />
         </header>
         <div className="tablet:h-[90px]" />
      </>
   );
};

export default Header;
