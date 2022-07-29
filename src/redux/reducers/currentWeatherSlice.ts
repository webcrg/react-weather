import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IcurrentWeather } from '@/types';

const initialState = {
  currentCity: 'Moscow',
  weather: {},
  isLoading: false,
  error: '',
};

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
    setCurrentCity(state, action) {
      state.currentCity = action.payload;
    },
    currentWeatherFetching(state) {
      state.isLoading = true;
    },
    currentWeatherFetchingSuccess(
      state,
      action: PayloadAction<IcurrentWeather>
    ) {
      state.isLoading = false;
      state.error = '';
      state.weather = action.payload;
    },
    currentWeatherFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export { currentWeatherSlice };
