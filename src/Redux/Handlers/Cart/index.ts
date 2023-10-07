import { createSlice } from '@reduxjs/toolkit';
import { GetCartList } from './AsyncThunks';
import { CartType } from '../../../Types/Redux/Cart';

const initialState: CartType = {
  cartStatus: 'INACTIVE',
  data: '',
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetCartList.fulfilled, (state, action) => {
        state.cartStatus = 'SUCCESSFUL';
        state.data = action.payload;
      })
      .addCase(GetCartList.rejected, (state, action) => {
        (state.cartStatus = 'FAILURE'), (state.data = action.payload);
      })
      .addCase(GetCartList.pending, (state) => {
        state.cartStatus = 'PENDING';
      })
      .addDefaultCase((state) => {
        state.cartStatus = 'INACTIVE';
      });
  },
});

export default CartSlice.reducer;
