import { toast } from 'react-toastify';

import { IAuthData } from '@/types';
import { logError } from '@/utils';

import { axiosInstance } from './setup';

const login = async (action: any) => {
  try {
    const res = await axiosInstance
      .post<IAuthData>('api/auth', action)
      .then(({ data }) => data);
    return res;
  } catch (error) {
    toast.error(`${error}`);
    logError(error);
  }
  return null;
};

const authorizationService = {
  login,
};
export default authorizationService;
