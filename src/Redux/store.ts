import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './Handlers/Product/index';
import CartSlice from './Handlers/Cart/index';
import UserSlice from './Handlers/User/index';
import AuthSlice from './Handlers/Auth';

export default configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSlice,
    user: UserSlice,
    auth: AuthSlice,
  },
});
