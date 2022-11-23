import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'Store/index';

import 'Lib/reactCss';
import App from 'Container/App';
import LoadingComponent from 'Components/LoadingComponent';

const MainApp = () => (
  <Provider store={store}>
    <Suspense fallback={<LoadingComponent />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
);

export default MainApp;
