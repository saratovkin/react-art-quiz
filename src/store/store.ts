import { configureStore } from '@reduxjs/toolkit';
import { default as picturesSlice, fetchImages } from './picturesSlice';
import { default as statsSlice } from './statsSlice';

export const store = configureStore({
  reducer: {
    picturesReducer: picturesSlice,
    statsReducer: statsSlice,
  },
});
export { fetchImages };
