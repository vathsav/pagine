import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import * as serviceWorker from './serviceWorker';

// Components
import Blog from './modules/blog';
import Error404 from './modules/error/component/404';
import HomeContainer from './modules/home/index';
import Portfolio from './modules/portfolio';

// Constants
import { URL_BLOG, URL_HOME, URL_PORTFOLIO } from './utils/constants';

// Reducers
import reducers from './rootReducer';

// Styles
import './styles/css/main.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

firebase.initializeApp(firebaseConfig);

const rrfConfig = { userProfile: 'users' }; // react-redux-firebase config

const storeEnhancers = compose(
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk.withExtraArgument({
  })),
);

const store = createStore(reducers, storeEnhancers);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};


// URLs
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <Switch>
          <Route exact path={URL_HOME} component={HomeContainer} />
          <Route exact path={URL_BLOG} component={Blog} />
          <Route exact path={URL_PORTFOLIO} component={Portfolio} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);

// PWA https://bit.ly/CRA-PWA
serviceWorker.register();
