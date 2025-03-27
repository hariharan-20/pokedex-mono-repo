import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from './slices/pokemonSlice';
import { createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create the wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
