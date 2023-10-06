import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ResourceHub from '../api';

const initialState: Data = {
  currency: 'USD',
  isAllProductsPending: false,
  isAllProductsSuccess: false,
  isAllProductsFailure: false,
  Products: {},
};

interface Data {
  currency: 'USD' | 'NGN' | 'EUR' | 'JPN',
  isAllProductsPending: boolean,
  isAllProductsSuccess: boolean,
  isAllProductsFailure: boolean,
  Products: unknown,
}

export const GetAllProducts = createAsyncThunk(
  'state/GetAllproducts',
  async(thunkAPI) => {
    try {
      return await ResourceHub.getAllProducts()
    } catch (error: unknown) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const StateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(
        GetAllProducts.pending,
        (state) => {
          state.isAllProductsPending = true;
          state.isAllProductsFailure = false;
          state.isAllProductsSuccess = false;
      })
      .addCase(
        GetAllProducts.fulfilled, 
        (state, actions) => {
          state.isAllProductsPending = false;
          state.isAllProductsFailure = false;
          state.isAllProductsSuccess = true;
          state.Products = actions.payload
        }
      )
      .addCase(
        GetAllProducts.rejected,
        (state, actions) => {
          state.isAllProductsPending = false;
          state.isAllProductsFailure = true;
          state.isAllProductsSuccess = false;
          state.Products = actions.payload
        }
      )
  }
});
