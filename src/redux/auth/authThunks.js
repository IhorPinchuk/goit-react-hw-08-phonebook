import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logOut, login } from 'components/services/authApi';


export const getProfileThunk = createAsyncThunk('auth/profile', () =>
  getProfile()
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await login(body);
      dispatch(getProfileThunk());
      return data;
    } catch (error) {
      if (error.response.status === 400) {  
        
        return rejectWithValue('Invalid email or password')
      }
      
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, {rejectWithValue}) => {
    try {
      await logOut()
    } catch (error) {
      if (error.response.status === 404) {  
        
        return rejectWithValue('Failed to sign out of account')
      }
      return rejectWithValue(error.response.data.message);
    }
  }
)
