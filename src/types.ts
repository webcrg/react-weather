export interface IcurrentWeather {
  sunrise?: string;
  sunset?: string;
  city?: string;
  temperature?: number;
  feelsLike?: number;
  icon?: string;
  weather?: string;
}

export interface IforecastItem {
  date: string;
  time: string;
  temperature: number;
  feelsLike: number;
  status: string;
  icon: string;
}

export interface IpageForecastProps {
  isActive: boolean;
}

export interface IforecastItemProps {
  info: IforecastItem;
}

export interface IpageDetailsProps {
  isActive: boolean;
}

export interface IpageNowProps {
  isActive: boolean;
}

export interface IfavoriteItemProps {
  city: string;
}

export interface IforecastWeatherItem {
  main: string;
  icon: string;
}

export interface IforecastResponseItem {
  main: {
    temp: number;
    feels_like: number;
  };
  dt: number;
  weather: IforecastWeatherItem[];
}
