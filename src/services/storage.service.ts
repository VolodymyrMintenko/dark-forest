import {jwtDecode} from 'jwt-decode';

import { IAuthData, IUser } from '@/types';
import { logError } from '@/utils';

import { axiosInstance } from './setup';

const setUser = (data: IAuthData | null) => {
  try {
    localStorage.setItem('token', data?.token ?? '');
    const user = data?.token ? jwtDecode<IUser>(data.token) : null;
    return user;
  } catch (error) {
    logError(error);
  }
  return null;
};

const getUser = () => {
  try {
    const token = localStorage.getItem('token');
    const user = token ? jwtDecode<IUser>(token) : null;
    return user;
  } catch (error) {
    logError(error);
  }
  return null;
};

const logOut = () => {
  try {
    localStorage.clear();
    axiosInstance.defaults.headers.common.Authorization = '';
  } catch (error) {
    logError(error);
  }
  return null;
};

const storageService = {
  setUser,
  getUser,
  logOut,
};

export default storageService;
