'use client';
import { useRef, useState } from 'react';

import Link from 'next/link';

import { ConnectCardsBlockSlice } from '@/lib/types/slices';

import ArrowButton from '../UI/ArrowButton';

const cardGradientMap: { accent: string; hover: string }[] = [
   { accent: 'rgba(161, 133, 230, 0.6)', hover: 'rgba(161, 133, 230, 0.15)' },
   { accent: 'rgba(198, 154, 255, 0.6)', hover: 'rgba(198, 154, 255, 0.15)' },
   { accent: 'rgba(95, 185, 176, 0.6)', hover: 'rgba(95, 185, 176, 0.15)' },
   { accent: 'rgba(127, 127, 127, 0.6)', hover: 'rgba(127, 127, 127, 0.15)' },
];

const ContactCard = ({ card, index = 0 }: { card: ConnectCardsBlockSlice['Cards'][0]; index?: number }) => {
   const { emoji, title, subtitle, Link: cardLink } = card;
   const [isCopied, setIsCopied] = useState<boolean>(false);
   const timeoutRef = useRef<NodeJS.Timeout>(null);

   const isMailto = cardLink.url.startsWith('mailto:');

   const cardGradientColors = cardGradientMap[index % cardGradientMap.length];

   const handleMailtoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      navigator.clipboard.writeText(cardLink.text);
      setIsCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsCopied(false), 1000);
   };

   const CardContent = (
      <div
         className={`mobile:hover:-translate-y-1 mobile:hover:shadow-[0_8px_40px_rgba(178,146,255,0.25)] from-lightBlack to-mainBlack relative flex h-full min-h-[140px] flex-col overflow-hidden rounded-3xl border-2 border-[#272727] bg-linear-to-br p-3 transition-all duration-300`}
      >
         <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
               background: `radial-gradient(circle at top right, ${cardGradientColors.hover}, transparent 70%)`,
            }}
         />

         <div className="to-lightBlack relative flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#2a2a2a] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <span className="text-[24px]">{emoji}</span>
         </div>

         <div className="relative flex flex-1 flex-col justify-between">
            <div className="mobile:mt-3 mobile:mb-8 my-2 flex flex-col gap-1">
               <p className="tablet:text-[13px] text-[11px] font-medium tracking-wider text-[#8a8a8a]">{subtitle}</p>
               <h4 className="description-28 text-white">{title}</h4>
            </div>

            <ArrowButton cardLink={cardLink} isMailto={isMailto} />
         </div>

         <div
            className="absolute top-0 right-0 h-20 w-20 opacity-20 transition-opacity duration-300 group-hover:opacity-40"
            style={{
               background: `radial-gradient(circle at top right, ${cardGradientColors.accent}, transparent 60%)`,
            }}
         />
      </div>
   );

   if (isMailto) {
      return (
         <button onClick={handleMailtoClick} className="group relative block cursor-pointer">
            {CardContent}
            <div
               className={`bg-mainPurple/50 absolute top-full left-1/2 z-10 -translate-x-1/2 rounded-md p-1 text-xs font-medium text-white shadow-lg transition-all duration-300 ease-out ${
                  isCopied ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
               }`}
            >
               <span key={'copied'} className="animate-fadeIn block">
                  Email скопирован!
               </span>
            </div>
         </button>
      );
   }

   return (
      <Link target="_blank" href={cardLink.url} rel={'noopener noreferrer'} className="group relative block">
         {CardContent}
      </Link>
   );
};

export default ContactCard;
