import { createSlice } from '@reduxjs/toolkit';
import { FAVORITES_PLACEHOLDER } from '@/weatherConfig';

const initialState = {
  favorites: FAVORITES_PLACEHOLDER,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites(state, action) {
      state.favorites = state.favorites.includes(action.payload)
        ? state.favorites.filter((city) => city !== action.payload)
        : [...state.favorites, action.payload];
    },
  },
});

export { favoritesSlice };
