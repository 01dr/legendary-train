import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const configureStore = (initialState = {}) => {
  const middlewares = [
    routerMiddleware(history),
    thunk
  ];

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;