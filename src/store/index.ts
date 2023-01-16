import { store, fetchImages } from './store';
import { HomePageActions } from './picturesSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, HomePageActions, fetchImages };
