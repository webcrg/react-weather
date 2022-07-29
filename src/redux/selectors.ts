import { RootState } from './store';

export const currentCity = (state: RootState) =>
  state.currentWeather.currentCity;
export const currentWeather = (state: any) => state.currentWeather.weather;
export const forecast = (state: RootState) => state.forecast.forecast;
export const favorites = (state: RootState) => state.favorites.favorites;
