import { createSlice } from '@reduxjs/toolkit';

interface NewsState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  data: null,
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    setNewsData(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, setNewsData, setError } = newsSlice.actions;
export default newsSlice.reducer;
