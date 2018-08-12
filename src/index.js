import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { Route, Switch } from 'react-router';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers/index';
import rootSaga from './sagas/rootSaga';

import Home from './containers/homeContainer';
import NotFound from './containers/404';
import SavedImagesContainer from './containers/savedImagesContainer';

import './index.css';
import Layout from './containers/layout';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(
      logger,
      routerMiddleware(history),
      sagaMiddleware
    )
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
     <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/save" component={SavedImagesContainer} />
          <Route component={NotFound} />
        </Switch>
     </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
