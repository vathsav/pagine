import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { createFirestoreInstance } from 'redux-firestore';
import thunk from 'redux-thunk';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import * as serviceWorker from './serviceWorker';

// Components
import AdminPanel from './modules/admin';
import BlogListContainer from './modules/blog/containers/list';
import BlogPostContainer from './modules/blog/containers/post';
import Error404 from './modules/error/component/404';
import HomeContainer from './modules/home/containers';
import Portfolio from './modules/portfolio/containers';
import { initGA } from './modules/tracking';
import Travel from './modules/travel/containers';

// Constants
import {
  URL_ADMIN,
  URL_BLOG_CATEGORY,
  URL_BLOG_LIST,
  URL_BLOG_POST,
  URL_HOME,
  URL_PORTFOLIO,
  URL_TRAVEL,
} from './utils/constants';

// Reducers
import reducers from './rootReducer';

// Styles
import './styles/css/main.css';


const storeEnhancers = compose(
  applyMiddleware(thunk),
);

const store = createStore(reducers, storeEnhancers);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// react-redux-firebase config
const rrfConfig = { posts: 'posts' };

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

firebase.initializeApp(firebaseConfig);

// Google Analytics
initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);

// URLs
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <Switch>
          <Route exact path={URL_ADMIN} component={AdminPanel} />
          <Route exact path={URL_BLOG_LIST} component={BlogListContainer} />
          <Route exact path={URL_BLOG_POST} component={BlogPostContainer} />
          <Route exact path={URL_BLOG_CATEGORY} component={BlogListContainer} />
          <Route exact path={URL_HOME} component={HomeContainer} />
          <Route exact path={URL_PORTFOLIO} component={Portfolio} />
          <Route exact path={URL_TRAVEL} component={Travel} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);

// PWA https://bit.ly/CRA-PWA
serviceWorker.register();
