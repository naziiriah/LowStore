import * as React from 'react';
import CheckoutForm from '../components/Checkout/Form';
import CartList from '../components/Checkout/CartList';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Checkout = () => {
  const navigation = useNavigate();
  const handleGoBackButton = () => {
    navigation(-1);
  };
  return (
    <>
      <Header />
      <main className=' w-full min-h-screen bg-gray-100'>
        <div className='w-10/12 m-auto h-20 lg:pt-10 lg:mb-10 pt-5'>
          <Button className='bg-gray-200 capitalize' color='gray' onClick={handleGoBackButton}>
            go back
          </Button>
        </div>
        <div className='lg:flex lg:justify-between w-10/12 rounded-md min-h-screen lg:pb-10 m-auto'>
          <div className='lg:w-6/12 w-full'>
            <CheckoutForm />
          </div>
          <div className='lg:w-5/12 w-full order-first lg:order-last pb-10 lg:pb-0'>
            <CartList />
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
