import { TechnologiesCard } from '@/lib/types/common';

import TechnologyItem from './TechnologyItem';

const TechnologyCard = ({ technology }: { technology: TechnologiesCard }) => {
   const {
      data: { label, technologies_data },
   } = technology || {};

   const hoverColor = 'rgba(161, 133, 230, 0.15)';

   return (
      <div className="group tablet:px-[34px] tablet:py-[26px] tablet:hover:-translate-y-1 tablet:hover:shadow-[0_8px_30px_rgba(178,146,255,0.2)] tablet:gap-3 bg-mainBlack relative flex h-max w-full min-w-[290px] snap-center flex-col gap-2 overflow-hidden rounded-xl border-2 border-[#232323] p-4 transition-all duration-300 ease-out">
         <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
               background: `radial-gradient(circle at top right, ${hoverColor}, transparent 70%)`,
            }}
         />

         <span className="description-16 relative z-10 text-white">{label}</span>

         <div className="relative z-10 flex flex-col gap-2">
            {technologies_data.map(({ technologies_item }, index) => (
               <TechnologyItem item={technologies_item} key={technologies_item?.key || index} />
            ))}
         </div>
      </div>
   );
};

export default TechnologyCard;
