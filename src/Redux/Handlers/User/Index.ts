import { createSlice } from '@reduxjs/toolkit';
import { CreateUser, GetUser } from './AsyncThunks';
import { UserSliceType } from '../../../Types/Redux/Auth';

const initialState: UserSliceType = {
  userStatus: 'INACTIVE',
  createUserResponse: '',
  getUserResponse: '',
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(CreateUser.pending, (state) => {
        state.userStatus = 'PENDING';
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        state.userStatus = 'SUCCESSFUL';
        state.createUserResponse = action.payload;
      })
      .addCase(CreateUser.rejected, (state) => {
        state.userStatus = 'FAILURE';
      })
      .addCase(GetUser.fulfilled, (state, action) => {
        state.getUserResponse = action.payload;
        state.userStatus = 'SUCCESSFUL';
      })
      .addCase(GetUser.rejected, (state) => {
        state.userStatus = 'FAILURE';
      })
      .addCase(GetUser.pending, (state) => {
        state.userStatus = 'PENDING';
      });
  },
});

export default UserSlice.reducer;
