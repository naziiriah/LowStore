import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './Handlers/Product/index';

export default configureStore({
  reducer: {
    products: ProductSlice,
  },
});
