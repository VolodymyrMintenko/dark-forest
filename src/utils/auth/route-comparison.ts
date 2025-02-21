import { Location } from 'history';

import { IRoutes } from '@/types';

export const routeComparison = (route: IRoutes, location: Location) => {
  const isMatch = new RegExp(
    `^${route.path
      .split('/')
      .map((part) => (part.startsWith(':') ? '([-a-zA-Z0-9()@:%_+.~#?&//=])+' : part))
      .join('/')}$`,
    'gi',
  ).test(location.pathname);
  return isMatch;
};
