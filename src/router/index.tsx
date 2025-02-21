import React, { useMemo, JSX } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuthGate from '@/components/AuthGate';
import Layout from '@/components/Layout';
import { userSelector } from '@/redux/authorization/selectors';

import defaultRoutes from './routes'; 

const unauthorizedRoutes = defaultRoutes.filter((r) => r.isUnauthorized);

const AppRouter: React.FC = (): JSX.Element => {
  const user = useSelector(userSelector);
  const routes = useMemo(() => {
    if (!user) {
      return unauthorizedRoutes;
    }
    return defaultRoutes.filter((r) => !r.isUnauthorized);
  }, [user]);

  return (
    <Router>
      <AuthGate user={user}>
        <Routes>
          {routes.map(({ component: Component, path, name }) => (
            <Route
              path={path}
              key={name}
              element={
                <Layout user={user}>
                  <Component />
                </Layout>
              }
            />
          ))}
        </Routes>
      </AuthGate>
    </Router>
  );
};

export default AppRouter;
