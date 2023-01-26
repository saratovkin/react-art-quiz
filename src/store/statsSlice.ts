import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { storage } from '../helpers';

const initialState = {
  stats: <number[]>storage.get('stats') || Array(24).fill(null),
};

const { actions, reducer } = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<{ result: number; gameId: number }>) => {
      const { result, gameId } = action.payload;
      const newStats = [...state.stats];
      newStats[gameId] = newStats[gameId] < result ? result : newStats[gameId];
      storage.set('stats', newStats);
      return { ...state, stats: newStats };
    },
    clearResults: (state) => {
      storage.clear();
      return { ...state, stats: [] };
    },
  },
});

export const StatsActions = actions;
export default reducer;
