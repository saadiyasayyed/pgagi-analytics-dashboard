import { createSlice } from '@reduxjs/toolkit';

interface FinanceState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: FinanceState = {
  data: null,
  loading: false,
  error: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    setFinanceData(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, setFinanceData, setError } = financeSlice.actions;
export default financeSlice.reducer;
