import Lottie from 'lottie-react';
import successAnimation from '../../assets/lottie/animation_lnh4xmdr.json';
import * as React from 'react';
interface SuccessProp {
  styles: string;
}
const SuccessAnimation = (prop: SuccessProp) => {
  React.useEffect(() => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }, []);

  return (
    <main className={`${prop.styles} flex justify-center align-middle`}>
      <Lottie animationData={successAnimation} loop={false} />
    </main>
  );
};

export default SuccessAnimation;
