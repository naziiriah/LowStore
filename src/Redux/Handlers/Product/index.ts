import { createSlice } from '@reduxjs/toolkit';
import { GetAllProducts } from './AsyncThunks';
import { Data } from '../../../Types/Redux';

const initialState: Data = {
  currency: 'USD',
  isAllProductsPending: false,
  isAllProductsSuccess: false,
  isAllProductsFailure: false,
  products: '',
};

export const StateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(GetAllProducts.pending, (state) => {
        state.isAllProductsPending = true;
        state.isAllProductsFailure = false;
        state.isAllProductsSuccess = false;
      })
      .addCase(GetAllProducts.fulfilled, (state, actions) => {
        state.isAllProductsPending = false;
        state.isAllProductsFailure = false;
        state.isAllProductsSuccess = true;
        state.products = actions.payload;
      })
      .addCase(GetAllProducts.rejected, (state, actions) => {
        state.isAllProductsPending = false;
        state.isAllProductsFailure = true;
        state.isAllProductsSuccess = false;
        state.products = actions.payload;
      });
  },
});

export default StateSlice.reducer;
