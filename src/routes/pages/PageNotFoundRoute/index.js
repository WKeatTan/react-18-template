import React from 'react';
import { useNavigate } from 'react-router-dom';

import { handleGoHome } from './actions';
import { PageNotFoundComponent } from './components';

const PageNotFoundRoute = () => {
  const navigate = useNavigate();

  return <PageNotFoundComponent handleOnClick={() => handleGoHome(navigate)} />;
};

export default PageNotFoundRoute;
