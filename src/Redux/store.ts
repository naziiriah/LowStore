import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './Handlers/Product/index';
import CartSlice from './Handlers/Cart/index';
import UserSlice from './Handlers/User/index';

export default configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSlice,
    user: UserSlice,
  },
});
