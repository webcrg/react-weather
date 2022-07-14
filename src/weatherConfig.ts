export const DEFAULT_CITY = 'Moscow';
export const SERVER_URL = 'https://api.openweathermap.org/data/2.5/';
export const IMAGE_URL = 'https://openweathermap.org/img/wn/';
export const API_KEY = '38f3bbf22cf309960da40a691223d6e2';
export const API_TYPE_WEATHER = 'weather';
export const API_TYPE_FORECAST = 'forecast';
export const UNITS = 'metric';
export const FORECAST_ITEM_LIMIT = '10';
export const URL_PARAMETERS = `&appid=${API_KEY}&units=${UNITS}&cnt=${FORECAST_ITEM_LIMIT}`;
export const STORAGE_NAMES = {
  CURRENT_CITY: 'lastSelectedCity',
  FAVORITES: 'favoriteСities',
};

export const FAVORITES_PLACEHOLDER = [
  'Moscow',
  'Samara',
  'Paris',
  'Stambul',
  'London',
];

export const PAGE_NAMES = {
  NOW: 'Now',
  DETAILS: 'Details',
  FORECAST: 'Forecast',
};

export const TAB_NAMES = [
  PAGE_NAMES.NOW,
  PAGE_NAMES.DETAILS,
  PAGE_NAMES.FORECAST,
];
