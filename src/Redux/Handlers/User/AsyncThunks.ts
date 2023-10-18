/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import UserHub from '../../../api/User';

export const CreateUser: any = createAsyncThunk(
  'user/createUser',
  async (params: any, thunkAPI) => {
    try {
      return await UserHub.createUser(params);
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const GetUser = createAsyncThunk('user/GetUser', async (params: any, thunkAPI) => {
  try {
    return await UserHub.getUser(params);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const EditUser = createAsyncThunk('user/EditUser', async (params, thunkAPI) => {
  try {
    return await UserHub.editUser(params);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const DeleteUser = createAsyncThunk('user/deleteUser', async (params, thunkAPI) => {
  try {
    return await UserHub.deleteUser(params);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
