import { createSlice } from '@reduxjs/toolkit';
import { UserLogin } from './AsyncThunks';
import { AuthSliceType } from '../../../Types/Redux/Auth';

const initialState: AuthSliceType = {
  loginStatus: 'PENDING',
  response: '',
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(UserLogin.pending, (state) => {
        state.loginStatus = 'PENDING';
      })
      .addCase(UserLogin.fulfilled, (state, actions) => {
        state.loginStatus = 'SUCCESSFUL';
        state.response = actions.payload;
      })
      .addCase(UserLogin.rejected, (state, actions) => {
        state.loginStatus = 'FAILURE';
        state.response = actions.payload;
      })
      .addDefaultCase((state) => {
        state.loginStatus = 'FAILURE';
      });
  },
});

export default AuthSlice.reducer;
