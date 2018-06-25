import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';

import reducer from './reducer';
import App from './app';

export const basename = process.env.PUBLIC_URL;

export const history = createHistory({ basename });
const initialState = {};
const enhancers = [];
const middleware = [
    thunkMiddleware,
    routerMiddleware(history),
];

if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export const store = createStore(
    reducer,
    initialState,
    composedEnhancers
);

export const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

render(
  <Root />,
  document.getElementById('root')
);
