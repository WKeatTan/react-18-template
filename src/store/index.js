import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';

import reducers from 'Reducers/index';

export function configureStore(initialState) {
  const composeEnhancers =
    process.env.NODE_ENV === 'production'
      ? compose
      : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
        compose; /** add support for Redux dev tools */

  const devTools =
    false && process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(Thunk))
      : composeEnhancers(applyMiddleware(Thunk));

  const store = createStore(reducers, initialState, devTools);

  if (module.hot) {
    /** Enable Webpack hot module replacement for reducers */
    module.hot.accept('Reducers/index', () => {
      /* eslint-disable-next-line global-require */
      const nextRootReducer = require('Reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export const store = configureStore();
