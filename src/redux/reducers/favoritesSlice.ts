// import { SET_HEART_STATE, FAVORITES_TOGGLE } from '@/redux/actions';
import { FAVORITES_PLACEHOLDER } from '@/weatherConfig';

// const initialState = {
//   favorites: FAVORITES_PLACEHOLDER,
// };

// export const favoritesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FAVORITES_TOGGLE:
//       return {
//         ...state,
//         favorites: state.favorites.includes(action.city)
//           ? state.favorites.filter((city) => city !== action.city)
//           : [...state.favorites, action.city],
//       };
//     default:
//       return state;
//   }
// };

// export default favoritesReducer;

//

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
