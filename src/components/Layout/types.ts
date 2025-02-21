import { IUser } from '@/types';

import type { ReactNode } from 'react';

export interface ILayoutProps {
  children: ReactNode;
  user: IUser | null;
}
