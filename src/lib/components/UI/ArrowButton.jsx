import React from 'react';

const ArrowButton = ({ data, ...props }) => {
   return (
      <div className={`flex items-center justify-between gap-2 ${props?.className ?? ''}`}>
         {data?.cardLink?.text && (
            <p className="description-16 mobile:flex text-mainPurple hidden min-w-0 truncate font-semibold">
               {data?.cardLink?.text}
            </p>
         )}
         <div
            className={`group-hover:bg-mainPurple mobile:h-10 mobile:w-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 ${data?.isMailto ? 'group-hover:rotate-0' : 'group-hover:-rotate-45'} ml-auto`}
         >
            <img width={18} height={18} alt="arrow" src={data?.isMailto ? '/copy-icon.svg' : '/arrow-icon.svg'} />
         </div>
      </div>
   );
};

export default ArrowButton;
