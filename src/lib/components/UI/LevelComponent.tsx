import { LevelType } from '@/lib/types/common';

export const DOTS_CONFIG = {
   low: { coloredCounts: 1, colorClass: 'border-purple-400 bg-purple-500 shadow-md' },
   high: { coloredCounts: 3, colorClass: 'border-purple-400 bg-purple-500 shadow-md' },
   medium: { coloredCounts: 2, colorClass: 'border-purple-400 bg-purple-500 shadow-md' },
};

const LevelComponent = ({ level }: { level: LevelType }) => {
   const { colorClass, coloredCounts } = DOTS_CONFIG[level] || DOTS_CONFIG.low;

   return (
      <div className="relative ml-auto flex gap-1.5 self-center">
         {[...Array(3)].map((_, i) => (
            <span
               key={i}
               className={`dots mobile:h-2.5 mobile:w-2.5 inline-block h-2 w-2 rounded-full ${i < coloredCounts ? colorClass : 'border-gray-400 bg-gray-500 shadow-sm'} `}
            />
         ))}
      </div>
   );
};

export default LevelComponent;
