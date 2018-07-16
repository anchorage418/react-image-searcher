import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { Route, Switch } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers/index';
import rootSaga from './sagas/rootSaga';

import Layout from './containers/layoutContainer';
import NotFound from './containers/404';
import tabsContainer from './containers/tabsContainer';

import './index.css';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
     <div>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/save" component={tabsContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
