import { createContext, useContext } from 'react';

import type { IUser } from '@/types';

const defaultAuthSettigns: IUser = {
  equipment: '',
  firstName: '',
  lastName: '',
  userName: '',
};

export const PageAuthSettingsContext = createContext<IUser | null>(defaultAuthSettigns);

export const usePageAuthSettings = () => {
  return useContext(PageAuthSettingsContext);
};

export const PageAuthSettingsContextProvider = PageAuthSettingsContext.Provider;
