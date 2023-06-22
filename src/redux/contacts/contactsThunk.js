import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from '../../components/services/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, {rejectWithValue}) => {
    try {
      return await getContacts()
      
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const postContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, {rejectWithValue, dispatch }) => {
    try {
      await addContact(newContact);
      return await dispatch(getContactsThunk());
      
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, {rejectWithValue, dispatch }) => {
    try {
      await deleteContact(id);
      return await dispatch(getContactsThunk());
      
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
