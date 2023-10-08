import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import successAnimation from '../../images/lottie/animation_lnh4xmdr.json';

const SuccessAnimation = ({ styles }) => {
  useEffect(() => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }, []);

  return (
    <main className={`${styles} flex justify-center align-middle`}>
      <Lottie animationData={successAnimation} loop={false} />
    </main>
  );
};

export default SuccessAnimation;
