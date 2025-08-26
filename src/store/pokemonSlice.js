import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons(state, action) {
      state.pokemons = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setPokemons, setLoading, setError } = pokemonSlice.actions;
export default pokemonSlice.reducer;
