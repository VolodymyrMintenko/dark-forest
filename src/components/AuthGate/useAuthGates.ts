import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { userLoadingSelector } from '@/redux/authorization/selectors';
import routers from '@/router/routes';
import { IUser } from '@/types';
import { getAuthRedirect } from '@/utils';

const useAuthGates = (user: IUser | null) => {
  const router = useNavigate();
  const location = useLocation();

  const loading = useSelector(userLoadingSelector);

  const unauthorizedRoutes = routers.filter((route) => route.isUnauthorized);
  const authorizedRoutes = routers.filter((route) => route.isUnauthorized === false);

  useEffect(() => {
    return () =>{getAuthRedirect({ user, location, unauthorizedRoutes, authorizedRoutes, router });} 
  }, [authorizedRoutes, location, router, unauthorizedRoutes, user]);

  return { loading, user };
};

export default useAuthGates;
