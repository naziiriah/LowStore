import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../Types/Redux/Cart';

interface StateType {
  cart: {
    cart: CartItem[];
    cartStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING';
  };
}
const UseCalculateTotal = () => {
  const [total, setTotal] = useState<number>(0);

  const { cart } = useSelector((state: StateType) => state.cart);

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      const amount = cart[i].amount;
      const price = cart[i].product.price;
      const itemPrice = amount * price;
      setTotal((prevAmount) => prevAmount + itemPrice);
    }
  }, [cart.length]);

  return total;
};

export default UseCalculateTotal;
