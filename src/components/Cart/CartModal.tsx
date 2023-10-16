/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Spinner } from 'flowbite-react';
import * as React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { GetCartList } from '../../Redux/Handlers/Cart/AsyncThunks';
import { Dispatch } from '@reduxjs/toolkit';
import { CartItem } from '../../Types/Redux/Cart';
import SingleCartItem from './SingleCartItem';
import Lottie from 'lottie-react';
import EmptyAnimation from '../../assets/lottie/animation_lnpw5pxi.json';
import { useNavigate } from 'react-router-dom';
import { GetCartFromStorage } from '../../Redux/Handlers/Cart';

interface StateType {
  cart: {
    cart: CartItem[];
    cartStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING';
    total: number;
  };
  products: {
    currency: string;
  };
}
const CartModal = () => {
  const [openModal, setOpenModal] = React.useState<string | undefined>();
  const modalPlacement = 'top-right';
  const { cart, cartStatus } = useSelector((state: StateType) => state.cart);
  const { currency } = useSelector((state: StateType) => state.products);
  const dispatch: Dispatch<any> = useDispatch();
  const navigation = useNavigate();
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    if (openModal === 'placement') {
      dispatch(GetCartList());
    }
  }, [openModal]);
  React.useEffect(() => {
    const checkCartInStorage = JSON.parse(sessionStorage.getItem('cart')!);
    if (checkCartInStorage) {
      dispatch(GetCartFromStorage({ cart: checkCartInStorage }));
    }
  }, []);

  React.useEffect(() => {
    cart.length > 0 && setTotal(CalculateTotal());
  }, [cart.length]);

  const CalculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const amount = cart[i]?.amount ?? 0;
      const price = cart[i]?.product.price ?? 0;
      const itemPrice = amount * price;
      total += itemPrice;
    }
    return total;
  };

  const handleClick = () => {
    navigation('/checkout');
  };

  return (
    <>
      <Button
        aria-label='cart'
        color='white'
        className=' rounded-full shadow-2xl mx-3 bg-white'
        onClick={() => setOpenModal('placement')}
      >
        <TiShoppingCart className='text-xl' />
      </Button>
      <Modal
        show={openModal === 'placement'}
        position={modalPlacement}
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header>Cart</Modal.Header>
        <Modal.Body>
          {cartStatus === 'PENDING' && (
            <div className='flex justify-center'>
              <Spinner size={'lg'} />
            </div>
          )}
          {cartStatus === 'SUCCESSFUL' && (
            <>
              {cart.map((state) => (
                <SingleCartItem item={state} currency={currency} key={state.id} />
              ))}
              {cart.length > 0 && (
                <div className='w-full flex justify-between border-t-2 border-gray-800 border-solid mt-4'>
                  <h3 className='font-Raleway text-xl font-extrabold'>Total</h3>
                  <h2 className='font-Raleway text-xl font-extrabold text-gray-700'>
                    {currency}
                    {new Intl.NumberFormat('en-US', {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    }).format(total)}
                  </h2>
                </div>
              )}
              {cart.length === 0 && (
                <div className='w-2/3 m-auto '>
                  <Lottie animationData={EmptyAnimation} loop />
                  <h3 className='text-center font-Raleway text-blue-500 capitalize font-bold text-lg'>
                    cart is empty!!
                  </h3>
                </div>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {cartStatus === 'SUCCESSFUL' && cart.length > 0 && (
            <Button
              color='black'
              className='w-full bg-black text-white font-bold font-Raleway '
              onClick={handleClick}
            >
              checkout
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
