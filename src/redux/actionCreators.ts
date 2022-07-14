import {
  ADD_CURRENT_CITY,
  UPDATE_CURRENT_WEATHER,
  SET_ACTIVE_PAGE,
  UPDATE_FORECAST,
  FAVORITES_TOGGLE,
  SET_HEART_STATE,
  INVALIDATE_WEATHER,
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  REQUEST_WEATHER_ERROR,
} from './actions';
import { getWeather } from '@/api/requestList';
import { AnyAction, Dispatch } from 'redux';
import { IcurrentWeather } from '@/components/types';

export function addCurrentCity(city) {
  return {
    type: ADD_CURRENT_CITY,
    currentCity: city,
  };
}

export function updateCurrentWeather(currentWeather) {
  return {
    type: UPDATE_CURRENT_WEATHER,
    currentWeather,
  };
}

export function updateForecast(forecast) {
  return {
    type: UPDATE_FORECAST,
    forecast,
  };
}

export function setActivePage(activePage: string) {
  return {
    type: SET_ACTIVE_PAGE,
    activePage,
  };
}

export function toggleFavoriteCity(city: string) {
  return {
    type: FAVORITES_TOGGLE,
    city,
  };
}

export function setHeartState(heartActive: boolean) {
  return {
    type: SET_HEART_STATE,
    heartActive,
  };
}

function requestWeather(city: string) {
  return {
    type: REQUEST_WEATHER,
    city,
  };
}

function receiveWeather(weather: IcurrentWeather) {
  return {
    type: RECEIVE_WEATHER,
    weather,
    receivedAt: Date.now(),
  };
}

function requestWeatherError(error: unknown) {
  return {
    type: REQUEST_WEATHER_ERROR,
    error,
  };
}

export function fetchWeather(city: string) {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(requestWeather(city));
      const response = await getWeather(city);
      console.log(response);

      dispatch(receiveWeather(response));
    } catch (error) {
      dispatch(requestWeatherError(error));
    }
  };
}
