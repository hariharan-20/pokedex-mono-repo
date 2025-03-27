import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for a Pokemon item
interface Pokemon {
  name: string;
  url: string;
}

// Define the state type
interface PokemonState {
  data: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  data: [],
  loading: false,
  error: null,
};

// Create the slice
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    fetchPokemonStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPokemonSuccess(state, action: PayloadAction<Pokemon[]>) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchPokemonFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchPokemonStart, fetchPokemonSuccess, fetchPokemonFailure } = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;
