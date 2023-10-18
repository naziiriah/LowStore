/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import CartHub from '../../../api/Cart';

export const GetCartList = createAsyncThunk('carts/GetCartList', async (_data, thunkAPI) => {
  try {
    return await CartHub.getCartList();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const AddToCart: any = createAsyncThunk('carts/AddToCart', async (props: any, thunkAPI) => {
  try {
    return await CartHub.addToCart(props);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const EditCartItem = createAsyncThunk('carts/EditCartItem', async (props, thunkAPI) => {
  try {
    return await CartHub.editCartItem(props);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const DeleteCartItem = createAsyncThunk('carts/DeleteCartItem', async (props, thunkAPI) => {
  try {
    return await CartHub.deleteCartItem(props);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
