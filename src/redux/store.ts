import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch } from 'react-redux';

import getInitialReduxState from '@/utils/auth/get-initial-redux-state';

import { authReducer } from './authorization';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: getInitialReduxState(),
});

export const useDispatch = () => useAppDispatch<AppDispatch>();

export type Store = typeof store;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
