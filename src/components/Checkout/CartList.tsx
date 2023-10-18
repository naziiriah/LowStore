import * as React from 'react';
import { CartItem } from '../../Types/Redux/Cart';
import { useSelector } from 'react-redux';
import CheckoutModal from './CheckoutModal';

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
  const { cart } = useSelector((state: StateType) => state.cart);
  const { currency } = useSelector((state: StateType) => state.products);
  const [total, setTotal] = React.useState(0);
  const shipping = 50;

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
  const vat = 0.3 * CalculateTotal();

  React.useEffect(() => {
    cart.length > 0 && setTotal(CalculateTotal());
  }, [cart.length]);

  return (
    <aside className='w-full bg-white lg:mt-0 mt-5 rounded-md shadow-md'>
      <div className='w-11/12 m-auto'>
        <h2 className='uppercase text-2xl font-bold py-4 font-Raleway '> summary</h2>
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
              <h1 className='font-bold text-lg  font-Raleway'>
                {currency} {item.product.price}
              </h1>
            </div>
            <div className='font-Raleway text-end font-bold w-1/6'>
              <h2>X{item.amount}</h2>
            </div>
          </div>
        ))}
        <div className='w-full flex justify-between my-2'>
          <h2 className='uppercase font-Onest font-light text-base text-slate-400'>total</h2>
          <h3 className='font-bold font-Onest text-base'>
            {new Intl.NumberFormat('en-US', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            }).format(total)}
          </h3>
        </div>
        <div className='w-full flex justify-between my-2'>
          <h2 className='uppercase font-Onest font-light text-base text-slate-400'>shipping</h2>
          <h3 className='font-bold font-Onest text-base'>
            {new Intl.NumberFormat('en-US', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            }).format(shipping)}
          </h3>
        </div>
        <div className='w-full flex justify-between my-2'>
          <h2 className='uppercase font-Onest font-light text-base text-slate-400'>vat</h2>
          <h3 className='font-bold font-Onest text-base'>
            {new Intl.NumberFormat('en-US', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            }).format(vat)}
          </h3>
        </div>
        <div className='w-full flex justify-between mt-4'>
          <h2 className='uppercase font-Onest font-bold text-base text-slate-500'>grand total</h2>
          <h3 className='font-bold font-Onest text-base'>
            {new Intl.NumberFormat('en-US', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            }).format(vat + shipping + total)}
          </h3>
        </div>
        <CheckoutModal grandTotal={vat + shipping + total} cart={cart} currency={currency} />
        <div className='h-10 w-full'></div>
      </div>
    </aside>
  );
};

export default CartList;
