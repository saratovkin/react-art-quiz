import { configureStore } from '@reduxjs/toolkit';
import { default as picturesSlice, fetchImages } from './picturesSlice';

export const store = configureStore({
  reducer: {
    picturesReducer: picturesSlice,
  },
});
export { fetchImages };
