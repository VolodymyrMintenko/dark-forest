import { PageAuthSettingsContextProvider } from '@/context';
import { IUser } from '@/types';

import useAuthGates from './useAuthGates';

import type { PropsWithChildren } from 'react';

const AuthGate = ({ children, user }: PropsWithChildren<{ user: IUser | null }>) => {
  const { loading } = useAuthGates(user);
  if (loading) {
    return null;
  }

  return <PageAuthSettingsContextProvider value={user}>{children}</PageAuthSettingsContextProvider>;
};

export default AuthGate;
