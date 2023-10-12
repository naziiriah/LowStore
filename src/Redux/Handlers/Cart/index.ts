import { createSlice } from '@reduxjs/toolkit';
import { AddToCart, GetCartList } from './AsyncThunks';
import { CartType } from '../../../Types/Redux/Cart';

const initialState: CartType = {
  cartStatus: 'INACTIVE',
  alert: false,
  cart: [],
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    AddToLocalCart: (state, { payload }) => {
      state.cart.push(payload.cart);
    },
    RemoveFromLocalCart: (state, action) => {
      state.cart.filter(action.payload.id);
    },
    UpdateLocalCart: (state, action) => {
      state.cart.filter(action.payload.id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(GetCartList.fulfilled, (state, action) => {
        state.cartStatus = 'SUCCESSFUL';
      })
      .addCase(GetCartList.rejected, (state) => {
        state.cartStatus = 'FAILURE';
      })
      .addCase(GetCartList.pending, (state) => {
        state.cartStatus = 'PENDING';
      })
      .addCase(AddToCart.pending, (state) => {
        state.cartStatus = 'PENDING';
      })
      .addCase(AddToCart.rejected, (state) => {
        state.cartStatus = 'FAILURE';
      })
      .addCase(AddToCart.fulfilled, (state) => {
        state.cartStatus = 'SUCCESSFUL';
        state.alert = true;
      })
      .addDefaultCase((state) => {
        state.cartStatus = 'INACTIVE';
        state.alert = false;
      });
  },
});
export const { AddToLocalCart, RemoveFromLocalCart, UpdateLocalCart } = CartSlice.actions;
export default CartSlice.reducer;
