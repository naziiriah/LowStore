import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthHub from '../../../api/Auth';

export const UserLogin = createAsyncThunk('auth/loginUser', async (params, thunkAPI) => {
  try {
    return await AuthHub.userLogin(params);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
