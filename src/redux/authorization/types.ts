import { IUser } from '@/types';

export default interface IAuthState {
  user: IUser | null;
  isLoading: boolean;
}

export interface IVerifyAccountData {
  verificationToken: string;
  password: string;
}
