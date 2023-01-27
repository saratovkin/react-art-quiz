import { store, fetchImages } from './store';
import { PicturesActions } from './picturesSlice';
import { StatsActions } from './statsSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, PicturesActions, StatsActions, fetchImages };
