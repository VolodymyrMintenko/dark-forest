import { createAsyncThunk } from '@reduxjs/toolkit';

import { authorizationService, storageService } from '@/services';
import { updateAuthHeader } from '@/services/setup';
import { handleThunkApiError } from '@/utils';

export const userLogin = createAsyncThunk(
  'auth/sendVerifyAccount',
  handleThunkApiError(async (action) => {
    const data = await authorizationService.login(action);
    updateAuthHeader(data?.token ?? null);
    return storageService.setUser(data);
  }),
);

export const loadUser = createAsyncThunk(
  'auth/loadUser',
  handleThunkApiError(async () => {
    return storageService.getUser();
  }),
);

export const logOut = createAsyncThunk<null>(
  'auth/changeUserProject',
  handleThunkApiError(async () => {
    return storageService.logOut();
  }),
);
