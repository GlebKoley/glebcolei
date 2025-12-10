'use client';

import { LinksWithIcons } from '@/lib/types/common';
import renderHeaderLinks from '@/lib/utils/renderHeaderLinks';

import useLogic from './logic/useLogic';

const BurgerMenu = ({ data: { pathname, links = [] } }: { data: { pathname: string; links: LinksWithIcons } }) => {
   const { isOpen, toggle } = useLogic();
   return (
      <>
         <button
            onClick={toggle}
            className="tablet:hidden relative z-50 ml-auto flex cursor-pointer transition-transform duration-200 hover:scale-85 hover:rotate-90"
         >
            <img width={35} height={35} alt={'Menu btn'} src={isOpen ? '/close-icon.svg' : '/burger-menu-icon.svg'} />
         </button>

         <div
            className={`fixed top-0 right-0 z-20 h-screen w-full transform bg-[#272727] transition-transform duration-300 ${
               isOpen ? 'pointer-events-auto translate-x-0 opacity-100' : 'pointer-events-none translate-x-full'
            }`}
         >
            <div className="flex h-full flex-col items-center justify-center gap-5">
               {renderHeaderLinks({ links, pathname, onClick: () => toggle() })}
            </div>
         </div>
      </>
   );
};

export default BurgerMenu;
