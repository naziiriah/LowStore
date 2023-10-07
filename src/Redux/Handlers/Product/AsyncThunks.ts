import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductHub from '../../../api/Product';

export const GetAllProducts = createAsyncThunk('state/GetAllproducts', async (thunkAPI) => {
  try {
    return await ProductHub.getAllProducts();
  } catch (error: unknown) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
