import { createSlice } from '@reduxjs/toolkit';
import { CreateUser, GetUser } from './AsyncThunks';
import { UserSliceType } from '../../../Types/Redux/Auth';

const initialState: UserSliceType = {
  userStatus: 'INACTIVE',
  createUserResponse: '',
  getUserResponse: '',
  user: false,
};

export const StateSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    StoreUser: (state, action) => {
      state.userStatus = 'PENDING';
      setTimeout(() => {
        state.user = action.payload.username;
        sessionStorage.setItem('user', JSON.stringify({ user: action.payload.username }));
        state.userStatus = 'SUCCESSFUL';
      }, 2000);
    },
    GetStoredUser: (state) => {
      const storedUser = JSON.parse(sessionStorage.getItem('user')!);
      if (!state.user && storedUser) {
        state.user = storedUser.user;
      }
    },
    RemoveStoredUser: (state) => {
      sessionStorage.removeItem('user');
      state.user = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(CreateUser.pending, (state) => {
        state.userStatus = 'PENDING';
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        state.userStatus = 'SUCCESSFUL';
        state.createUserResponse = action.payload;
        sessionStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(CreateUser.rejected, (state, action) => {
        state.userStatus = 'FAILURE';
        state.createUserResponse = action.payload;
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

export const { GetStoredUser, StoreUser, RemoveStoredUser } = StateSlice.actions;
export default StateSlice.reducer;