import { IforecastItem, IforecastResponseItem } from '@/components/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IforecastState {
  forecast: IforecastItem[];
  isLoading: boolean;
  error: string;
}

const initialState: IforecastState = {
  forecast: [],
  isLoading: false,
  error: '',
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    forecastFetching(state) {
      state.isLoading = true;
    },
    forecastFetchingSuccess(state, action: PayloadAction<IforecastItem[]>) {
      state.isLoading = false;
      state.error = '';
      state.forecast = action.payload;
    },
    forecastFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export { forecastSlice };
