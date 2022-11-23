import React from 'react';
import { useNavigate } from 'react-router-dom';

import { handleOnClick } from './actions';
import { HomeComponent } from './components';

const HomeRoute = () => {
  const navigate = useNavigate();

  return <HomeComponent handleOnClick={() => handleOnClick(navigate)} />;
};

export default HomeRoute;
