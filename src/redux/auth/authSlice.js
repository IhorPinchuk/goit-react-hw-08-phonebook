import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getProfileThunk, loginThunk } from './authThunks';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
};

const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
    state.error = payload ?? error.message;
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.profile = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addMatcher(({ type }) => {
        type.endsWith('/pending');
      }, handlePending)
      .addMatcher(({ type }) => {
        type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
