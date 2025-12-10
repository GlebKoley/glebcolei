'use client';
import { useState } from 'react';

import { asHTML } from '@prismicio/client';

import { AboutBlockSlice } from '@/lib/types/slices';

import ArrowButton from '../UI/ArrowButton';
import ModalWindow from '../UI/ModalWindow';

interface TextCardModalProps {
   cards: AboutBlockSlice['right_card_data'];
   label: AboutBlockSlice['right_card_label_text'];
}

const TextCardModal = ({ props: { cards, label } }: { props: TextCardModalProps }) => {
   const htmlLabel = asHTML(label);

   const [openIndex, setOpenIndex] = useState<number>(-1);

   return (
      <div className="flex w-full flex-col justify-center gap-4">
         <span
            dangerouslySetInnerHTML={{ __html: htmlLabel }}
            className="description-28 mobile:mt-6 mt-4 font-semibold tracking-tight text-white"
         />
         {cards.map(({ post_text, bottom_text, card_main_text }, index) => {
            return (
               <button
                  key={card_main_text}
                  onClick={() => setOpenIndex(index)}
                  className="group mobile:hover:border-[#B292FF55] mobile:hover:shadow-[0_0_25px_rgba(178,146,255,0.15)] mobile:hover:scale-[1.02] bg-lightBlack mobile:p-6 relative flex flex-col items-start gap-4 rounded-[20px] border border-[#272727] p-4 pb-11 transition-all"
               >
                  <h4 className="description-28">{card_main_text}</h4>
                  <p className="description-22 text-mainPurple text-start leading-6">{post_text}</p>
                  <span className="text-3 rounded-4xl bg-[#202129] p-2 px-3 text-center text-[14px] font-medium text-gray-400">
                     {bottom_text}
                  </span>
                  <ArrowButton className="mobile:right-4 mobile:bottom-4 absolute right-2 bottom-2" />
               </button>
            );
         })}
         {openIndex !== -1 && (
            <ModalWindow openIndex={openIndex} onClose={() => setOpenIndex(-1)}>
               <div
                  className="flex flex-col gap-3 text-white"
                  dangerouslySetInnerHTML={{ __html: asHTML(cards[openIndex]?.open_modal_data) }}
               />
            </ModalWindow>
         )}
      </div>
   );
};

export default TextCardModal;
