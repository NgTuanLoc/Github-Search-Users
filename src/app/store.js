import { configureStore } from '@reduxjs/toolkit';

import githubUserSlice from '../features/githubUserSlice'

export const store = configureStore({
  reducer: {
    githubUser: githubUserSlice,
  },
});
