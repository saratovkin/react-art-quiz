import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPictures } from '../api';
import { Picture } from '../types';

const initialState = {
  pictures: <Picture[]>[],
};

const fetchImages = createAsyncThunk('homePage/fetchImages', async () => {
  const response = await getPictures();
  return response;
});

const { actions, reducer } = createSlice({
  name: 'homePage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      if (action.payload) {
        const pictures = action.payload;
        state.pictures = pictures;
      }
    });
  },
});

export { fetchImages };
export const HomePageActions = actions;
export default reducer;
