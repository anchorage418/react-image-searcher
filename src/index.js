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
// import mySaga from './sagas';

import Layout from './containers/layoutContainer';
import NotFound from './containers/404';

// import './App.css';

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

// sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
     <div>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
