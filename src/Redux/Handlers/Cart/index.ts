import { createSlice } from '@reduxjs/toolkit';
import { GetCartList } from './AsyncThunks';
import { CartType } from '../../../Types/Redux/Cart';

const initialState: CartType = {
  cartStatus: 'INACTIVE',
  cart: [],
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    AddToLocalCart: (state, action) => {
      state.cartStatus = 'PENDING';
      setTimeout(() => {
        state.cart.push(action.payload);
        state.cartStatus = 'SUCCESSFUL';
      }, 2000);
    },
    RemoveFromLocalCart: (state, action) => {
      state.cartStatus = 'PENDING';
      setTimeout(() => {
        state.cart.filter(action.payload.id);
        state.cartStatus = 'SUCCESSFUL';
      }, 2000);
    },
    UpdateLocalCart: (state, action) => {
      state.cartStatus = 'PENDING';
      setTimeout(() => {
        state.cart.filter(action.payload.id);
        state.cartStatus = 'SUCCESSFUL';
      }, 2000);
    },
  },
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
