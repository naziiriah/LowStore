import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './Handlers/Product';
import CartSlice from './Handlers/Cart';
import UserSlice from './Handlers/User';
import AuthSlice from './Handlers/Auth';

export default configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSlice,
    user: UserSlice,
    auth: AuthSlice,
  },
});
