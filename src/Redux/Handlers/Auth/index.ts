import { createSlice } from '@reduxjs/toolkit';
import { UserLogin } from './AsyncThunks';
import { AuthSliceType } from '../../../Types/Redux/Auth';

const initialState: AuthSliceType = {
  authStatus: 'PENDING',
  response: '',
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    UserLogOut: (state) => {
      state.authStatus = 'FAILURE';
      state.response = '';
      sessionStorage.removeItem('auth');
    },
  },
  extraReducers(builder) {
    builder
      .addCase(UserLogin.pending, (state) => {
        state.authStatus = 'PENDING';
      })
      .addCase(UserLogin.fulfilled, (state, actions) => {
        state.authStatus = 'SUCCESSFUL';
        state.response = actions.payload;
        sessionStorage.setItem('auth', JSON.stringify(actions.payload));
      })
      .addCase(UserLogin.rejected, (state, actions) => {
        state.authStatus = 'FAILURE';
        state.response = actions.payload;
      })
      .addDefaultCase((state) => {
        state.authStatus = 'FAILURE';
      });
  },
});
export const { UserLogOut } = AuthSlice.actions;
export default AuthSlice.reducer;
