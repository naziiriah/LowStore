import * as React from 'react';
import CheckoutForm from '../components/Checkout/Form';
import CartList from '../components/Checkout/CartList';

const Checkout = () => {
  return (
    <main className=' lg:flex lg:justify-between w-11/12 m-auto'>
      <div className='lg:w-6/12 w-full'>
        <CheckoutForm />
      </div>
      <div className='lg:w-5/12 w-full order-first lg:order-last'>
        <CartList />
      </div>
    </main>
  );
};

export default Checkout;
