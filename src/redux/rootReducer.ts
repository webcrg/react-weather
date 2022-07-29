import { combineReducers } from 'redux';
import { favoritesSlice } from './reducers/favoritesSlice';
import { currentWeatherSlice, forecastSlice } from './reducers';

const rootReducer = combineReducers({
  currentWeather: currentWeatherSlice.reducer,
  forecast: forecastSlice.reducer,
  favorites: favoritesSlice.reducer,
});

export default rootReducer;
