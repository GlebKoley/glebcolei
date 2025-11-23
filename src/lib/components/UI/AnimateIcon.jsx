const AnimateIcon = ({ src = null }) => {
   return (
      <div
         className={`tablet:mt-0 tablet:mx-[unset] tablet:w-[180px] tablet:h-[180px] tablet:right-0 tablet:translate-[unset] tablet:absolute tablet:-bottom-22 mx-auto h-[120px] w-[120px]`}
      >
         <img src={src} alt="icon" width={250} height={250} loading="lazy" className="react-icon" />
      </div>
   );
};

export default AnimateIcon;
