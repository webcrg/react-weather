import makeRequest from '../makeRequest';
import { SERVER_URL, API_TYPE_WEATHER, URL_PARAMETERS } from '@/weatherConfig';
import { getLocaleTime } from '@/helpers';

async function getWeather(cityName: string) {
  const url = `${SERVER_URL + API_TYPE_WEATHER}?q=${cityName}${URL_PARAMETERS}`;
  const { main, sys, weather } = await makeRequest(url);
  const { sunrise, sunset } = sys;

  return {
    sunrise: getLocaleTime(sunrise),
    sunset: getLocaleTime(sunset),
    city: cityName,
    temperature: Math.round(main.temp),
    feelsLike: Math.round(main.feels_like),
    icon: weather[0].icon,
    weather: weather[0].main,
  };
}

export default getWeather;
