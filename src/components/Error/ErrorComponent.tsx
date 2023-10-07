import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '../../images/lottie/animation_lnee7jrm.json';
const ErrorComponent = () => {
  return (
    <main className='w-full h-full flex justify-center align-middle'>
      <Lottie animationData={errorAnimation} loop />
    </main>
  );
};

export default ErrorComponent;
