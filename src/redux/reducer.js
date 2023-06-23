import { combineReducers } from 'redux';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { authReducer } from './auth/authSlice';


import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'token',
  storage,
   whitelist: ['token'] 
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const reducer = combineReducers({
  auth: persistedReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
