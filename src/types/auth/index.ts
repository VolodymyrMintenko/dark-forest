import { NavigateFunction } from 'react-router';

import { IRoutes } from '../router';

import type { Location } from 'history';

export enum AuthAccessLevel {
    Authorized,
    Unauthorized,
  }

export interface IUser {
    equipment: string;
    firstName: string;
    lastName: string;
    userName: string;
  }

  export interface IAuthData {
    token?: string;
  }

  export interface IAuthRedirect {
    user: IUser | null;
    location: Location;
    authorizedRoutes: IRoutes[];
    unauthorizedRoutes: IRoutes[];
    router: NavigateFunction;
  }