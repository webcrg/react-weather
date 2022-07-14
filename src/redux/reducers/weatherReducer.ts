import {
  ADD_CURRENT_CITY,
  UPDATE_CURRENT_WEATHER,
  UPDATE_FORECAST,
} from '@/redux/actions';

const initialState = {
  currentCity: 'Moscow',
  stats: {},
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_CITY:
      const uniqueCityKey = state.stats[action.currentCity];
      console.log(uniqueCityKey);

      return {
        ...state,
        currentCity: action.currentCity,
        stats: {
          ...state.stats,
          [action.currentCity]: uniqueCityKey ? uniqueCityKey + 1 : 1,
        },
      };
    case UPDATE_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.currentWeather,
      };
    case UPDATE_FORECAST:
      return {
        ...state,
        forecast: action.forecast,
      };
    default:
      return state;
  }
};

export default weatherReducer;
