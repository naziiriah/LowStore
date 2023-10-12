import React from 'react';
import Lottie from 'lottie-react';
import CartAnimation from '../../assets/lottie/animation_lnk6zssi.json';
const CartSection = () => {
  return (
    <article className='w-full h-96 lg:mb-0 mb-32'>
      <div className='lg:w-10/12 w-11/12 lg:flex lg:justify-between m-auto h-full'>
        <div className='lg:w-2/5 w-full h-full'>
          <h3 className='font-bold uppercase font-Raleway text-center text-lg  mb-5'>
            With Outside, You can view your order and edit your carts real time
          </h3>
          <p className='font-Raleway text-lg my-4 lg:text-start text-center'>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, in. Repellat fuga aliquam
            dolor ipsa saepe reiciendis quisquam qui voluptatibus nemo ratione. Dignissimos aut
            beatae minus voluptatum eaque ea sapiente?
          </p>
        </div>
        <div className='lg:w-2/5 w-full h-full lg:text-start text-center lg:mt-0 -mt-52'>
          <div className='w-4/5 flex justify-center -mt-32 h-full'>
            <Lottie animationData={CartAnimation} loop></Lottie>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartSection;
