import React from 'react';

import { SECTIONS_TYPES } from '@/lib/utils/sectionsTypes';

import { ConstructorSlice } from '../types/slices';

type SliceComponentProps<S extends ConstructorSlice> = {
   data: S['primary'];
};

const Constructor = ({ slices }: { slices: ConstructorSlice[] }) => {
   if (!slices.length) return null;

   return (
      <main className="tablet:overflow-visible relative mb-20 flex w-full max-w-[1600px] flex-col gap-[60px] justify-self-center overflow-hidden">
         {slices.map((slice, index) => {
            const Component = SECTIONS_TYPES[slice.slice_type] as React.FC<SliceComponentProps<typeof slice>>;
            if (!Component) return null;

            const { id, primary } = slice;
            return (
               <React.Fragment key={id + index}>
                  {index === 0 && <div className="tablet:hidden" />}
                  <section className="flex w-full justify-center">
                     <Component data={primary} />
                  </section>
               </React.Fragment>
            );
         })}
      </main>
   );
};

export default Constructor;
