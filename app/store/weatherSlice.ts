// import { createSlice } from '@reduxjs/toolkit';

// const initialState = { data: null };

// const weatherSlice = createSlice({
//   name: 'weather',
//   initialState,
//   reducers: {
//     setWeatherData(state, action) {
//       state.data = action.payload;
//     },
//   },
// });

// export const { setWeatherData } = weatherSlice.actions;
// export default weatherSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    setWeatherData(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, setWeatherData, setError } = weatherSlice.actions;
export default weatherSlice.reducer;