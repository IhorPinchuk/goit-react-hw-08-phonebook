import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getProfileThunk, logOutThunk, loginThunk } from './authThunks';

const handleLoginPending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleLoginFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
};

const handleProfilePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleProfileFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.profile = payload;
};

const handleLogOutPending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleLogOutFulfilled = state => {
  state.isLoading = false;
  state.token = '';
  state.profile = null;
};

const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
  console.log(payload ?? error.message);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetToken: state => {
      state.token = '';
      state.isLoading = false;
      state.error = '';
      state.profile = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, handleLoginPending)
      .addCase(loginThunk.fulfilled, handleLoginFulfilled)
      .addCase(getProfileThunk.pending, handleProfilePending)
      .addCase(getProfileThunk.fulfilled, handleProfileFulfilled)
      .addCase(logOutThunk.pending, handleLogOutPending)
      .addCase(logOutThunk.fulfilled, handleLogOutFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const { resetToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
