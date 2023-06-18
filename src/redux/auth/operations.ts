import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginUserData,
  logoutUserData,
  signUpUserData,
  userData,
} from '../../api/phonebook-api';
import axios from 'axios';
import {
  ILogin,
  ILoginFulfilledAction,
  IRegister,
  IRegisterFulfilledAction,
} from '../../ts/interfaces/IAuth';
import { RootState } from '../store';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk<
  IRegisterFulfilledAction,
  IRegister
>('authorization/registerUser', (credentials, thunkAPI) => {
  return signUpUserData(credentials)
    .then(user => {
      setAuthHeader(user.token);
      return user;
    })
    .catch(error => thunkAPI.rejectWithValue(error.message));
});

export const loginUser = createAsyncThunk<ILoginFulfilledAction, ILogin>(
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
      .then(() => {
        clearAuthHeader();
      })
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);

export const refreshUser = createAsyncThunk(
  'authorization/refreshUser',
  (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
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
