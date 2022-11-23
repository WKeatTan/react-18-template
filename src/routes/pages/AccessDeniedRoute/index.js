import React from 'react';
import { useNavigate } from 'react-router-dom';

import { handleGoHome } from './actions';
import { AccessDeniedComponent } from './components';

const AccessDeniedRoute = () => {
  const navigate = useNavigate();

  return <AccessDeniedComponent handleOnClick={() => handleGoHome(navigate)} />;
};

export default AccessDeniedRoute;
