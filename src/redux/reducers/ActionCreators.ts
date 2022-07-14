import { getForecast } from '@/api/requestList';
import getWeather from '@/api/rest/weather';
import { AppDispatch } from '../store';
import { currentWeatherSlice } from './currentWeatherSlice';
import { forecastSlice } from './forecastSlice';

export const fetchCurrentWeather =
  (city: string) => async (dispatch: AppDispatch) => {
    const {
      currentWeatherFetching,
      currentWeatherFetchingSuccess,
      currentWeatherFetchingError,
    } = currentWeatherSlice.actions;

    try {
      dispatch(currentWeatherFetching());
      const response = await getWeather(city);
      dispatch(currentWeatherFetchingSuccess(response));
    } catch (e) {
      dispatch(currentWeatherFetchingError(e as string));
    }
  };

export const fetchForecast =
  (city: string) => async (dispatch: AppDispatch) => {
    const { forecastFetching, forecastFetchingSuccess, forecastFetchingError } =
      forecastSlice.actions;

    try {
      dispatch(forecastFetching());
      const response = await getForecast(city);
      dispatch(forecastFetchingSuccess(response));
    } catch (e) {
      dispatch(forecastFetchingError(e as string));
    }
  };
