import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { loginUser, logoutUser, refreshUser, registerUser } from './operations';
import storage from 'redux-persist/lib/storage';
import { errorLogin, errorRegister } from 'utils/notification';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  errorAuth: null,
};

const authSlice = createSlice({
  name: 'authorization',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
        state.errorAuth = null;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorAuth = payload;
        errorRegister();
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
        state.errorAuth = null;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorAuth = payload;
        errorLogin();
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };
        state.errorAuth = null;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
