import React from 'react';

import GradientBlob from '../components/UI/GradientBlob';

const renderTwoGradientBlobs = () => {
   return (
      <>
         {[1, 2].map((_, index) => (
            <GradientBlob
               key={index}
               color="bg-lightPurple/30"
               className={`top-20 ${index === 1 ? '-right-20' : '-left-20'}`}
            />
         ))}
      </>
   );
};

export default renderTwoGradientBlobs;
