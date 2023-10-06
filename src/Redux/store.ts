import { configureStore } from '@reduxjs/toolkit';
import { StateSlice } from '.';

export default configureStore({
  reducer: {
    resource: StateSlice,
  },
});
