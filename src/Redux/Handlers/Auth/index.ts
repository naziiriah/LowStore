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
  reducers: {
    UserLogOut: (state) => {
      state.loginStatus = 'FAILURE';
      state.response = '';
      sessionStorage.removeItem('auth');
    },
  },
  extraReducers(builder) {
    builder
      .addCase(UserLogin.pending, (state) => {
        state.loginStatus = 'PENDING';
      })
      .addCase(UserLogin.fulfilled, (state, actions) => {
        state.loginStatus = 'SUCCESSFUL';
        state.response = actions.payload;
        sessionStorage.setItem('auth', JSON.stringify(actions.payload));
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
export const { UserLogOut } = AuthSlice.actions;
export default AuthSlice.reducer;
