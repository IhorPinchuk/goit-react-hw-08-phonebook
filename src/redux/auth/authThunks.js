import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logOut, login } from 'components/services/authApi';


export const getProfileThunk = createAsyncThunk('auth/profile', async (_, {rejectWithValue}) => {
  try {
  return await getProfile()
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
}  
);

// export const getProfileThunk = createAsyncThunk('auth/profile', () =>
//   getProfile()
// );

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      
      const data = await login(body);
    //  await dispatch(getProfileThunk());
      return data;
    } catch (error) {
           return rejectWithValue(error.response.data.message);
    }
  }
);

// export const loginThunk = createAsyncThunk(
//   'auth/login',
//   async (body, { rejectWithValue, dispatch }) => {
//     try {
//       const data = await login(body);
//       dispatch(getProfileThunk());
//       return data;
//     } catch (error) {
//            return rejectWithValue(error.response.data.message);
//     }
//   }
// );

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, {rejectWithValue}) => {
    try {
      await logOut()
    } catch (error) {      
      return rejectWithValue(error.response.data.message);
    }
  }
)
