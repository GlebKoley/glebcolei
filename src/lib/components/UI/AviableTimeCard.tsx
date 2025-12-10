'use client';
import { useEffect, useState } from 'react';

import { asHTML } from '@prismicio/client';

import { getCalComSchedule } from '@/lib/api/calComApi';
import { ConnectCardsBlockSlice } from '@/lib/types/slices';

interface AviableTimeCardProps {
   aviabilityText: ConnectCardsBlockSlice['availability_text'];
   notAviabilityText: ConnectCardsBlockSlice['not_availability_text'];
   availabilitySubtext: ConnectCardsBlockSlice['availability_subtext'];
}

const AviableTimeCard = ({ aviabilityText, notAviabilityText, availabilitySubtext }: AviableTimeCardProps) => {
   const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

   const currentAviableText = !isAvailable ? notAviabilityText : aviabilityText;

   useEffect(() => {
      (async () => {
         const isScheduleAvailable = await getCalComSchedule();
         setIsAvailable(isScheduleAvailable);
      })();
   }, []);

   return (
      <div className="bg-lightBlack mobile:flex-row mobile:p-5 mt-2 flex flex-col items-center gap-2 rounded-2xl border border-[#272727] p-2">
         <div className="flex items-center gap-2">
            <div
               className={`${isAvailable === null ? 'bg-gray-500 blur-xs' : isAvailable ? 'bg-green-300' : 'bg-red-500'} bg-green-300} h-2.5 w-2.5 animate-pulse rounded-full`}
            />
            <span className={`${isAvailable === null ? 'blur-xs' : 'blur-none'} description-16 text-white`}>
               {currentAviableText}
            </span>
         </div>
         <span
            className="description-16 [&_a]:text-mainPurple tablet:mt-0.5"
            dangerouslySetInnerHTML={{ __html: asHTML(availabilitySubtext) }}
         />
      </div>
   );
};

export default AviableTimeCard;
