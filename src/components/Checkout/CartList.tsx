import * as React from 'react';
import { CartItem } from '../../Types/Redux/Cart';
import { useSelector } from 'react-redux';

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

const CartList = () => {
  const { cart, cartStatus, total } = useSelector((state: StateType) => state.cart);
  const { currency } = useSelector((state: StateType) => state.products);

  return (
    <aside className='w-full h-44 bg-white lg:mt-0 mt-5 rounded-md shadow-md'>
      <div className='w-11/12 m-auto'>
        {cart.map((item) => (
          <div className='flex justify-between w-full py-4' key={item.id}>
            <img
              className='w-12 h-12'
              alt={item.product.title}
              src={item.product.image}
              loading='lazy'
            />
            <div className='w-4/6 mx-5'>
              <h2 className='line-clamp-1'>{item.product.title}</h2>
              <h1 className='font-bold text-lg text-gray-800 font-Raleway'>
                {currency} {item.product.price}
              </h1>
            </div>
            <div className='font-Raleway font-bold w-1/6'>
              <h2>X{item.amount}</h2>
            </div>
            <div>
              {new Intl.NumberFormat('en-US', {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              }).format(item.amount * item.product.price)}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CartList;
