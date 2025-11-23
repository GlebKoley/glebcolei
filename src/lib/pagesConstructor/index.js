import React from 'react';

import { SECTIONS_TYPES } from '@/lib/utils/sectionsTypes';

const Constructor = ({ slicesData = {} }) => {
   const slices = slicesData?.slices || [];

   if (slices.length === 0) return null;

   return (
      <main className="tablet:overflow-visible relative mb-20 flex w-full max-w-[1600px] flex-col gap-[60px] justify-self-center overflow-hidden">
         {slices.map(({ id, slice_type, ...slice }, index) => {
            const Component = SECTIONS_TYPES[slice_type];

            return (
               <React.Fragment key={id + index}>
                  {index === 0 && <div className="tablet:none" />}
                  <section className={`flex w-full justify-center`}>
                     <Component data={slice?.primary} />
                  </section>
               </React.Fragment>
            );
         })}
      </main>
   );
};

export default Constructor;
