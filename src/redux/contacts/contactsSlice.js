import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  deleteContactThunk,
  getContactsThunk,
  postContactsThunk,
} from 'redux/contacts/contactsThunk';

const handleContactsPending = state => {
  state.isLoadingContacts = true;
  state.isLoadingAddContact = false;
  state.isLoadingDellContact = false;
  state.error = '';
};

const handleContactsFulfilled = (state, { payload }) => {
  state.isLoadingContacts = false;
  state.contacts = payload;
};

const handleAddContactPending = state => {
  state.isLoadingAddContact = true;
  state.error = '';
};

const handleAddContactFulfilled = (state, { payload }) => {
  state.isLoadingAddContact = false;
};

const handleDellContactPending = state => {
  state.isLoadingDellContact = true;
  state.error = '';
};

const handleDellContactFulfilled = (state, { payload }) => {
  state.isLoadingDellContact = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoadingContacts = false;
  state.isLoadingAddContacts = false;
  state.isLoadingDellContacts = false;
  // state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handleContactsPending)
      .addCase(getContactsThunk.fulfilled, handleContactsFulfilled)
      .addCase(postContactsThunk.pending, handleAddContactPending)
      .addCase(postContactsThunk.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContactThunk.pending, handleDellContactPending)
      .addCase(deleteContactThunk.fulfilled, handleDellContactFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
