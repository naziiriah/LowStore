
import { useSelector } from 'react-redux';
import { CartItem } from '../Types/Redux/Cart';

interface StateType {
  cart: {
    cart: CartItem[];
    cartStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING';
  };
}
const UseCalculateTotal = () => {
  const { cart } = useSelector((state: StateType) => state.cart);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const amount = cart[i]?.amount ?? 0;
    const price = cart[i]?.product.price ?? 0;
    const itemPrice = amount * price;
    total += itemPrice;
  }
  return total;
};

export default UseCalculateTotal;
