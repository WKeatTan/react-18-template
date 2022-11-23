import React, { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import AppConfig from 'Constants/AppConfig';
import AppRoutes from 'Constants/AppRoutes';
import routerService from 'Services/routerService';

const HomeRoute = lazy(() => import('Routes/HomeRoute'));
const AccessDeniedRoute = lazy(() => import('Routes/pages/AccessDeniedRoute'));
const PageNotFoundRoute = lazy(() => import('Routes/pages/PageNotFoundRoute'));

const App = () => {
  const location = useLocation();

  const {
    appSettings: { theme },
  } = useSelector(({ appSettings }) => ({ appSettings }));

  /**
   * if (location.pathname in routerServices) validate token && permissions
   * else return PageNotFoundRoute
   */

  return (
    <ThemeProvider theme={AppConfig.themes[theme]}>
      <Routes>
        <Route exact path="" element={<HomeRoute />} />
        <Route exact path="/" element={<HomeRoute />} />
        <Route exact path={AppRoutes.HOME} element={<HomeRoute />} />
        <Route exact path={AppRoutes.PAGE_ACCESS_DENIED} element={<AccessDeniedRoute />} />
        <Route path="*" element={<PageNotFoundRoute />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
