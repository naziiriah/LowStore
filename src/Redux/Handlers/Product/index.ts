import { createSlice } from '@reduxjs/toolkit';
import { GetAllProducts, GetProductByCategory } from './AsyncThunks';
import { Data } from '../../../Types/Redux';

const initialState: Data = {
  currency: 'USD',
  productStatus: 'INACTIVE',
  products: '',
  productsByCategory: '',
  productsByCategoryStatus: 'INACTIVE',
};

export const StateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(GetAllProducts.pending, (state) => {
        state.productStatus = 'PENDING';
      })
      .addCase(GetAllProducts.fulfilled, (state, actions) => {
        state.productStatus = 'SUCCESSFUL';
        state.products = actions.payload;
      })
      .addCase(GetAllProducts.rejected, (state) => {
        state.productStatus = 'FAILURE';
      })
      .addCase(GetProductByCategory.pending, (state) => {
        state.productsByCategoryStatus = 'PENDING';
      })
      .addCase(GetProductByCategory.fulfilled, (state, actions) => {
        state.productsByCategoryStatus = 'SUCCESSFUL';
        state.productsByCategory = actions.payload;
      })
      .addCase(GetProductByCategory.rejected, (state) => {
        state.productsByCategoryStatus = 'FAILURE';
      });
  },
});

export default StateSlice.reducer;
