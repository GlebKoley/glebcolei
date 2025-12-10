interface ArrowButtonProps {
   isMailto?: boolean;
   cardLink?: { text: string };
   className?: string;
}

const ArrowButton = ({ cardLink, isMailto, className }: ArrowButtonProps) => {
   return (
      <div className={`flex items-center justify-between gap-2 ${className ?? ''}`}>
         {cardLink?.text && (
            <p className="description-16 mobile:flex text-mainPurple hidden min-w-0 truncate font-semibold">
               {cardLink?.text}
            </p>
         )}
         <div
            className={`group-hover:bg-mainPurple mobile:h-10 mobile:w-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 ${isMailto ? 'group-hover:rotate-0' : 'group-hover:-rotate-45'} ml-auto`}
         >
            <img width={18} height={18} alt="arrow" src={isMailto ? '/copy-icon.svg' : '/arrow-icon.svg'} />
         </div>
      </div>
   );
};

export default ArrowButton;
