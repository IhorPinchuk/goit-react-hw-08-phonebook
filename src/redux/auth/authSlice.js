import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getProfileThunk, logOutThunk, loginThunk } from './authThunks';
// import { toast } from 'react-hot-toast';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
};

const handleRejected = (state, { error, payload }) => {
  // console.log('error :>> ', error);
  // console.log('payload :>> ', payload);
  state.isLoading = false;  
  state.error = payload ?? error.message;
console.log(payload ?? error.message);
  // toast.error(`${payload ?? error.message}`)
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.profile = payload;
};

const handleFulfilledLogOut = (state) => {
  state.isLoading = false;
  state.token = '';
  state.profile = null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile).addCase(logOutThunk.fulfilled, handleFulfilledLogOut).addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
