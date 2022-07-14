import { combineReducers } from 'redux';
import weatherReducer from './reducers/weatherReducer';
import tabsReducer from './reducers/tabsReducer';
import { favoritesSlice } from './reducers/favoritesSlice';
import { currentWeatherSlice, forecastSlice } from './reducers';

const rootReducer = combineReducers({
  weatherReducer,
  tabsReducer,
  currentWeather: currentWeatherSlice.reducer,
  forecast: forecastSlice.reducer,
  favorites: favoritesSlice.reducer,
});

export default rootReducer;
