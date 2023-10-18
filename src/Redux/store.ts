import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './Handlers/Product';
import CartSlice from './Handlers/Cart';
import AuthSlice from './Handlers/Auth';
import UserSlice from './Handlers/User';

export default configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSlice,
    user: UserSlice,
    auth: AuthSlice,
  },
});
