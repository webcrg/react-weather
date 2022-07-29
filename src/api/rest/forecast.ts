import makeRequest from '../makeRequest';
import { SERVER_URL, API_TYPE_FORECAST, URL_PARAMETERS } from '@/weatherConfig';
import { getLocaleDate, getLocaleTime } from '@/helpers';
import { IforecastResponseItem } from '@/types';

function transformForecastList(list: IforecastResponseItem[]) {
  return list.map(({ main, dt, weather }) => ({
    date: getLocaleDate(dt),
    time: getLocaleTime(dt),
    temperature: Math.round(main.temp),
    feelsLike: Math.round(main.feels_like),
    status: weather[0].main,
    icon: weather[0].icon,
  }));
}

async function getForecast(cityName: string) {
  const url = `${
    SERVER_URL + API_TYPE_FORECAST
  }?q=${cityName}${URL_PARAMETERS}`;
  const { list } = await makeRequest(url);
  const transformedList = transformForecastList(list);

  return transformedList;
}

export default getForecast;
