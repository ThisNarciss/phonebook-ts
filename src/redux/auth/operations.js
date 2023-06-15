import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginUserData,
  logoutUserData,
  signUpUserData,
  userData,
} from 'api/phonebook-api';
import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'authorization/registerUser',
  (credentials, thunkAPI) => {
    return signUpUserData(credentials)
      .then(user => {
        setAuthHeader(user.token);
        return user;
      })
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);

export const loginUser = createAsyncThunk(
  'authorization/loginUser',
  (credentials, thunkAPI) => {
    return loginUserData(credentials)
      .then(user => {
        setAuthHeader(user.token);
        return user;
      })
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);

export const logoutUser = createAsyncThunk(
  'authorization/logoutUser',
  (_, thunkAPI) => {
    return logoutUserData()
      .then(clearAuthHeader())
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);

export const refreshUser = createAsyncThunk(
  'authorization/refreshUser',
  (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(persistedToken);
    return userData()
      .then(user => user)
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);
