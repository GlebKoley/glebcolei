'use client';
import Dots from '@/lib/components/UI/Dots';
import { SECTIONS_TYPES } from '@/lib/utils/sectionsTypes';

import useLogic from './logic/useLogic';

const Constructor = ({ slicesData = {} }) => {
   const slices = slicesData?.slices || [];
   const { activeIndex, validSlices, setActiveIndex } = useLogic(slices);

   if (validSlices.length === 0) return null;

   return (
      <div className="relative mx-auto h-screen w-full max-w-[1600px]">
         {validSlices.map(({ id, slice_type, ...slice }, index) => {
            const Component = SECTIONS_TYPES[slice_type];
            const offset = index - activeIndex;
            const isActive = offset === 0;

            return (
               <section
                  key={id + index}
                  className="ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] absolute top-0 left-0 flex h-screen w-full justify-center transition-all duration-600 will-change-[transform,opacity,scale]"
                  style={{
                     transform: `
                translate3d(0, ${offset * 500}px, 0)
                scale(${isActive ? 1 : 0.4})
              `,
                     opacity: isActive ? 1 : 0,
                     zIndex: isActive ? 10 : 0,
                     pointerEvents: isActive ? 'auto' : 'none',
                  }}
               >
                  <Component data={slice?.primary} currentScreenIndex={activeIndex} />
               </section>
            );
         })}

         {validSlices.length > 1 && (
            <Dots
               gap="gap-2"
               direction="vertical"
               activeIndex={activeIndex}
               onDotClick={setActiveIndex}
               dotsLength={validSlices.length}
               positionClass="tablet:top-1/2 tablet:bottom-[unset] tablet:right-4 fixed right-2 bottom-[-10px] z-10 -translate-y-1/2"
            />
         )}
      </div>
   );
};

export default Constructor;
