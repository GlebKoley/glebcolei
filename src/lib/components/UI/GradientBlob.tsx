const GradientBlob = ({ className = '', color = 'bg-mainPurple/20' }: { className?: string; color?: string }) => {
   return (
      <div
         className={`tablet:h-[500px] tablet:w-[500px] absolute -z-10 h-[300px] w-[300px] rounded-full blur-[100px] filter ${color} ${className}`}
      />
   );
};

export default GradientBlob;
