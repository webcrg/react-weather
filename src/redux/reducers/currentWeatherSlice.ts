import { IcurrentWeather } from '@/components/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  weather: {},
  isLoading: false,
  error: '',
};

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
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
