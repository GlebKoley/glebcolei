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
            className={`tablet:w-max tablet:pb-2 desktop:pb-0 tablet:pt-5 tablet:justify-self-center tablet:bg-transparent tablet:border-0 fixed z-50 w-full ${isMainPage ? 'bg-mainBlack/70 border-b border-white/10' : ''} px-4 pt-3 pb-1.5`}
         >
            <nav className="tablet:flex bg-[rgba(33, 31, 35, 0.35)] mx-auto hidden w-max items-center justify-center rounded-[100px] border border-white/10 px-6 pt-2.5 pb-3.5 backdrop-blur-[20px]">
               {renderHeaderLinks({ links, pathname })}
            </nav>

            <BurgerMenu data={{ links, pathname }} />
         </header>
         <div className="tablet:h-[90px]" />
      </>
   );
};

export default Header;
