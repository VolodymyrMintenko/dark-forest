import { routeComparison } from './route-comparison';

import type { IAuthRedirect } from '@/types';

const getAuthRedirect = ({
  user,
  location,
  authorizedRoutes,
  unauthorizedRoutes,
  router,
}: IAuthRedirect) => {
  if (!user && !unauthorizedRoutes.some((route) => routeComparison(route, location))) {
    return router(`/library`, { replace: true });
  }
  if (user && !authorizedRoutes.some((route) => routeComparison(route, location))) {
    return router(`/`, { replace: true });
  }
};

export default getAuthRedirect;
